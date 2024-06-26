import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/pages/HomePage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

export default createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/contact-us', component: ContactUsPage},
        //Sempre per ultimo questo:
        {path: '/:pathMatch(.*)*', component: NotFoundPage}
    ]
})