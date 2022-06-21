<script setup>
import { ref, useSlots, watchEffect } from '@vue/runtime-core';
import { onClickOutside } from '@vueuse/core';
import IconClose from './drawables/IconClose.vue';
const slot = useSlots();
const emit = defineEmits(['close']);
const modalRef = ref();

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
    if (!props.show) document.body.style.overflow = 'initial';
});

onClickOutside(modalRef, () => {
    close();
});
</script>
<template>
    <Transition name="fade_modal">
        <div class="Modal" v-if="show">
            <div class="modal_overlay"></div>
            <div class="modal_scroll">
                <aside>
                    <div class="modal_content" ref="modalRef">
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
        </div>
    </Transition>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.Modal {
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
        position: absolute;
        right: 0;
        top: 0;
    }
    .modal_scroll {
        width: 100%;
        overflow: auto;
        /* height: 100%; */
        max-height: 100vh;
        position: relative;
        padding: var(--padding);
        box-sizing: border-box;
    }
    aside {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 2 * var(--padding));
        width: 100%;
        z-index: 16;
        .modal_content {
            width: var(--modal_container_width);
            background-color: var(--neutral_color);
            border-radius: var(--radius);
            padding: var(--padding_xl);
            position: relative;
            box-sizing: border-box;
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
                    .grid {
                        display: grid;
                        grid-gap: var(--gap);
                    }
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

@include screen('sm') {
    .Modal {
        aside {
            .modal_content {
                .modal_wrapper {
                    max-width: 85%;
                }
            }
        }
    }
}

@include screen('xs') {
    .Modal {
        aside {
            .modal_content {
                .modal_wrapper {
                    max-width: inherit;
                }
            }
        }
    }
}
</style>
