<script setup>
import Button from '@/components/Button.vue';
import IconDownloadFile from './drawables/IconDownloadFile.vue';
import IconTools from './drawables/IconTools.vue';
defineProps({
    type: {
        type: String,
        default: 'download',
        validator: (value) => {
            return ['tool', 'download'].indexOf(value) !== -1;
        }
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    src: {
        type: String
    }
});
</script>

<template>
    <div class="ResourceCard">
        <i v-if="type === 'download'" class="resource_image">
            <IconDownloadFile />
        </i>
        <img v-if="type === 'tool' && src" :src="src" class="resource_image" />
        <div class="resource_info">
            <h1>{{ title }}</h1>
            <p v-if="description">{{ description }}</p>
            <!-- <Button secondary v-if="type === 'tool'" small>Usar</Button>
            <Button secondary v-if="type === 'download'" small
                >Descargar</Button
            > -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ResourceCard {
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    padding: var(--padding_sm);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: var(--gap_sm);
    min-width: 240px;
    transition: background ease-in-out 0.2s;
    cursor: pointer;
    i.resource_image {
        min-width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--hover_color);
        border-radius: var(--radius);
        svg {
            width: var(--icon_size_sm);
            height: var(--icon_size_sm);
            fill: var(--text_color_70);
        }
    }
    img.resource_image {
        width: 48px;
        height: 48px;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .resource_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        h1 {
            font-size: var(--text_size);
            font-weight: 500;
            color: var(--text_color);
        }
        p {
            font-size: var(--text_size_sm);
            color: var(--text_color_50);
            font-weight: 300;
            line-height: var(--subtext_line_height);
        }
    }
    &:hover {
        background-color: var(--hover_color);
    }
}
</style>
