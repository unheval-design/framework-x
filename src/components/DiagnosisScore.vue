<script setup>
import { ref } from '@vue/reactivity';

const selected = ref(0);

const emit = defineEmits(['selection']);

const setSelection = (score) => {
    selected.value = score;
    emit('selection', selected.value);
};
</script>

<template>
    <section class="DiagnosisScore" :class="{ is_selected: selected !== 0 }">
        <article :class="{ selected: selected === 1 }" @click="setSelection(1)">
            <span></span>
            <p>Muy Malo</p>
        </article>
        <article :class="{ selected: selected === 2 }" @click="setSelection(2)">
            <span></span>
            <p>Malo</p>
        </article>
        <article :class="{ selected: selected === 3 }" @click="setSelection(3)">
            <span></span>
            <p>Normal</p>
        </article>
        <article :class="{ selected: selected === 4 }" @click="setSelection(4)">
            <span></span>
            <p>Buena</p>
        </article>
        <article :class="{ selected: selected === 5 }" @click="setSelection(5)">
            <span></span>
            <p>Muy Bueno</p>
        </article>
    </section>
</template>

<style lang="scss">
.DiagnosisScore {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: var(--gap_sm);
    width: 100%;
    article {
        border-radius: var(--radius);
        border: 1px solid var(--border_color_70);
        padding: var(--padding_sm);
        display: flex;
        align-items: center;
        gap: 7px;
        span {
            display: block;
            font-weight: normal;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--neutral_color_70);
        }
        p {
            font-size: var(--text_size_sm);
            color: var(--text_color);
            font-weight: 400;
        }

        &:hover {
            border: 1px solid var(--primary_color);
            background-color: var(--primary_color_10);
        }
    }
    &.is_selected {
        article {
            opacity: 0.5;
            &.selected {
                opacity: 1;
                border: 1px solid var(--primary_color);
                background-color: var(--primary_color_10);
                &:nth-child(1) {
                    span {
                        background-color: var(--error_color);
                    }
                }
                &:nth-child(2) {
                    span {
                        background-color: var(--error_color_60);
                    }
                }
                &:nth-child(3) {
                    span {
                        background-color: var(--accent_color);
                    }
                }
                &:nth-child(4) {
                    span {
                        background-color: var(--primary_color);
                    }
                }
                &:nth-child(5) {
                    span {
                        background-color: var(--success_color);
                    }
                }
            }
        }
    }
}
</style>
