<script setup>
import { useDateFormat } from '@vueuse/core';
import IconCheck from '@/components/drawables/IconCheck.vue';
import IconFolder from '@/components/drawables/IconFolder.vue';
import ProjectProgress from '@/components/ProjectProgress.vue';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { useProjectsStore } from '@/stores/projects.js';
import { useRouter } from 'vue-router';
import { getGuide } from '@/helpers/utils.js';

const router = useRouter();
const projects = useProjectsStore();
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
});
const dateFormatted = dayjs(props.project.date)
    .locale('es')
    .format('D [de] MMM, YYYY');

const goToProject = () => {
    projects.select(props.project.id);
    router.push({ name: 'Stages' });
};
</script>
<template>
    <article
        @click="goToProject()"
        class="ProjectCard"
        :class="`stage_${getGuide(project.guide).stage}`"
    >
        <IconFolder />
        <div class="project_content">
            <div class="project_title">
                <h1>{{ project.title }}</h1>
                <p>{{ dateFormatted }}</p>
            </div>
            <ProjectProgress
                v-if="!project.completed"
                :stage="getGuide(project.guide).stage"
            />
            <div class="project_completed" v-if="project.completed">
                <i>
                    <IconCheck />
                </i>
                <span>Finalizado</span>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';
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
    }
    &.stage_1 {
        svg {
            fill: var(--text_color);
        }
    }
    &.stage_2 {
        svg {
            fill: var(--accent_color);
        }
    }
    &.stage_3 {
        svg {
            fill: var(--success_color);
        }
    }
    &.stage_4 {
        svg {
            fill: var(--primary_color);
        }
    }
    .project_content {
        width: 100%;
        flex: 0.65;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
                line-height: var(--title_line_height);
            }
        }
        .project_completed {
            display: flex;
            align-items: center;
            /* justify-content: center; */
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
    }

    &:hover {
        background-color: var(--hover_color);
    }
}

@include screen('sm') {
    article.ProjectCard {
        min-height: 80px;
        height: auto;
        flex-direction: row;
        gap: var(--gap);
        svg {
            margin-top: -2px;
        }
        .project_content {
            flex: inherit;
            .project_title {
                margin-bottom: var(--gap_sm);
            }
        }
    }
}
</style>
