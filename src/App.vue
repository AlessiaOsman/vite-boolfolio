<script>
import axios from 'axios';
import AppHeader from '../src/components/AppHeader.vue';
import ProjectCard from './components/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';
export default{
    name: 'Boolfolio',
    components: {AppHeader, ProjectCard},
    data: () => ({
      projects: []
    }),
    methods: {
      fetchProjects(){
        axios.get(endpoint).then( res =>{
          this.projects = res.data
        })
      }
    },
    created(){
      this.fetchProjects();
    }
  }
</script>

<template>
  <AppHeader/>
  <main class="container mt-5">
    <h1>I miei progetti</h1>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project"/>
  </main>
</template>

<style lang="scss">
  @use'./assets/scss/style.scss';
</style>
