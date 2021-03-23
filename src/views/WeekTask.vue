<template>
  <h3>Tareas de la semana</h3>
  <h2>Marzo</h2>
  <h3 v-for="(day, index) in weekDays">{{ day }} <span>{{index + 1}}</span></h3>
  <router-link to="/" class="btn btn-primary btn-block">Atrás</router-link>
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