<script setup>
import { guidesTableContent } from '@/helpers/stagesData.js';
import { inject } from '@vue/runtime-core';
const guideId = inject('guideId');
</script>

<template>
    <ul class="GuideTableContent">
        <ol v-for="(content, i) in guidesTableContent[guideId]" :key="i">
            <li v-for="(text, j) in content" :key="j">{{ text }}</li>
        </ol>
    </ul>
</template>

<style lang="scss">
ul.GuideTableContent {
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    ol {
        display: flex;
        flex-direction: column;
        gap: var(--gap_sm);
        li {
            color: var(--text_color_50);
            font-size: var(--text_size);
            padding-left: var(--padding);
            &:first-child {
                font-weight: 500;
                color: var(--text_color);
                font-size: var(--text_size);
                padding-left: 0;
            }
        }
    }
}
</style>
