<template>
  <h1>DIARIO</h1>
  <section v-for="note of notes">
    <h2>{{ note.title }}</h2>
  </section>
  <router-link to="/" class="btn btn-primary btn-block">Atrás</router-link>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Diary",
  computed:{
    ...mapState(['notes'])
  }
}
</script>

<style scoped>

</style>