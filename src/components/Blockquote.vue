<script setup>
import { useSlots } from '@vue/runtime-core';
import IconMessage from '@/components/drawables/IconMessage.vue';

defineProps({
    color: {
        type: String,
        validator: (value) => {
            return ['success', 'warning', 'error'].indexOf(value) !== -1;
        }
    }
});
const slot = useSlots();
</script>

<template>
    <blockquote :class="color">
        <slot name="icon" />
        <IconMessage />
        <slot />
    </blockquote>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

blockquote {
    border-radius: var(--radius);
    background-color: var(--neutral_color_95);
    font-size: var(--text_size_l);
    padding: var(--padding);
    display: flex;
    align-items: flex-start;
    gap: var(--gap);
    color: var(--text_color);
    line-height: var(--text_line_height);
    /* border: 1px solid var(--border_color_70); */
    svg {
        min-width: var(--icon_size);
        height: var(--icon_size);
        fill: var(--text_color);
        margin-top: 2px;
    }
    &.success {
        background-color: var(--success_color_20);
    }
    &.warning {
        background-color: var(--accent_color_20);
    }
    &.error {
        background-color: var(--error_color_20);
    }
}

@include screen('xs') {
    blockquote {
        flex-direction: column;
        gap: var(--gap_sm);
    }
}
</style>
