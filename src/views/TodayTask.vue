<template>
  <h1>TAREAS DE HOY</h1>
  <h6>Martes 23 de Marzo</h6>
  <ul v-for="task of tasks">
    <li>{{task.name}}</li>
    <li>{{task.description}}</li>
  </ul>
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