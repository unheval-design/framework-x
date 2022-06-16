<script setup>
import { useSlots, watchEffect } from '@vue/runtime-core';
const slot = useSlots();
const emit = defineEmits(['close']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const close = () => {
    emit('close');
};

watchEffect(() => {
    if (props.show) document.body.style.overflow = 'hidden';
    if (!props.show) document.body.style.overflow = 'auto';
});
</script>
<template>
    <Transition name="fade_modal">
        <div class="ModalSlide" v-if="show">
            <div class="modal_overlay" @click="close()"></div>
            <aside>
                <div class="modal_slide_content">
                    <div class="modal_wrapper">
                        <div class="modal_body">
                            <slot />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </Transition>
</template>

<style lang="scss">
.ModalSlide {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .modal_overlay {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    aside {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 16;
        width: var(--modal_slide_container_width);
        height: 100vh;
        .modal_slide_content {
            background-color: var(--neutral_color);
            /* padding: var(--padding_xl); */
            position: relative;
            height: 100%;
        }
    }
}

.fade_modal-enter-active,
.fade_modal-leave-active {
    transition: all 0.5s ease;
}

.fade_modal-enter-active .modal_slide_content {
    transition: all 0.3s ease;
}

.fade_modal-leave-active .modal_slide_content {
    transition: all 0.3s ease;
}

.fade_modal-enter-from .modal_slide_content,
.fade_modal-leave-to .modal_slide_content {
    /* opacity: 0; */
    transform: translateX(var(--modal_slide_container_width));
}

.fade_modal-enter-active .modal_overlay {
    transition: opacity 0.5s ease;
}

.fade_modal-leave-active .modal_overlay {
    transition: opacity 0.5s ease;
}

.fade_modal-enter-from .modal_overlay,
.fade_modal-leave-to .modal_overlay {
    opacity: 0;
}
</style>
