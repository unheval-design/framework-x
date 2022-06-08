<script setup>
import { useDateFormat } from '@vueuse/core';
import IconCheck from './drawable/IconCheck.vue';
import IconFolder from './drawable/IconFolder.vue';
import ProjectProgress from './ProjectProgress.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
const dateFormatted = dayjs(props.project.date)
    .locale('es')
    .format('D [de] MMM, YYYY');
</script>
<template>
    <article class="ProjectCard">
        <IconFolder />
        <div class="project_title">
            <h1>{{ props.project.title }}</h1>
            <p>{{ dateFormatted }}</p>
        </div>
        <ProjectProgress
            v-if="!props.project.completed"
            :stage="props.project.stage"
        />
        <div class="project_completed" v-if="props.project.completed">
            <i>
                <IconCheck />
            </i>
            <span>Finalizado</span>
        </div>
    </article>
</template>

<style lang="scss" IconFolder>
article.ProjectCard {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 240px;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    padding: var(--padding);
    box-sizing: border-box;
    transition: background ease-in-out 0.2s;
    cursor: pointer;
    svg {
        width: var(--icon_size_xl);
        height: var(--icon_size_xl);
        fill: var(--text_color_50);
        &.stage_1 {
            fill: var(--text_color);
        }
        &.stage_2 {
            fill: var(--accent_color);
        }
        &.stage_3 {
            fill: var(--success_color);
        }
        &.stage_4 {
            fill: var(--primary_color);
        }
    }
    .project_title {
        h1 {
            font-weight: 500;
            color: var(--text_color);
            font-size: var(--text_size_l);
        }
        p {
            color: var(--text_color_50);
            font-size: var(--text_size_sm);
            margin-top: 7px;
        }
    }
    .project_completed {
        display: flex;
        align-items: center;
        justify-content: center;
        i {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            svg {
                width: 16px;
                height: 16px;
                fill: var(--neutral_color);
            }
            background-color: var(--primary_color);
        }
        span {
            color: var(--text_color);
            font-weight: 500;
            font-size: var(--text_size);
            margin-left: var(--gap_sm);
        }
    }
    &:hover {
        /* box-shadow: var(--shadow); */
        background-color: var(--hover_color);
    }
}
</style>
