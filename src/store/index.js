import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
    titlePage: 'Название страницы',
    projects: [
      {id: 0, project_name: 'Наказ', project_description: '', tags: "", date: 'May 12', start_time: '7:00 am', end_time: '10:00 am'},
      {id: 1, project_name: 'Наказ 2', project_description: '', tags: "", date: 'May 12', start_time: '7:00 am', end_time: '10:00 am'},
      {id: 2, project_name: 'Наказ 3', project_description: '', tags: "", date: 'May 13', start_time: '7:00 am', end_time: '10:00 am'},
      {id: 3, project_name: 'Наказ 4', project_description: '', tags: "", date: 'May 13', start_time: '7:00 am', end_time: '10:00 am'},
    ],
    tags: [
      {id: 0, tag_name: 'Работа'},
      {id: 1, tag_name: 'Учеба'},
    ],
    workState: false,
  },
  getters: {
    allProjects(state) {
      return state.projects;
    },
    getProjectTags(state) {
      return state.tags;
    },
    getLastNumberProjects(state) {
      return state.projects.length;
    }
  },
  mutations: {
    changeTitlePage(state, payload) {
      console.log(payload);
      state.titlePage = payload.newtitlePage;
    },
    updateProjects(state, projects) {
      state.projects = projects;
    },
    createProject(state, project) {
      state.projects.push(project);
      router.push({ name: 'Tasks' });
    },
  },
  actions: {
    fetchProjects({commit}) {
      const projects = this.state.projects;
      commit('updateProjects', projects);
    },
   
  },
  modules: {
  }
})
