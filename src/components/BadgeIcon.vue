<script setup>
defineProps({
    show: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <i class="BadgeIcon">
        <slot />
        <span v-show="show"></span>
    </i>
</template>

<style lang="scss">
.BadgeIcon {
    position: relative;
    z-index: 5;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        position: absolute;
        right: -2px;
        top: -3px;
        width: 8px;
        height: 8px;
        background-color: var(--error_color);
        border: 2px solid var(--neutral_color);
        border-radius: 50%;
        pointer-events: none;
    }
}
</style>
