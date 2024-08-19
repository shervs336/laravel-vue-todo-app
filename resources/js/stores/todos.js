import axios from 'axios'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  state: () => ({
    todos: null,
    selectedTodo: null,
  }),
  actions: {
    set_todos(todos) {
      this.todos = todos
    },
    async fetch_todos() {
      return axios.get('/api/todos')
        .then((response) => {
          this.todos = response.data.data
          return response
        })
        .catch((error) => {
          this.todos = null
          throw error
        })
    },
    async add_todo(payload) {
      return axios.post('/api/todos', payload)
        .then((response) => {
          return response
        }).catch((error) => {
          throw error
        })
    },
    async update_todo(payload) {
      return axios.put('/api/todos/'+payload.id, payload)
        .then((response) => {
          return response
        }).catch((error) => {
          throw error
        })
    },
    set_selected_todo(todo) {
      this.selectedTodo = todo
    }
  },
  getters: {
    allTodos: (state) => state.todos,
  },
})