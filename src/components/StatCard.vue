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
    <article class="StatCard" :class="{ compact: compact }">
        <div class="stat_card_wrapper">
            <slot name="icon" />
            <div class="stat_title">
                <h1><slot name="title" /></h1>
                <p><slot name="text" /></p>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.StatCard {
    display: flex;
    align-items: center;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    box-sizing: border-box;
    transition: background ease-in-out 0.1s;
    height: 80px;
    padding: var(--padding);
    .stat_card_wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: flex-start;
        gap: var(--gap);
        svg {
            width: var(--icon_size_xl);
            height: var(--icon_size_xl);
            fill: var(--text_color);
        }
        .stat_title {
            display: flex;
            align-items: center;
            flex-direction: column;
            align-items: flex-start;
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
}

@include screen('sm') {
    .StatCard {
        height: 80px;
        .stat_card_wrapper {
            flex-direction: row;
            justify-content: flex-start;
            gap: var(--gap);
            .stat_title {
                align-items: flex-start;
            }
        }
    }
}
</style>
