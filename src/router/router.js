import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import VoteList from "../pages/VoteList.vue";
import UploadPage from "../pages/UploadPage.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: LoginPage, alias: '/' },
        { path: '/votepage', component: VoteList},
        { path: '/upload', component: UploadPage}
    ]
})