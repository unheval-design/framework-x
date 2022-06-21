<script setup>
import { useSlots } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
    to: {
        type: Object,
        required: false
    },
    secondary: {
        type: Boolean
    },
    small: {
        type: Boolean
    }
});
const onClick = () => {
    if (props.to) {
        router.push(props.to);
    }
};

const slot = useSlots();
</script>
<template>
    <button
        class="Button"
        :class="[{ secondary: secondary }, { small: small }]"
        @click="onClick()"
    >
        <i v-if="slot.icon"><slot name="icon" /></i>
        <span>
            <slot />
        </span>
    </button>
</template>

<style lang="scss">
.Button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: var(--radius);
    background-color: var(--primary_color);
    height: var(--button_height);
    padding: 0 var(--padding);
    font-family: var(--font);
    font-size: var(--text_size);
    letter-spacing: 0.03rem;
    gap: 10px;
    position: relative;
    overflow: hidden;
    span {
        color: white;
        font-weight: 500;
        font-size: 14px;
        position: relative;
        margin-top: -2px;
    }
    i {
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            fill: white;
            width: var(--icon_size_sm);
            height: var(--icon_size_sm);
            &.IconAdd {
                transform: scale(1.3);
            }
        }
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        clip-path: circle(0px at 0 center);
        transition: clip-path ease 0.4s;
        opacity: 0.1;
        background-color: var(--text_color);
    }
    &:hover:before {
        clip-path: circle(200% at 0 0);
    }
    &.secondary {
        background-color: var(--neutral_color_70);
        svg {
            fill: var(--text_color);
        }
        span {
            color: var(--text_color);
        }
    }
    &.small {
        height: var(--button_height_small);
        padding: 0 var(--padding_sm);
    }
}
</style>
