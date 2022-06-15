<script setup>
// import { guideTableContent } from '@/helpers/stagesData.js';
import { inject, onMounted } from '@vue/runtime-core';
import useTableContentHighlight from '@/hooks/useTableContentHighlight.js';
const guideId = inject('guideId');
const guideTableContent = inject('guideTableContent');

onMounted(() => {
    useTableContentHighlight();
});
</script>

<template>
    <ul class="GuideTableContent">
        <!-- <ol v-for="(content, i) in guideTableContent[guideId]" :key="i"> -->
        <ol>
            <li v-for="(title, i) in guideTableContent" :key="i">
                <a :class="title.type" :href="`#${title.href}`">{{
                    title.name
                }}</a>
            </li>
        </ol>
        <!-- </ol> -->
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
            /* padding-left: var(--padding); */
            display: flex;
            a {
                color: var(--text_color);
                font-weight: 500;
                font-size: var(--text_size);
                text-decoration: none;
                flex: 1;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                padding: 2px 0;
                &.h2 {
                    margin-left: var(--padding);
                    font-weight: 300;
                    font-size: var(--text_size);
                    color: var(--text_color_70);
                    text-decoration: none;
                }
            }
            a.active {
                color: var(--primary_color);
                /* font-weight: 500; */
                /* text-decoration-thickness: 2px; */
            }
            /* a:hover {
                text-decoration: underline;
            } */
        }
    }
}
</style>
