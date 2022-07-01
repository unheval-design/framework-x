<script setup>
import { useToastStore } from '@/stores/toast.js';
import IconNotes from '@/components/drawables/IconNotes.vue';
import IconTodo from '@/components/drawables/IconTodo.vue';
import IconCopy from '@/components/drawables/IconCopy.vue';
import IconTools from '@/components/drawables/IconTools.vue';
const toast = useToastStore();
</script>

<template>
    <Transition name="fade-toast">
        <div v-if="toast.message" class="Toast">
            <div class="toast_content">
                <IconCopy v-if="toast.type === 1" />
                <IconTodo v-if="toast.type === 2" />
                <IconNotes v-if="toast.type === 3" />
                <IconTools v-if="toast.type === 4" />
                <span>{{ toast.message }}</span>
            </div>
        </div>
    </Transition>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.Toast {
    position: fixed;
    bottom: var(--padding);
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    .toast_content {
        background-color: var(--text_color);
        color: var(--neutral_color);
        padding: 0 var(--padding);
        border-radius: var(--radius);
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text_size);
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--gap_sm);
        svg {
            fill: var(--neutral_color);
            width: var(--icon_size_sm);
        }
    }
}
@include screen('sm') {
    .Toast {
        .toast_content {
            left: var(--padding);
            right: var(--padding);
            transform: translateX(0);
        }
    }
}

.fade-toast-enter-active,
.fade-toast-leave-active {
    transition: all 0.5s ease;
}

.fade-toast-enter-active .toast_content {
    transition: all 0.3s ease;
}

.fade-toast-leave-active .toast_content {
    transition: all 0.2s ease;
}

.fade-toast-enter-from .toast_content,
.fade-toast-leave-to .toast_content {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
