<script setup>
import { useSlots } from '@vue/runtime-core';
import IconClose from './drawable/IconClose.vue';
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
</script>
<template>
    <Transition name="fade_modal">
        <div class="Modal" v-if="show">
            <div class="modal_overlay" @click="close()"></div>
            <aside>
                <div class="modal_content">
                    <IconClose class="icon_close" @click="close()" />
                    <div class="modal_wrapper">
                        <div class="modal_title">
                            <h1 v-if="slot.title">
                                <slot name="title" />
                            </h1>
                            <p v-if="slot.text">
                                <slot name="text" />
                            </p>
                        </div>
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
.Modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        width: var(--modal_container_width);
        .modal_content {
            background-color: var(--neutral_color);
            border-radius: var(--radius);
            padding: var(--padding_xl);
            position: relative;
            .IconClose {
                cursor: pointer;
                position: absolute;
                right: var(--gap);
                top: var(--gap);
                width: var(--icon_size);
                height: var(--icon_size);
                fill: var(--text_color);
            }
            .modal_wrapper {
                max-width: 75%;
                margin: var(--padding_xl) auto;
                .modal_title {
                    h1 {
                        font-size: var(--title_size);
                        font-weight: 600;
                        color: var(--text_color);
                    }
                    p {
                        margin-top: 10px;
                        font-size: var(--text_size_sm);
                        color: var(--text_color_50);
                        line-height: var(--text_line_height);
                    }
                }
                .modal_body {
                    margin-top: var(--padding_xl);
                }
            }
        }
    }
}

.fade_modal-enter-active,
.fade_modal-leave-active {
    transition: all 0.5s ease;
}

.fade_modal-enter-active .modal_content {
    transition: all 0.4s ease;
}

.fade_modal-leave-active .modal_content {
    transition: all 0.3s ease;
}

.fade_modal-enter-from .modal_content,
.fade_modal-leave-to .modal_content {
    opacity: 0;
    transform: translateY(10px);
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
