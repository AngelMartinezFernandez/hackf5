<template>
  <div class="m-4">
    <div class="pt-2">
      <div class="card">
        <div class="card-body">
          <h1>Añadir Tarea</h1>
          <form @submit.prevent="">
            <div class="form-group">
              <label for="task-name">Nombre de Tarea</label>
              <input
                  type="date"
                  class="form-control"
                  id="task-name"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTask"
}
</script>

<style scoped>

</style>