<script setup>
import { useRouter } from 'vue-router';
import { ref } from '@vue/reactivity';

const props = defineProps({
    compact: {
        type: Boolean
    }
});
</script>

<template>
    <article class="StageCard" :class="{ compact: compact }">
        <div class="stage_card_wrapper">
            <slot name="icon" />
            <div class="stage_title">
                <h1><slot name="title" /></h1>
                <p><slot name="text" /></p>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.StageCard {
    display: flex;
    align-items: center;
    height: 240px;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    padding: var(--padding);
    box-sizing: border-box;
    transition: background ease-in-out 0.1s;
    cursor: pointer;
    .stage_card_wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        svg {
            width: var(--icon_size_xl);
            height: var(--icon_size_xl);
            fill: var(--text_color);
        }
        .stage_title {
            display: flex;
            align-items: center;
            flex-direction: column;
            h1 {
                font-weight: 500;
                color: var(--text_color);
                font-size: var(--text_size_l);
            }
            p {
                color: var(--text_color_50);
                font-size: var(--text_size_sm);
                margin-top: 7px;
            }
        }
    }
    &:hover {
        border: 1px solid var(--primary_color);
        background-color: var(--primary_color_10);
    }
    &.compact {
        height: 80px;
        padding: var(--padding_xl);
        .stage_card_wrapper {
            justify-content: flex-start;
            flex-direction: row;
            svg {
                margin-right: var(--padding);
            }
            .stage_title {
                align-items: flex-start;
            }
        }
    }
}
</style>
