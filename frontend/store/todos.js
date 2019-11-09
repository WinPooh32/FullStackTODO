import {
    DefaultApi
} from "todo";

export const state = () => ({
    list: []
})

export const getters = {
    list(state) {
        return state.list
    }
}

export const mutations = {
    addList(state, list) {
        state.list = list
    },

    add(state, task) {
        state.list.push(task)
    },

    remove(state, task) {
        state.list.splice(state.list.indexOf(task), 1)
    },

    toggle(state, {
        task,
        value
    }) {
        task.isComplete = value
    }
}

const api = new DefaultApi()

export const actions = {
    async fetch({
        commit
    }) {
        const rawData = await api.listGet()
        const list = []

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
    }, task) {
        await api.taskPut(task)
        dispatch('fetch')
    },

    async sendToggle({
        commit,
        dispatch
    }, ops) {
        commit("toggle", ops)
        await api.taskPut(ops.task)
    }
}