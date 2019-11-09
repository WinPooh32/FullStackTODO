<template>
  <div>
    <!-- Using components -->
    <b-input-group>
      <b-form-input
        v-model="newTaskInput"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
      ></b-form-input>
      <b-input-group-append>
        <b-button variant="info" @click="addTodo">Add</b-button>
      </b-input-group-append>
    </b-input-group>

    <b-table fixed borderless small :fields="fields" :items="todos">
      <template v-slot:table-colgroup="scope">
        <col
          v-for="field in scope.fields"
          :key="field.key"
          :style="{ width: field.key === 'isComplete' ? '2em' : '100%' }"
        />
      </template>

      <!-- isComplete column -->
      <template v-slot:cell(isComplete)="data">
        <b-form-checkbox
          size="lg"
          trim
          v-model="data.value"
          @change="toggle({task:data.item, value:!data.value})"
        ></b-form-checkbox>
      </template>

      <!-- Lable column -->
      <template v-slot:cell(lable)="data">
        <span :class="{ done: data.item.isComplete }">{{ data.value }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";

export default {
  computed: {
    // ...mapState(["todos"]),
    todos() {
      return this.$store.state.todos.list;
    },
    isComplete(index) {
      return this.$store.state.todos.list[index];
    }
  },
  methods: {
    async addTodo(e) {
      // async
      this.$store.dispatch("todos/send", {
        id: null,
        lable: this.$data.newTaskInput,
        isComplete: false
      });

      this.$data.newTaskInput = "";
    },
    ...mapActions({
      toggle: "todos/sendToggle"
    })
  },
  data() {
    return {
      newTaskInput: "",
      fields: [{ key: "isComplete", label: "" }, { key: "lable", label: "" }]
    };
  },
  async fetch({ store, params }) {
    await store.dispatch("todos/fetch");
  }
};
</script>


<style>
.done {
  color: #bfbfbf;
  text-decoration: line-through;
}
</style>
