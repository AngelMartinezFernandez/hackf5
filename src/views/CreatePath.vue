<template>
  <div class="card m-4">
    <h1 class="d-flex justify-content-center">Tarea 1</h1>
    <div class="balls-display">
      <div class="ball">1</div>
      <div class="ball">2</div>
      <div class="ball">3</div>
    </div>
    <button type="submit" class="btn btn-primary btn-block">Añadir</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.ball {
  text-align: center;
  padding-top: 0.8rem;
  font-size: 2.5rem;
  color: rgb(255, 255, 255);
  width: 80px;
  height: 80px;
  background-color: rgb(91, 91, 253);
  border-radius: 50%;
}

.balls-display {
  display: flex;
  padding: 2rem;
}
</style>