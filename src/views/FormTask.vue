<template>
  <div class="m-4">
    <div class="pt-2">
      <div class="card-body">
        <h1>Añadir Tarea</h1>
        <form @submit.prevent="">
          <div class="form-group">
            <label for="person">Personas</label>
            <select name="person" class="form-control" id="person">
              <option value="value1">Angel</option>
              <option value="value2"></option>
              <option value="value3">Angel</option>
            </select>
          </div>
          <div class="form-group">
            <label for="task-name">Nombre de Tarea</label>
            <input type="text" class="form-control" id="task-name" v-model="taskName"/>
          </div>
          <div class="form-group">
            <label for="task-category">Categoría</label>
            <select name="task-category" class="form-control" id="task-category">
              <option value="value1">Basica</option>
              <option value="value2">Instrumental</option>
              <option value="value3">Avanzada</option>
            </select>
          </div>
          <button class="btn btn-primary btn-block mt-3" type="submit" :disabled="btnBlock">Crear Tarea</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "FormTask",
  data() {
    return {
      taskName: ''
    }
  },
  computed: {
    btnBlock() {
      return this.taskName.trim() === ''
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>