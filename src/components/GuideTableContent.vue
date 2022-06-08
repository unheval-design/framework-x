<script setup>
import { guideTableContent } from '@/helpers/stagesData.js';
import { inject, onMounted } from '@vue/runtime-core';
import useTableContentHighlight from '@/hooks/useTableContentHighlight.js';
const guideId = inject('guideId');

onMounted(() => {
    useTableContentHighlight();
});
</script>

<template>
    <ul class="GuideTableContent">
        <ol v-for="(content, i) in guideTableContent[guideId]" :key="i">
            <li v-for="(title, j) in content" :key="j">
                <a :href="`#${title.href}`">{{ title.name }}</a>
            </li>
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
            padding-left: var(--padding);
            a {
                color: var(--text_color_50);
                font-size: var(--text_size);
                text-decoration: none;
            }
            &:first-child {
                padding-left: 0;
                a {
                    font-weight: 500;
                    font-size: var(--text_size);
                    color: var(--text_color);
                    text-decoration: none;
                }
            }
            a.active {
                color: var(--primary_color);
                font-weight: 500;
            }
            a:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
