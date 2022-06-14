<script setup>
defineProps({
    color: {
        type: String,
        validator: (value) => {
            return ['success', 'warning', 'error'].indexOf(value) !== -1;
        }
    }
});
</script>

<template>
    <span class="Chip" :class="color">
        <slot name="icon" />
        <slot />
    </span>
</template>

<style lang="scss">
.Chip {
    border-radius: var(--radius);
    background-color: var(--neutral_color_90);
    font-size: var(--text_size_sm);
    font-weight: 500;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 7px;
    color: var(--text_color);
    user-select: none;
    svg {
        width: var(--icon_size_sm);
        height: var(--icon_size_sm);
        fill: var(--text_color);
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
</style>
