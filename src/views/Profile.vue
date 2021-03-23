<template>
  <div class="profile">

  <div class="avatar">
    <div class="circle1">
      <div class="circle2"></div>
    </div>
    <div class="edit-container"><img src="/imgs/edit.svg" class="edit"></div>
  </div>

  <div class="info-user">
    <h3>Carla Álvarez</h3>
    <div class="ubicacion">
      <img src="/imgs/pin.svg" class="ico-pin">
      <p class="ubicacion-user">Gijón, Asturias</p>
    </div>
  </div>


      <button type="submit" class="btn-register" :disabled="btnBlock">RECOMPENSAS SEMANALES</button>
      <button type="submit" class="btn-register" :disabled="btnBlock">IR A MIS TAREAS</button>
    
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
.profile{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  height: 100vh;
}

.avatar{
  display: flex; 
  justify-content: center;
  align-items: center; 
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-color: transparent;
  border: 2px solid rgba(84, 1, 116, 0.03);
}

.circle1{
  display: flex; 
  justify-content: center;
  align-items: center; 
  width: 125px;
  height: 125px;
  border-radius: 90px;
  background-color: transparent;
  border: 2px solid rgba(84, 1, 116, 0.17);
}

.circle2{
  width: 100px;
  height: 100px;
  border-radius: 90px;
  background-color: #C4C4C4;
  border: none;
}

.img-avatar{
  width: 50%;
  height: auto;
}

.edit-container{
  width: 8vw;
  height: 8vw;
  border-radius: 8vw;
  position: absolute;
  top: 39%;
  left: 25%;
  display: flex;
  justify-content: center;
  background-color: #F1608A;
}  

.edit{
  width: 59%;
  height: auto; 
}

.info-user{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ubicacion{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.ico-pin{
  width: 12%;
  height: auto;
}

.ubicacion-user{
  margin: 0px;
}



</style>