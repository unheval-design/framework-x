<script setup>
import IconAdd from '@/components/drawable/IconAdd.vue';
import Navbar from '@/components/Navbar.vue';
import ProjectAdd from '@/components/ProjectAdd.vue';
import Modal from '@/components/Modal.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from '@vue/reactivity';

const projectsList = ref([
    {
        id: 1,
        title: 'Project 1',
        date: '2020-01-01',
        stage: 1,
        completed: false
    },
    {
        id: 2,
        title: 'Project 2',
        date: '2020-01-01',
        stage: 2,
        completed: false
    },
    {
        id: 3,
        title: 'Project 3',
        date: '2020-02-11',
        stage: 4,
        completed: false
    },
    {
        id: 4,
        title: 'Project 4',
        date: '2020-03-01',
        stage: 3,
        completed: false
    },
    {
        id: 5,
        title: 'Project 5',
        date: '2020-01-01',
        stage: 3,
        completed: false
    },
    {
        id: 6,
        title: 'Project 6',
        date: '2020-01-01',
        stage: 2,
        completed: false
    },
    {
        id: 7,
        title: 'Project 7',
        date: '2020-01-01',
        stage: 4,
        completed: true
    },
    {
        id: 8,
        title: 'Project 8',
        date: '2020-02-01',
        stage: 1,
        completed: false
    },
    {
        id: 9,
        title: 'Project 9',
        date: '2020-05-01',
        stage: 3,
        completed: false
    },
    {
        id: 10,
        title: 'Project 10',
        date: '2020-01-01',
        stage: 1,
        completed: false
    },
    {
        id: 11,
        title: 'Project 11',
        date: '2020-01-01',
        stage: 4,
        completed: false
    }
]);
const flagCreateProjectModal = ref(false);
const openCreateProjectModal = () => {
    flagCreateProjectModal.value = true;
};
const closeCreateProjectModal = () => {
    flagCreateProjectModal.value = false;
};
</script>

<template>
    <Teleport to="body">
        <Modal :show="flagCreateProjectModal" @close="closeCreateProjectModal">
            <template v-slot:title>Nuevo Proyecto</template>
            <template v-slot:text>
                Un proyecto nuevo sirve como guia interactiva para construir
                cualquier tipo de interfaz.
            </template>
            <ProjectAdd />
        </Modal>
    </Teleport>
    <Navbar />
    <div class="projects_container">
        <div class="projects_wrapper">
            <div class="projects_title">
                <h1>Tus Proyectos</h1>
                <p>
                    Utilizamos una metodologia flexible, puedes empezar desde el
                    principio o desde una etapa <br />
                    especifica si ya tienes algun avance de tu interfaz.
                </p>
            </div>
            <section class="projects_grid">
                <article
                    class="add_new_project"
                    @click="openCreateProjectModal()"
                >
                    <div class="icon_wrapper">
                        <IconAdd />
                    </div>
                    <span>Nuevo Proyecto</span>
                </article>
                <ProjectCard
                    v-for="(project, index) in projectsList"
                    :key="index"
                    :project="project"
                />
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.projects_container {
    margin-top: 8rem;
    .projects_wrapper {
        padding: var(--padding);
        width: var(--container_width);
        margin: 0 auto;
        .projects_title {
            h1 {
                font-size: var(--title_size);
                font-weight: 600;
                color: var(--text_color);
            }
            p {
                margin-top: 10px;
                font-size: var(--text_size_sm);
                color: var(--text_color_50);
                line-height: var(--text_line_height);
            }
        }
        .projects_grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-gap: var(--gap);
            width: 100%;
            margin-top: var(--padding_xl);
            article.add_new_project {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-evenly;
                height: 240px;
                border: 1px dashed var(--border_color);
                border-radius: var(--radius);
                padding: var(--padding_sm) 0;
                box-sizing: border-box;
                transition: background ease-in-out 0.1s;
                cursor: pointer;
                .icon_wrapper {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                svg {
                    width: 48px;
                    height: 48px;
                    fill: var(--text_color);
                }
                span {
                    color: var(--text_color);
                    font-weight: 500;
                    font-size: var(--text_size_l);
                }
                &:hover {
                    border-color: var(--primary_color);
                    background-color: var(--primary_color_10);
                }
            }
        }
    }
}
</style>
