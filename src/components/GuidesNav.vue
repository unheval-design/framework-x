<script setup>
import GuidesProgress from '@/components/GuidesProgress.vue';
import SubstageCompleted from '@/components/SubstageCompleted.vue';
import Button from '@/components/Button.vue';
import IconCheck from '@/components/drawables/IconCheck.vue';
import { inject, ref } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { LAST_GUIDE_ID } from '@/helpers/stagesData.js';
import { isCheckpoint } from '@/helpers/utils.js';
import { useProjectsStore } from '@/stores/projects.js';
import Modal from '@/components/Modal.vue';

import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti();

const guideId = inject('guideId');
const router = useRouter();
const projects = useProjectsStore();
const flagCompletedModal = ref(false);

const goToPrevious = () => {
    if (guideId.value > 1) {
        router.push({ name: 'Guides', params: { id: guideId.value - 1 } });
    }
};

const goToNext = () => {
    if (guideId.value < LAST_GUIDE_ID) {
        const nextGuideId = guideId.value + 1;
        projects.update({ guide: nextGuideId });
        router.push({ name: 'Guides', params: { id: nextGuideId } });
    }
};

const openCompletedModal = () => {
    jsConfetti.addConfetti({
        confettiColors: ['#FFD66E', '#318BEA', '#FFEFC5', '#ADD0F7'],
        confettiRadius: 4,
        confettiNumber: 200
    });
    flagCompletedModal.value = true;
};
const closeCompletedModal = () => {
    flagCompletedModal.value = false;
};
</script>

<template>
    <Teleport to="body">
        <Modal :show="flagCompletedModal" @close="closeCompletedModal">
            <SubstageCompleted @click="goToNext()" />
        </Modal>
    </Teleport>
    <aside class="GuidesNav">
        <div class="guides_wrapper">
            <GuidesProgress />
            <div class="guide_table_content">
                <slot />
            </div>
        </div>
        <div class="guide_nav_controls">
            <Button secondary @click="goToPrevious()">Anterior</Button>
            <Button v-if="!isCheckpoint(guideId)" @click="goToNext()"
                >Continuar</Button
            >
            <Button v-if="isCheckpoint(guideId)" @click="openCompletedModal()">
                <template v-slot:icon>
                    <IconCheck />
                </template>
                Completar</Button
            >
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
            max-height: calc(100vh - 270px);
            overflow: auto;
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
