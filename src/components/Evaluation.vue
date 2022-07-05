<script setup>
import { ref } from '@vue/reactivity';
import { shuffle } from '@/helpers/utils.js';
import { computed, onMounted } from '@vue/runtime-core';
import TestCard from '@/components/TestCard.vue';

const props = defineProps({
    questions: {
        type: Array,
        required: true
    }
});

onMounted(() => {
    props.questions.map((q, i) => {
        props.questions[i].alternatives = shuffle(
            props.questions[i].alternatives
        );
    });
});

const questionsList = ref(
    shuffle(props.questions.map((q) => q.id)).splice(0, 2)
);
const questionsShuffle = computed(() =>
    props.questions.filter((q) => questionsList.value.includes(q.id))
);
</script>

<template>
    <div class="Evaluation">
        <TestCard
            v-for="(question, index) in questionsShuffle"
            :key="index"
            :question="question"
        />
    </div>
</template>

<style lang="scss">
.Evaluation {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--gap);
}
</style>
