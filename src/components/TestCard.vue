<script setup>
import { ref } from '@vue/reactivity';
import RadioButton from '@/components/RadioButton.vue';
import { ID } from '@/helpers/utils.js';
defineProps({
    question: {
        type: Object,
        required: true
    }
});
const id = ID();
const answer = ref(null);
</script>

<template>
    <section class="TestCard">
        <h2>{{ question.question }}</h2>
        <div class="test_alternatives">
            <RadioButton
                :success="question.answer === 1"
                :error="question.answer !== 1"
                :name="`alternative_${id}`"
                :label="question.alternatives[0]"
                :val="1"
                v-model:model.number="answer"
                :class="{ msg: answer === 1 }"
            />
            <RadioButton
                :success="question.answer === 2"
                :error="question.answer !== 2"
                :name="`alternative_${id}`"
                :label="question.alternatives[1]"
                :val="2"
                v-model:model.number="answer"
                :class="{ msg: answer === 2 }"
            />
            <RadioButton
                :success="question.answer === 3"
                :error="question.answer !== 3"
                :name="`alternative_${id}`"
                :label="question.alternatives[2]"
                :val="3"
                v-model:model.number="answer"
                :class="{ msg: answer === 3 }"
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
