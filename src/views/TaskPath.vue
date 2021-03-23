<template>
  <div>
    <h1 class="d-flex justify-content-center">Tarea 1</h1>
    <div class="container">
      <svg width="300px" height="175px" version="1.1">
        <path
          fill="transparent"
          stroke="#888888"
          stroke-width="6"
          d="M10 80 Q 77.5 10, 145 80 T 280 80"
          class="path"
        ></path>
      </svg>
      <div class="ball"></div>
      <div class="ball-1"></div>
      <div class="ball-2"></div>
    </div>
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
.container {
  margin-top: 100px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
svg {
  width: 300px;
  display: block;
  position: absolute;
}

.ball {
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 50%;

  offset-path: path("M10 80 Q 77.5 10, 145 80 T 280 80");
  offset-distance: 0%;

  animation: red-ball 2s linear alternate infinite;
}

.ball-1 {
  width: 80px;
  height: 80px;
  background-color: rgb(70, 67, 255);
  border-radius: 50%;

  offset-path: path("M10 80 Q 77.5 10, 145 80 T 280 80");
  offset-distance: 100%;

  animation: red-ball 2s linear alternate infinite;
}

.ball-2 {
  width: 40px;
  height: 40px;
  background-color: rgb(70, 67, 255);
  border-radius: 50%;

  offset-path: path("M140 -40 Q 77.5 10, 145 80 T 280 80");
  offset-distance: 0%;

  animation: red-ball 2s linear alternate infinite;
}

@keyframes red-ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
</style>