<script setup>
import IconDownloadFile from '@/components/drawables/IconDownloadFile.vue';
import IconLink from '@/components/drawables/IconLink.vue';
import Dropdown from '@/components/Dropdown.vue';
import { ref } from '@vue/reactivity';
import { nextTick, onMounted } from '@vue/runtime-core';
const resourceRef = ref();
const flagResource = ref(false);
const x = ref(0);
const y = ref(0);

defineProps({
    type: {
        type: String,
        default: 'download',
        validator: (value) => {
            return ['tool', 'download'].indexOf(value) !== -1;
        }
    }
});

const showResource = () => {
    nextTick(() => {
        x.value = resourceRef.value?.offsetLeft;
        y.value = resourceRef.value?.offsetTop + 28;
    });
    flagResource.value = true;
};

const hideResource = () => {
    flagResource.value = false;
};
</script>

<template>
    <strong
        class="ResourceLink"
        :class="type"
        ref="resourceRef"
        @click="showResource()"
    >
        <span><slot /></span>
        <Teleport to="body">
            <Dropdown
                class="ResourceLinkDropdown"
                :style="`top: ${y}px; left: ${x}px`"
                :show="flagResource"
                @close="hideResource"
            >
                <slot name="popup" />
            </Dropdown>
        </Teleport>
    </strong>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.ResourceLink {
    opacity: 1;
    span {
        cursor: pointer;
        font-weight: 400;
        display: inline-block;
        color: var(--primary_color);
        text-decoration-line: underline;
        &:hover {
            text-decoration-line: underline;
        }
    }
    svg {
        width: 16px;
        height: 16px;
        fill: var(--text_color_50);
        margin-right: 3px;
        margin-bottom: -3px;
    }
}

@include screen('sm') {
    .ResourceLinkDropdown {
        top: inherit !important;
        left: var(--padding) !important;
        bottom: var(--padding);
        position: fixed;
        width: calc(100% - 2 * var(--padding));
    }
}
</style>
