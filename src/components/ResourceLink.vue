<script setup>
import IconDownloadFile from '@/components/drawables/IconDownloadFile.vue';
import IconLink from '@/components/drawables/IconLink.vue';
import Dropdown from '@/components/Dropdown.vue';
import Chip from '@/components/Chip.vue';
import { ref } from '@vue/reactivity';
import { nextTick, onMounted } from '@vue/runtime-core';
const resourceRef = ref();
const flagResource = ref(true);
const x = ref(0);
const y = ref(0);

defineProps({
    type: {
        type: String,
        default: 'download',
        validator: (value) => {
            return ['tool', 'download'].indexOf(value) !== -1;
        }
    },
    name: {
        type: String
    }
});

// const showResource = () => {
//     nextTick(() => {
//         x.value = resourceRef.value?.offsetLeft;
//         y.value = resourceRef.value?.offsetTop + 28;
//     });
//     flagResource.value = true;
// };

// const hideResource = () => {
//     flagResource.value = false;
// };
</script>

<template>
    <strong class="ResourceLink" :class="type" ref="resourceRef">
        <!-- <Chip :color="type === 'tool' ? 'success' : 'warning'">{{ name }}</Chip> -->
        <!-- <Teleport to="body"> -->
        <!-- <Dropdown
                class="ResourceLinkDropdown"
                :show="flagResource"
                @close="hideResource"
            > -->
        <slot />
        <!-- </Dropdown> -->
        <!-- </Teleport> -->
    </strong>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.ResourceLink {
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    opacity: 1;
    /* span {
        cursor: pointer;
        font-weight: 400;
        display: inline-block;
        color: var(--primary_color);
        text-decoration-line: underline;
        &:hover {
            text-decoration-line: underline;
        }
    } */
    /* svg { */
    /* width: 16px;
        height: 16px;
        fill: var(--text_color_50); */
    /* margin-right: 3px;
        margin-bottom: -3px; */
    /* } */
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
