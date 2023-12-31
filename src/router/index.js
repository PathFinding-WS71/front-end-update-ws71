import { createRouter, createWebHistory } from 'vue-router'
import NewCommunity from "@/components/pages/community/new-community.vue";
import NewActivity from "@/components/pages/activity/new-activity.vue";
import LoginComponent from "@/components/pages/user/login.component.vue";
import SignupComponent from "@/components/pages/user/signup.component.vue";
import NotFoundComponent from "@/components/views/not-found.component.vue";
import HomeComponent from "@/components/views/home.component.vue";
import ListActivities from "@/components/pages/activity/list-activities.vue";
import {auth} from "@/firebase";
import ListCommunity from "@/components/pages/community/list-community.vue";
import ActivityDetail from "@/components/pages/activity/activity-detail.vue";
import HelpComponent from "@/components/pages/extra/help.vue";
import ListLocations from "../components/pages/location/list-locations.vue";
import NewLocation from "../components/pages/location/new-location.vue";

const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/new-activity', component: NewActivity, meta: {requiresAuth: true}},
    { path: '/list-activities', component: ListActivities, meta: {requiresAuth: true} },
    { path: '/activity-detail/:id', component: ActivityDetail, meta: {requiresAuth: true} },
    { path: '/new-community', component: NewCommunity, meta: {requiresAuth: true} },
    { path: '/list-communities', component: ListCommunity, meta: {requiresAuth: true}},
    { path: '/help', component: HelpComponent, meta: {requiresAuth: true}},
    { path: '/:catchAll(.*)', component: NotFoundComponent },
    { path: '/new-location', component: NewLocation,meta: {requiresAuth: true} },
    { path: '/list-locations', component: ListLocations,meta: {requiresAuth: true} },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(route => route.meta.requiresAuth);

    const checkAuth = () => {
        return new Promise(resolve => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            });
        });
    };

    try {
        const currentUser = await checkAuth();

        if (to.path === '/login' && currentUser) {
            next('/list-activities');
        } else if (requiresAuth && !currentUser) {
            next('/login');
        } else {
            next();
        }
    } catch (error) {
        console.error(error);
    }
})

export default router
