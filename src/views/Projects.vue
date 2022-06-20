<script setup>
import IconAdd from '@/components/drawables/IconAdd.vue';
import IconFolder from '@/components/drawables/IconFolder.vue';
import Navbar from '@/components/Navbar.vue';
import Button from '@/components/Button.vue';
import ProjectAdd from '@/components/ProjectAdd.vue';
import Modal from '@/components/Modal.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from '@vue/reactivity';
import { useProjectsStore } from '@/stores/projects.js';
import Empty from '@/components/Empty.vue';

const projects = useProjectsStore();
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
        <div class="projects_wrapper empty" v-if="!projects.list.length">
            <Empty>
                <template v-slot:icon>
                    <IconFolder />
                </template>
                <template v-slot:title> Aún no hay proyectos </template>
                <template v-slot:description>
                    Crea tu primer proyecto, dando click al siguiente boton.
                </template>
                <template v-slot:button>
                    <Button @click="openCreateProjectModal()">
                        <template v-slot:icon>
                            <IconAdd />
                        </template>
                        Crear Proyecto
                    </Button>
                </template>
            </Empty>
        </div>
        <div class="projects_wrapper" v-if="projects.list.length">
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
                    v-for="(project, index) in projects.list"
                    :key="index"
                    :project="project"
                />
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.projects_container {
    .projects_wrapper {
        padding: var(--padding);
        width: var(--container_width);
        margin: 0 auto;
        margin-top: 8rem;
        &.empty {
            margin-top: 0;
            padding: 0;
            min-height: calc(100vh - 2 * var(--navbar_height));
            display: flex;
            align-items: center;
        }
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
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                svg {
                    width: 40px;
                    height: 40px;
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
