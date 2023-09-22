import { createRouter, createWebHistory } from 'vue-router'
import NewCommunity from "@/components/pages/community/new-community.vue";
import Subscription from "@/components/views/subscription.component.vue";
import NewActivity from "@/components/pages/activity/new-activity.vue";
import LoginComponent from "@/components/pages/user/login.component.vue";
import SignupComponent from "@/components/pages/user/signup.component.vue";
import NotFoundComponent from "@/components/views/not-found.component.vue";
import HomeComponent from "@/components/views/home.component.vue";
import ListActivities from "@/components/pages/activity/list-activities.vue";
import {auth} from "@/firebase";

const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home', component: HomeComponent },
    { path: '/login', component: LoginComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/new-activity', component: NewActivity, meta: {requiresAuth: true}},
    { path: '/list-activities', component: ListActivities, meta: {requiresAuth: true} },
    { path: '/new-community', component: NewCommunity, meta: {requiresAuth: true} },
    { path: '/subscription', component: Subscription },
    { path: '/:catchAll(.*)', component: NotFoundComponent },
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
