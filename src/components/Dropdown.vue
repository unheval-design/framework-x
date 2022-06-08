<script setup>
import { ref } from '@vue/reactivity';
import { onClickOutside } from '@vueuse/core';
const target = ref(null);
const props = defineProps({
    show: {
        default: false,
        type: Boolean
    }
});
const emit = defineEmits(['close']);
onClickOutside(target, () => {
    emit('close');
});
</script>

<template>
    <Transition name="fade">
        <div class="Dropdown" ref="target" v-if="props.show">
            <slot />
        </div>
    </Transition>
</template>

<style lang="scss">
.Dropdown {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: var(--radius);
    border: 1px solid var(--border_color_70);
    box-shadow: var(--shadow_deep);
    background-color: var(--surface_color);
    padding: var(--padding_sm) 0;
    min-width: var(--dropdown_width);
}

.fade-enter-active {
    transition: opacity 0.3s ease;
}

.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
