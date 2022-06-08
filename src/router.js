import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: () => import('@/views/Welcome.vue')
        },
        {
            path: '/proyectos',
            name: 'Projects',
            component: () => import('@/views/Projects.vue')
        },
        {
            path: '/etapas',
            name: 'Stages',
            component: () => import('@/views/Stages.vue')
        },
        {
            path: '/guias',
            name: 'Guides',
            component: () => import('@/views/Guides.vue')
        }
    ]
});
