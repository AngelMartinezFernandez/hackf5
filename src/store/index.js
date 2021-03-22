import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    user: {
      name: 'Bob',
      surname: 'Fernández',
      email: '',
      pass: ''
    },
    task: {
      person: '',
      taskName: '',
      taskCategory: ''
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
