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
            path: '/resumen',
            name: 'Finish',
            component: () => import('@/views/Finish.vue')
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
            beforeEnter: (to, from, next) => {
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
            component: () => import('@/views/Guides.vue'),
            beforeEnter: (to, from, next) => {
                console.log('beforeEnter');
                const projects = useProjectsStore();
                if (projects?.current?.completed) {
                    next({ name: 'Finish' });
                }
                if (!projects?.current?.completed) {
                    if (to.params.id > projects?.current?.guide) {
                        next({
                            name: 'Guides',
                            params: { id: projects?.current?.guide }
                        });
                    } else {
                        next();
                    }
                }
            }
        }
    ]
});
