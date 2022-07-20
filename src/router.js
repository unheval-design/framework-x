import { createRouter, createWebHistory } from 'vue-router';
import { useProjectsStore } from '@/stores/projects.js';
import Welcome from '@/views/Welcome.vue';
import { isCheckpoint } from '@/helpers/utils.js';

export default createRouter({
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: Welcome
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
            path: '/diagnostico',
            name: 'Diagnosis',
            component: () => import('@/views/Diagnosis.vue'),
            beforeEnter: (to, from, next) => {
                const projects = useProjectsStore();
                if (!projects.current.diagnosisOne) next();
                else
                    next({
                        name: 'Guides',
                        params: { id: projects.current.guide }
                    });
            }
        },
        {
            path: '/resultados',
            name: 'Results',
            component: () => import('@/views/Diagnosis.vue'),
            beforeEnter: (to, from, next) => {
                const projects = useProjectsStore();
                if (!projects.current.diagnosisTwo) next();
                else
                    next({
                        name: 'Guides',
                        params: { id: projects.current.guide }
                    });
            }
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
                const projects = useProjectsStore();
                if (projects?.current?.completed) {
                    next({ name: 'Finish' });
                }
                if (!projects?.current?.completed) {
                    if (
                        (projects?.current?.fromStart && to.params.id === 1) ||
                        (!projects?.current?.fromStart &&
                            isCheckpoint(to.params.id - 1) &&
                            !projects.current.diagnosisOne)
                    ) {
                        next({
                            name: 'Diagnosis'
                        });
                    }
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
