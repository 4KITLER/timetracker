<template>
  <div class="tasks container  mb-4 px-4">

    <div class="d-flex flex-row justify-content-between align-items-center mb-4">
      <h1 class="t-1 t-bold mb-0">{{titlePage}}</h1>
      <div class="mb-2 d-flex align-items-center">
        <button class="btn btn-primary btn-0 btn-rounded mr-2" type="button" @click="$router.push({name: 'TasksAdd'})">
          <span class="t--2 p-2">Добавить проект</span>
        </button>

         <button class="btn btn-0 btn-rounded btn-danger" v-if="workState" type="button" >
          <span class="t--2 p-2">Завершить рабочий день</span>
        </button>

        <button class="btn btn-0 btn-rounded btn-success" v-else type="button" >
          <span class="t--2 p-2">Начать рабочий день</span>
        </button>
      </div>
    </div>

    <div class="">

      <table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Название проекта</th>
            <th>Дата</th>
            <th>Начало</th>
            <th>Завершение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in allProjects" :key="item.id">
            <td>{{item.id}}</td>
            <td >
              <a class="sf-link" @click="$router.push({name: 'TaskDetail', params: {id: item.id} })" >{{item.project_name}}</a>
            </td>
            <td>{{item.date}}</td>
            <td>
              <div v-if="item.start_time">
                {{item.start_time}}
              </div>
              <div class="" v-else>
                <button class="btn btn-0 btn-rounded btn-success"  type="button" >
                  <span class="t--2 p-2">Начать проект</span>
                </button>
              </div>
            </td>
            <td>
              <div v-if="item.end_time == '' && item.start_time">
                <button class="btn btn-0 btn-rounded btn-success"  type="button" >
                  <span class="t--2 p-2">Завершить проект</span>
                </button>
              </div>
              <div class="" v-else>
                {{item.end_time}}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {  mapGetters, mapState, mapActions } from 'vuex';

  export default {
    name: 'Tasks',
    components: {},
    computed: {
      ...mapState(['projects']),
      ...mapGetters(["allProjects"]),
    },
    methods: mapActions(["fetchProjects"]),
    mounted() {
      this.fetchProjects();
    },
  }
</script>
