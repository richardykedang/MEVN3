<template>
    <div class="d-flex flex-column">
        <h1>Tasks</h1>

        <div class="mb-4">
            <router-link to="/tasks/new" class="btn btn-success ml-2" exact>Create Task</router-link>
        </div>
    </div>
</template>
<script>

import * as taskService from '../../services/TaskService'
export default {
  name: 'tasks-all',
  beforeRouteEnter (to, from, next) {
    taskService.getAllTasks()
      .then(res => {
        console.log(res)
        next()
      })
  }
}
</script>
