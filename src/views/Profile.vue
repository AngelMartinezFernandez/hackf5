<template>
  <div class="card m-4">
    <div class="col align-self-center">
      <h1 class="">Profile</h1>
      <img src="/imgs/no-avatar.jpg" alt="" class="img-fluid">
      <h5 class="">{{ user.name }}</h5>
    </div>
    <div class="col align-self-center">
      <h6 class="d-flex justify-content-center">Recompensas</h6>
      <button class="btn btn-primary btn-group-lg">Ir a Inicio</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Profile",
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style scoped>

</style>