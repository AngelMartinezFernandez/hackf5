<template>
  <div class="avatar-container"><div class="register-avatar"><img src="/imgs/name.png" class="img-avatar"></div></div>

  <form @submit.prevent="registerForm">
    <div class="register-container">
      <div class="form-container">
        <label for="email">Nombre</label>
        <div class="input-container">
          <img src="/imgs/user.svg" class="ico-register">
          <input type="email" placeholder="Introduce Nombre" class="register-form" id="name" v-model.trim="name">
        </div>
      </div>
      <div class="form-container">
        <label for="email">Apellidos</label>
        <div class="input-container">
          <img src="/imgs/user.svg" class="ico-register">
          <input type="email" placeholder="Introduce Apellidos" class="register-form" id="surname" v-model.trim="surname">
        </div>
      </div>
      <div class="form-container">
        <label for="email">Email</label>
        <div class="input-container">
          <img src="/imgs/mail.svg" class="ico-register">
          <input type="email" placeholder="Introduce Email" class="register-form" id="email" v-model.trim="email">
        </div>
      </div>
      <div class="form-container">
        <label for="password">Contraseña</label>
        <div class="input-container">
          <img src="/imgs/pass.svg" class="ico-register">
          <input type="password" placeholder="Password" class="register-form" id="password" v-model.trim="pass1">
        </div>
      </div>
      <div class="form-container">
        <label for="password-repeat">Repetir Contraseña</label>
        <div class="input-container">
          <img src="/imgs/pass.svg" class="ico-register">
          <input type="password" placeholder="Password" class="register-form" id="password-repeat" v-model.trim="pass2">
        </div>
      </div>
      <div class="btn-container">
        <div class="btn-txt">
          <button class="btn-redes"><img src="/imgs/gmail.png" class="logos-redes"></button>
          <p class="register-p">Login with Gmail</p>
        </div>
        <div class="btn-txt">
          <button class="btn-redes"><img src="/imgs/facebook.png" class="logos-redes"></button>
          <p class="register-p">Login with Facebook</p>
        </div>
      </div>
      <p class="register-p weight-p">Forgot password?</p>
      <p class="register-p">Don't have an account?</p>
      <button type="submit" class="btn-register" :disabled="btnBlock">CREATE AN ACCOUNT</button>
      <img src="/imgs/animal.png" class="animal">
    </div>
    
  </form>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: 'hackf5@gmail.com',
      pass1: '123123',
      pass2: '123123',
      name: '',
      surname: ''
    }
  },
  computed: {
    btnBlock() {
      if(!this.email.includes('@') && (!this.email.includes('.'))){
        return true
      }
      if((this.pass1.length > 5) && (this.pass1 === this.pass2)){
        return false
      }
      return true
    }
  },
  methods: {
    registerForm(){
      console.log('Registrandose')
    }
  },
}
</script>

<style scoped>
.register-title {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9CFFAC;
  height: 8vh;
  color: gray;
  font-size: 25px;
}

.avatar-container{
  display: flex;
  justify-content: center;
  height: 20vh;
}

.img-avatar{
  width: 50vw;
  height: auto;
  margin: 10%;
}

.register-avatar{
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 90vw;
}

.ico-register{
  width: 7%;
  height: auto;  
}

.register-container{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  height: 80vh;
}

.form-container{
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 90vw;
  padding-bottom: 2vh;
}

.register-form{
    border: none;
    border-bottom: solid 1px gray;
    border-radius: none;
    background-color: transparent;
    width: 80%;
    margin-left: 5%;
  }

.btn-container{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  width: 100vw;
  margin-top: 5%;
}

.btn-redes{
  width: 30vw;
  height: 10vw;
  border-radius: 20px;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: linear-gradient(98.29deg, #F3D5FF 47.44%, #FFB1EE 91.74%);
  margin-bottom: 2%;
}

.logos-redes{
  width: 30%;
  height: auto;
  display: flex;
}

.btn-txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
}

.register-p{
  margin-bottom: 0px;
  font-size: 12px;
}

.weight-p{
  font-weight: 600;
  color: #7D5F85;
}

.btn-register{
  width: 75vw;
  height: 12vw;
  border-radius: 20px;
  border: none;
  filter: drop-shadow(1px 1px 4px rgba(69, 69, 70, 0.1));
  background: linear-gradient(94.12deg, #F6DEFF -1.29%, #E6D5EC 99.4%);
  margin-top: 5%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: #7D5F85;
}

.animal {
  width: 15%;
  margin-top: 5%;
  }

</style>