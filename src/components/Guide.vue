<script setup>
import { inject } from '@vue/runtime-core';
import useGuideContextMenu from '@/hooks/useGuideContextMenu.js';
import GuideContextMenu from '@/components/GuideContextMenu.vue';
import Guide1 from '@/components/guides/Guide1.vue';
import Guide2 from '@/components/guides/Guide2.vue';
import Guide3 from '@/components/guides/Guide3.vue';
import Guide4 from '@/components/guides/Guide4.vue';
import Guide5 from '@/components/guides/Guide5.vue';
import Guide6 from '@/components/guides/Guide6.vue';
import Guide7 from '@/components/guides/Guide7.vue';
import Guide8 from '@/components/guides/Guide8.vue';
import Guide9 from '@/components/guides/Guide9.vue';
import Guide10 from '@/components/guides/Guide10.vue';
import Guide11 from '@/components/guides/Guide11.vue';
import Guide12 from '@/components/guides/Guide12.vue';
import Guide13 from '@/components/guides/Guide13.vue';
import Guide14 from '@/components/guides/Guide14.vue';
import Guide15 from '@/components/guides/Guide15.vue';
import Guide16 from '@/components/guides/Guide16.vue';
import Guide17 from '@/components/guides/Guide17.vue';
import Guide18 from '@/components/guides/Guide18.vue';
import Guide19 from '@/components/guides/Guide19.vue';
import Guide20 from '@/components/guides/Guide20.vue';
import Guide21 from '@/components/guides/Guide21.vue';
import useGuide from '@/hooks/useGuide.js';
import { useTodoStore } from '@/stores/todo.js';
import { useNotesStore } from '@/stores/notes.js';
import { useProjectsStore } from '@/stores/projects.js';
import { useChallengesStore } from '@/stores/challenges.js';
import { useEvaluationsStore } from '@/stores/evaluations.js';

const guideId = inject('guideId');
const { guideRef, closeContextMenu } = useGuideContextMenu();
const { guide } = useGuide();
const currentGuide = { id: guideId.value, substage: guide.value.substage };

const projects = useProjectsStore();
const todo = useTodoStore();
const notes = useNotesStore();
const challenges = useChallengesStore();
const evaluations = useEvaluationsStore();

todo.guide = currentGuide;
todo.project = projects.current.id;
notes.guide = currentGuide;
notes.project = projects.current.id;
challenges.project = projects.current.id;
evaluations.project = projects.current.id;
</script>

<template>
    <section ref="guideRef" class="Guide">
        <div class="guide_wrapper">
            <GuideContextMenu @close="closeContextMenu" />
            <Guide1 v-if="guideId === 1" />
            <Guide2 v-if="guideId === 2" />
            <Guide3 v-if="guideId === 3" />
            <Guide4 v-if="guideId === 4" />
            <Guide5 v-if="guideId === 5" />
            <Guide6 v-if="guideId === 6" />
            <Guide7 v-if="guideId === 7" />
            <Guide8 v-if="guideId === 8" />
            <Guide9 v-if="guideId === 9" />
            <Guide10 v-if="guideId === 10" />
            <Guide11 v-if="guideId === 11" />
            <Guide12 v-if="guideId === 12" />
            <Guide13 v-if="guideId === 13" />
            <Guide14 v-if="guideId === 14" />
            <Guide15 v-if="guideId === 15" />
            <Guide16 v-if="guideId === 16" />
            <Guide17 v-if="guideId === 17" />
            <Guide18 v-if="guideId === 18" />
            <Guide19 v-if="guideId === 19" />
            <Guide20 v-if="guideId === 20" />
            <Guide21 v-if="guideId === 21" />
        </div>
    </section>
</template>

<style lang="scss"></style>
