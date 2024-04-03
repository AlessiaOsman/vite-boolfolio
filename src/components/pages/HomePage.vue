<script>
import axios from 'axios';
import AppAlert from '../AppAlert.vue';
import ProjectsList from '../posts/ProjectsList.vue';
import BasePagination from '../BasePagination.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'HomePage',
  components: { ProjectsList, AppAlert, BasePagination },
  data: () => ({
    projects: {
      data: [],
      links: []
    },
    isLoading: false,
    isAlertOpen: false
  }),
  methods: {
    fetchProjects(endpoint) {
      this.isLoading = true;
      axios.get(endpoint ?? defaultEndpoint)
        .then(res => {
          const { data, links } = res.data
          this.projects = { data, links };
          this.isAlertOpen = false;
        }).catch(err => {
          console.error(err);
          this.isAlertOpen = true;
        }).then(() => {
          this.isLoading = false;
        })
    }
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
 
    <h1>I miei progetti</h1>
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" @retry="fetchProjects" />
    <AppLoader v-if="isLoading" />

    <div v-else>
      <ProjectsList :projects="projects.data" />
      <BasePagination :links="projects.links" @change-page="fetchProjects"/>
    </div>
  
</template>


