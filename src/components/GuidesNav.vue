<script setup>
import GuidesProgress from '@/components/GuidesProgress.vue';
import Button from '@/components/Button.vue';
import { inject } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { LAST_GUIDE_ID } from '@/helpers/stagesData.js';

const guideId = inject('guideId');
const router = useRouter();

const goToPrevious = () => {
    if (guideId.value > 1)
        router.push({ name: 'Guides', params: { id: guideId.value - 1 } });
};

const goToNext = () => {
    if (guideId.value < LAST_GUIDE_ID)
        router.push({ name: 'Guides', params: { id: guideId.value + 1 } });
};
</script>

<template>
    <aside class="GuidesNav">
        <div class="guides_wrapper">
            <GuidesProgress />
            <div class="guide_table_content">
                <slot />
            </div>
        </div>
        <div class="guide_nav_controls">
            <Button secondary @click="goToPrevious()">Anterior</Button>
            <Button @click="goToNext()">Continuar</Button>
        </div>
    </aside>
</template>

<style lang="scss">
.GuidesNav {
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    height: 100%;
    .guides_wrapper {
        flex: 1;
        border-radius: var(--radius);
        border: 1px solid var(--border_color_70);
        .guide_table_content {
            border-top: 1px solid var(--border_color_70);
            padding: var(--padding);
        }
    }
    .guide_nav_controls {
        display: flex;
        gap: var(--gap);
        align-items: center;
        justify-content: space-between;
    }
}
</style>
