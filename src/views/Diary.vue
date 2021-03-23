<template>
  <h1>DIARIO</h1>
  <section v-for="note of notes">
    <h2>{{ note.title }}</h2>
  </section>
  <router-link to="/" class="btn btn-primary btn-block">Atrás</router-link>
</template>

<script>
export default {
  name: "Diary",
  data() {
    return {
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

      ]
    }
  },
  computed:{
  }
}
</script>

<style scoped>

</style>