<script setup>
import { inject, onMounted, ref, useSlots } from '@vue/runtime-core';
const guideId = inject('guideId');
const id = ref('');

const props = defineProps({
    type: {
        type: String,
        default: 'h1',
        validator: (value) => {
            return ['h1', 'h2'].indexOf(value) !== -1;
        }
    }
});

const guideTableContent = inject('guideTableContent');
const slot = useSlots();

onMounted(() => {
    id.value = `guide_${guideId.value}_title_${guideTableContent.value.length}`;
    const name = slot.default()[0].children;
    guideTableContent.value.push({
        name,
        href: id.value,
        type: props.type
    });
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
@import '@/assets/css/breakpoints';

h1,
h2 {
    position: relative;
    line-height: var(--title_line_height);
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

@include screen('md') {
    h1,
    h2 {
        a {
            left: -12px;
        }
    }
}
</style>
