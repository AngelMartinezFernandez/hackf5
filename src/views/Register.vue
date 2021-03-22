<template>
  <h1 class="my-5 d-flex justify-content-center">Registro de usuario</h1>
  <form @submit.prevent="registerForm">
    <div class="container">
      <div class="form-group my-4">
        <label for="email">Nombre</label>
        <input type="email" placeholder="Introduce Nombre" class="form-control" id="name" v-model.trim="name">
      </div>
      <div class="form-group my-4">
        <label for="email">Apellidos</label>
        <input type="email" placeholder="Introduce Apellidos" class="form-control" id="surname" v-model.trim="surname">
      </div>
      <div class="form-group my-4">
        <label for="email">Email</label>
        <input type="email" placeholder="Introduce Email" class="form-control" id="email" v-model.trim="email">
      </div>
      <div class="form-group my-4">
        <label for="password">Contraseña</label>
        <input type="password" placeholder="Password" class="form-control" id="password" v-model.trim="pass1">
      </div>
      <div class="form-group my-4">
        <label for="password-repeat">Repetir Contraseña</label>
        <input type="password" placeholder="Password" class="form-control " id="password-repeat" v-model.trim="pass2">
      </div>
      <button type="submit" class="btn btn-primary btn-block" :disabled="btnBlock">Registrar</button>
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

</style>