<template>
  <h1 class="text-center">Inicio</h1>
  <div class="container">
    <router-link to="/week-task" class="card card-home">
      <div class="card-body">
        <h6 class="text-center">Agenda Semanal</h6>
        <h2 class="text-center">10:00</h2>
        <h6 class="text-center">Lunes 23 de Marzo 2021</h6>
      </div>
    </router-link>
    <router-link to="/today-task" class="card card-home">
      <div class="card-body">
        <h6 class="text-center">Agenda Diaria</h6>
        <h2 class="text-center">Tareas de hoy</h2>
      </div>
    </router-link>
    <router-link to="/help" class="card card-home">
      <div class="card-body">
        <h2 class="text-center">Ayuda</h2>
      </div>
    </router-link>
    <router-link to="/diary" class="card card-home">
      <div class="card-body">
        <h2 class="text-center">Diario</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  methods: {}
}
</script>
<style>
.card-home{
  background-color: #e4f3ef;
}
</style>