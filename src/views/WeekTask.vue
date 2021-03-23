<template>
  <h3>Tareas de la semana</h3>
  <h2>Marzo</h2>
  <h3 v-for="(day, index) in weekDays">{{ day }} <span>{{index + 1}}</span></h3>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "WeekTask",
  computed: {
    ...mapState(['weekDays'])
  },
}
</script>

<style scoped>

</style>