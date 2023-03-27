import { createRouter, createWebHistory } from 'vue-router';
import Introduction from '@/mds/introduction.md';
import KTR from '@/mds/ktr.md';

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
            path: '/ktr',
            component: KTR,
        },
    ],
});

export default router;
