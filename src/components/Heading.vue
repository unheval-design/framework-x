<script setup>
defineProps({
    type: {
        type: String,
        default: 'h1',
        validator: (value) => {
            return ['h1', 'h2'].indexOf(value) !== -1;
        }
    },
    id: {
        type: String,
        required: true
    }
});
</script>

<template>
    <h1 :id="id" v-if="type === 'h1'">
        <slot />
        <a :href="`#${id}`">#</a>
    </h1>
    <h2 :id="id" v-if="type === 'h2'">
        <slot />
        <a :href="`#${id}`">#</a>
    </h2>
</template>

<style lang="scss" scoped>
h1,
h2 {
    position: relative;
    a {
        position: absolute;
        left: -16px;
        top: 0;
        text-decoration: none;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        cursor: pointer;
        padding-right: 8px;
        color: var(--primary_color);
    }
    &:hover {
        a {
            opacity: 1;
        }
    }
}
</style>
