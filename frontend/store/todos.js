export const state = () => ({
    list: []
})

import {
    DefaultApi
} from "todo";

export const getters = {
    list(state) {
        console.log(state.list)
        return state.list
    }
}

export const mutations = {
    addList(state, list) {
        state.list = list
    },

    add(state, {
        id,
        lable,
        isComplete
    }) {
        state.list.push({
            id,
            lable,
            isComplete: isComplete
        })
    },

    remove(state, {
        todo
    }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },

    toggle(state, todo) {
        todo.isComplete = !todo.isComplete
    }
}

const api = new DefaultApi();

export const actions = {
    async fetch({
        commit
    }) {
        const rawData = await api.listGet();
        const list = [];

        for (let key in rawData) {
            let task = rawData[key];
            list.push({
                id: task.id,
                lable: task.lable,
                isComplete: task.isComplete === true
            });
        }

        commit('addList', list)
    },

    async send({
        commit,
        dispatch
    }, item) {
        api.taskPut(item);
        dispatch('fetch')
    },

    async sendToggle({
        commit,
        dispatch
    }, item) {
        commit("toggle", item)
        api.taskPut(item);
    }
}