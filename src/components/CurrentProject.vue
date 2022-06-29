<script setup>
import Dropdown from '@/components/Dropdown.vue';
import IconFolder from '@/components/drawables/IconFolder.vue';
import { useProjectsStore } from '@/stores/projects.js';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

const projects = useProjectsStore();
const flagCurrentProject = ref(false);

const showCurrentProject = () => {
    flagCurrentProject.value = true;
};

const hideCurrentProject = () => {
    flagCurrentProject.value = false;
};

const progress = computed(() => (projects.current.guide / 17) * 100);
</script>

<template>
    <div class="CurrentProject">
        <div class="current_project_wrapper" @click="showCurrentProject()">
            <IconFolder />
            <p>{{ projects.current.title }}</p>
        </div>
        <Dropdown :show="flagCurrentProject" @close="hideCurrentProject">
            <div class="current_project_detail">
                <IconFolder />
                <b>{{ projects.current.title }}</b>
                <p>{{ projects.current.description }}</p>
                <div class="progress">
                    <span :style="`width: ${progress}%;`"></span>
                </div>
                <small>{{ progress.toFixed(0) }}% </small>
            </div>
        </Dropdown>
    </div>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.CurrentProject {
    user-select: none;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    .current_project_wrapper {
        display: flex;
        align-items: center;
        gap: var(--gap_sm);
        border-right: 1px solid var(--border_color);
        svg {
            fill: var(--text_color);
            width: var(--icon_size);
            height: var(--icon_size);
        }
        p {
            font-size: var(--text_size);
            padding-right: var(--gap);
            color: var(--text_color_70);
            line-height: var(--title_line_height);
            max-width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .Dropdown {
        top: calc(var(--navbar_height) + 10px);
        min-width: 300px;
        .current_project_detail {
            padding: 0 var(--padding_sm);
            color: var(--text_color);
            svg {
                width: var(--icon_size);
                fill: var(--text_color);
                margin-bottom: var(--gap_sm);
            }
            b {
                font-weight: 500;
                font-size: var(--text_size);
                display: block;
                line-height: var(--title_line_height);
            }
            p {
                font-size: var(--text_size_sm);
                color: var(--text_color_70);
                line-height: var(--title_line_height);
                margin-bottom: 12px;
                display: block;
            }
            .progress {
                background-color: var(--neutral_color_70);
                border-radius: var(--radius);
                height: 4px;
                overflow: hidden;
                margin-top: var(--gap_sm);
                margin-bottom: 4px;
                span {
                    display: block;
                    height: 100%;
                    background: var(--primary_color);
                }
            }
            small {
                font-size: var(--text_size_sm);
                color: var(--text_color);
                font-weight: 400;
            }
        }
    }
}

@include screen('sm') {
    .CurrentProject {
        .current_project_wrapper {
            border: none;
            p {
                display: none;
            }
        }
        .Dropdown {
            top: inherit !important;
            left: var(--padding) !important;
            bottom: var(--padding);
            position: fixed;
            width: calc(100% - 2 * var(--padding));
        }
    }
}
</style>
