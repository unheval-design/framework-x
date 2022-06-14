<template>
    <i class="HoverIcon">
        <slot />
    </i>
</template>

<script>
export default {};
</script>

<style lang="scss">
.HoverIcon {
    z-index: 5;
    cursor: pointer;
}
</style>
