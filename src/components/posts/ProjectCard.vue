<script>
export default {
    name: 'ProjectCard',
    props: {project: Object},
    computed: {
        abstract(){
            const abstract = this.project.content.slice(0, 150);
            return abstract + '...'
        },

        pubblicationDate(){
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if(day < 10) day = '0' + day;
            if(month < 10) month = '0' + month;

            return `Pubblicato il ${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
}
</script>
<template>
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-2">
                <img :src="project.image" class="img-fluid rounded-start w-100" :alt="project.title">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.title }}</h5>
                    <p class="card-text">{{ abstract }}</p>
                    <a :href="project.url">Visita il sito</a>
                    <p class="card-text"><small class="text-body-secondary">{{ pubblicationDate }}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>