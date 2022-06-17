import { createRouter, createWebHistory } from 'vue-router';
import { useProjectsStore } from '@/stores/projects.js';

export default createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
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
            component: () => import('@/views/Stages.vue'),
            beforeEnter: (from, to, next) => {
                const projects = useProjectsStore();
                if (projects.current.step === 0) next();
                else
                    next({
                        name: 'Guides',
                        params: { id: projects.current.guide }
                    });
            }
        },
        {
            path: '/guias/:id',
            name: 'Guides',
            component: () => import('@/views/Guides.vue')
        }
    ]
});
