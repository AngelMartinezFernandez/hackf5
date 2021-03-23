<template>
  <h1>TAREAS DE HOY</h1>
  <h6>Martes 23 de Marzo</h6>
  <ul v-for="task of tasks">
    <li>{{task.name}}</li>
    <li>{{task.description}}</li>
  </ul>
  <router-link to="/" class="btn btn-primary btn-block">Atrás</router-link>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "TodayTask",
  computed: {
    ...mapState(['tasks'])
  }
}
</script>

<style scoped>

</style>