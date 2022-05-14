import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tasks from '../views/Tasks.vue'
import TasksAdd from '../views/TasksAdd.vue'
import TaskDetail from '../views/TaskDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks
  },
  {
    path: '/task/:id',
    name: 'TaskDetail',
    component: TaskDetail
  },
  {
    path: '/add-tasks',
    name: 'TasksAdd',
    component: TasksAdd
  },
 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
