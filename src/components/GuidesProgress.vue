<script setup>
import { inject } from '@vue/runtime-core';
import useGuide from '@/hooks/useGuide.js';
const { guide } = useGuide();
</script>

<template>
    <div class="GuideProgress">
        <div class="guide_title">
            <h1>{{ guide.substage.name }}</h1>
            <span>Guia {{ guide.current }} de {{ guide.pages }}</span>
        </div>
        <div class="guide_progress_indicator">
            <span
                v-for="i in guide.pages"
                :key="i"
                :class="{ active: i <= guide.current }"
            ></span>
        </div>
    </div>
</template>

<style lang="scss">
.GuideProgress {
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    padding: var(--padding);
    .guide_title {
        display: flex;
        justify-content: space-between;
        h1 {
            font-size: var(--text_size_l);
            font-weight: 500;
            color: var(--text_color);
        }
        span {
            font-size: var(--text_size_sm);
            color: var(--text_color_50);
        }
    }
    .guide_progress_indicator {
        width: 100%;
        height: 6px;
        display: flex;
        border-radius: var(--radius);
        overflow: hidden;
        gap: 3px;
        span {
            width: 100%;
            height: 100%;
            background-color: var(--neutral_color_70);
            &.active {
                background-color: var(--primary_color);
            }
        }
    }
}
</style>
