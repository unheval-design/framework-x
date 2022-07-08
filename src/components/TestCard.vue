<script setup>
import { ref } from '@vue/reactivity';
import RadioButton from '@/components/RadioButton.vue';
import { ID } from '@/helpers/utils.js';
import { inject, onMounted, watch } from '@vue/runtime-core';
import { useEvaluationsStore } from '@/stores/evaluations.js';

const props = defineProps({
    question: {
        type: Object,
        required: true
    }
});

const evaluations = useEvaluationsStore();
const evaluationId = inject('guideId');

const answer = ref(null);
watch(answer, (val) => {
    // if (props.question.answer === val)
    evaluations.add(
        evaluationId.value,
        props.question.id,
        props.question.answer === val
    );
});
</script>

<template>
    <section class="TestCard">
        <h2>{{ question.question }}</h2>
        <div class="test_alternatives">
            <RadioButton
                :success="answer === question.answer"
                :error="answer !== question.answer"
                :name="`alternative_${question.id}`"
                :label="question.alternatives[0].description"
                :val="question.alternatives[0].id"
                v-model:model.number="answer"
                :class="{ msg: answer === question.alternatives[0].id }"
            />
            <RadioButton
                :success="answer === question.answer"
                :error="answer !== question.answer"
                :name="`alternative_${question.id}`"
                :label="question.alternatives[1].description"
                :val="question.alternatives[1].id"
                v-model:model.number="answer"
                :class="{ msg: answer === question.alternatives[1].id }"
            />
            <RadioButton
                :success="answer === question.answer"
                :error="answer !== question.answer"
                :name="`alternative_${question.id}`"
                :label="question.alternatives[2].description"
                :val="question.alternatives[2].id"
                v-model:model.number="answer"
                :class="{ msg: answer === question.alternatives[2].id }"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.TestCard {
    padding: var(--padding);
    box-sizing: border-box;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    h2 {
        font-size: var(--text_size_l);
        line-height: var(--title_line_height);
    }
    .test_alternatives {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: var(--gap_sm);
        .RadioButton.success.msg {
            &:after {
                content: 'Correcto';
                color: var(--success_color);
                font-size: var(--text_size);
                font-weight: 500;
                margin-left: 30px;
            }
        }
        .RadioButton.error.msg {
            &:after {
                content: 'Incorrecto';
                color: var(--error_color);
                font-size: var(--text_size);
                font-weight: 500;
                margin-left: 30px;
            }
        }
    }
}
</style>
