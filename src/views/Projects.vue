<script setup>
import IconAdd from '@/components/drawable/IconAdd.vue';
import Navbar from '@/components/Navbar.vue';
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
</script>

<template>
    <Navbar />
    <div class="projects_container">
        <article class="add_new_project">
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
    </div>
</template>

<style lang="scss">
.projects_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: var(--gap);
    padding: var(--padding);
    width: var(--container_width);
    margin: 0 auto;
    article.add_new_project {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        height: 240px;
        border: 1px dashed var(--border_color_70);
        border-radius: var(--radius);
        padding: var(--padding_sm) 0;
        box-sizing: border-box;
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
        }
    }
}
</style>
