import {createStore} from 'vuex'

export default createStore({
  state: {
    users: [],
    user: {
      name: 'Bob',
      surname: 'Fernández',
      email: '',
      pass: ''
    },
    tasks: [
      {
        name: 'Nombre de la tarea',
        description: 'Descripción o consejos de la tarea'
      }
    ],
    task: {
      person: '',
      taskName: '',
      taskCategory: ''
    },
    notes: [
      {
        title: 'Nota 1',
        noteContent: 'Contenido de la nota'
      },
      {
        title: 'Nota 2',
        noteContent: 'Contenido de la nota'
      },
      {
        title: 'Nota 2',
        noteContent: 'Contenido de la nota'
      },

    ],
    note: {
      name: '',
      noteContent: ''
    },
    weekDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  },
  mutations: {},
  actions: {},
  modules: {}
})
