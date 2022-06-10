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
            <Button v-if="type === 'tool'" small>Usar</Button>
            <Button v-if="type === 'download'" small>Descargar</Button>
        </div>
    </div>
</template>

<style lang="scss">
.ResourceCard {
    padding: 4px var(--padding);
    display: flex;
    align-items: center;
    gap: var(--gap);
    i.resource_image {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--hover_color);
        border-radius: var(--radius);
        svg {
            width: var(--icon_size);
            height: var(--icon_size);
            fill: var(--text_color_70);
        }
    }
    img.resource_image {
        width: 80px;
        height: 80px;
        border-radius: var(--radius);
        object-fit: cover;
    }
    .resource_info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        h1 {
            font-size: var(--text_size_l);
            font-weight: 500;
            color: var(--text_color);
        }
        p {
            font-size: var(--text_size_sm);
            color: var(--text_color_50);
        }
    }
}
</style>
