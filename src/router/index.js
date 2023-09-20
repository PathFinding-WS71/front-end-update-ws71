import { createRouter, createWebHistory } from 'vue-router'
import NewCommunity from "@/components/pages/community/new-community.vue";
import Suscription from "@/components/views/suscription.component.vue";
import NewActivity from "@/components/pages/activity/new-activity.vue";
import LoginComponent from "@/components/pages/user/login.component.vue";
import SignupComponent from "@/components/pages/user/signup.component.vue";
import NotFoundComponent from "@/components/views/not-found.component.vue";
import HomeComponent from "@/components/views/home.component.vue";
import ListActivities from "@/components/pages/activity/list-activities.vue";

const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/new-activity', component: NewActivity},
    { path: '/list-activities', component: ListActivities },
    { path: '/new-community', component: NewCommunity },
    { path: '/suscription', component: Suscription },
    { path: '/:catchAll(.*)', component: NotFoundComponent },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
