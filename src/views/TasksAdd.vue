<template>
    <form v-on:submit.prevent="onSubmit"  class="container d-flex flex-column mb-4 mt-6">
        <div class="d-flex justify-content-start">
          <h1 class="t-1 t-bold mb-4">{{titlePage}}</h1>
        </div>

        <div class="form-group">
          <label for="" class="t-left w-100">Название проекта</label>
          <input class="mb-2 form-control" type="text" required name="project_name" id="project_name" v-model="project_name">
        </div>

        <div class="form-group">
          <label for="" class="t-left w-100">Описание проекта</label>
          <textarea class="mb-2 form-control"  rows="5" required cols="33" name="project_description" id="project_description" v-model="project_description"></textarea>
        </div>

        <div class="form-group">
          <label for="" class="t-left w-100">Тег</label>
          <select class="mb-2 form-control" multiple name="project_tag" id="project_tag" v-model="project_tag">
            <option v-for="tag in this.getProjectTags()" :key="tag.id" value="tag.id">
              {{tag.tag_name}}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="" class="t-left w-100">Дата</label>
          <input class="mb-2 form-control" type="date" required name="project_date" id="project_date" v-model="date">
        </div>

        <div class="t-center">
          <button class="btn btn-primary btn-0 btn-rounded mb-2" type="submit" >
            <span class="t-0 p-2">Добавить проект</span>
          </button>
        </div>
    </form>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'TasksAdd',
    methods: {
      ...mapMutations(["createProject"]),
      ...mapGetters(["getLastNumberProjects",  "getProjectTags"]),
      onSubmit() {
        this.createProject({
          id: this.getLastNumberProjects(),
          project_name: this.project_name,
          project_description: this.project_description,
          date: this.date,
          start_time: '',
          end_time: '',
        });
        this.project_name = this.date = '';
      },
    },
   
  }
</script>