<script setup>
import Chip from '@/components/Chip.vue';
import IconCheck from '@/components/drawables/IconCheck.vue';
import IconClose from '@/components/drawables/IconClose.vue';
import { useSlots } from '@vue/runtime-core';

defineProps({
    type: {
        type: String,
        default: 'do',
        validator: (value) => {
            return ['do', 'caution', 'dont'].indexOf(value) !== -1;
        }
    }
});
const slot = useSlots();
</script>

<template>
    <div class="TipCard" :class="`status_${type}`">
        <Chip color="success" v-if="type === 'do'">
            <template v-slot:icon>
                <IconCheck />
            </template>
            Hacer
        </Chip>
        <Chip color="warning" v-if="type === 'caution'">
            <template v-slot:icon>
                <IconCheck />
            </template>
            Precaución
        </Chip>
        <Chip color="error" v-if="type === 'dont'">
            <template v-slot:icon>
                <IconClose />
            </template>
            No Hacer
        </Chip>
        <slot name="image" />
        <p v-if="slot.default">
            <slot />
        </p>
    </div>
</template>

<style lang="scss">
.TipCard {
    padding: var(--padding);
    box-sizing: border-box;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    /* & > span {
        font-size: var(--text_size);
        font-weight: 500;
    } */
    img {
        width: 100%;
        object-fit: cover;
        border-radius: var(--radius);
    }
    p {
        font-size: var(--text_size);
    }
}
</style>
