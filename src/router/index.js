import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '@/mds/introduction.md';
import Project from '@/components/Project.vue';

const mds = import.meta.glob('../mds/*.md', { eager: true });
console.log(mds);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/introduction',
        },
        {
            path: '/introduction',
            component: Introduction,
        },
        {
            path: '/project',
            component: Project,
        },
    ],
});

export default router;
