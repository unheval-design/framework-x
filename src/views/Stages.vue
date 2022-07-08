<script setup>
import Navbar from '@/components/Navbar.vue';
import IconEmpathize from '@/components/drawables/IconEmpathize.vue';
import IconDefine from '@/components/drawables/IconDefine.vue';
import IconIdea from '@/components/drawables/IconIdea.vue';
import IconPrototype from '@/components/drawables/IconPrototype.vue';
import IconMap from '@/components/drawables/IconMap.vue';
import IconDesign from '@/components/drawables/IconDesign.vue';
import IconLaunch from '@/components/drawables/IconLaunch.vue';
import IconTest from '@/components/drawables/IconTest.vue';
import Modal from '@/components/Modal.vue';
import StageCard from '@/components/StageCard.vue';
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useProjectsStore } from '@/stores/projects.js';

const projects = useProjectsStore();
const flagStageOneModal = ref(false);
const flagStageTwoModal = ref(false);
const router = useRouter();

const openStageOneModal = () => {
    flagStageOneModal.value = true;
};
const closeStageOneModal = () => {
    flagStageOneModal.value = false;
};

const openStageTwoModal = () => {
    flagStageTwoModal.value = true;
};
const closeStageTwoModal = () => {
    flagStageTwoModal.value = false;
};

const goToGuidesSubStageOne = () => {
    projects.update({ guide: 1, step: 1 });
    router.replace({ name: 'Guides', params: { id: 1 } });
};
const goToGuidesSubStageTwo = () => {
    projects.update({ guide: 5, step: 1 });
    router.replace({ name: 'Guides', params: { id: 5 } });
};
const goToGuidesSubStageThree = () => {
    projects.update({ guide: 10, step: 2 });
    router.replace({ name: 'Guides', params: { id: 10 } });
};
const goToGuidesSubStageFour = () => {
    projects.update({ guide: 14, step: 2 });
    router.replace({ name: 'Guides', params: { id: 14 } });
};

const goToGuidesSubStageFive = () => {
    projects.update({ guide: 16, step: 3 });
    router.replace({ name: 'Guides', params: { id: 16 } });
};
const goToGuidesSubStageSix = () => {
    projects.update({ guide: 19, step: 4 });
    router.replace({ name: 'Guides', params: { id: 19 } });
};

const selectStage = (stage) => {
    if (stage === 1) openStageOneModal();
    if (stage === 2) openStageTwoModal();
    if (stage === 3) goToGuidesSubStageFive();
    if (stage === 4) goToGuidesSubStageSix();
};
</script>
<template>
    <Teleport to="body">
        <Modal :show="flagStageOneModal" @close="closeStageOneModal">
            <template v-slot:title>Subetapas de Análisis</template>
            <template v-slot:text>
                La etapa de análisis tiene dos sub etapas por las que podrias
                empezar.
            </template>
            <div class="grid">
                <StageCard compact @click="goToGuidesSubStageOne()">
                    <template v-slot:icon><IconEmpathize /></template>
                    <template v-slot:title>Empatizar</template>
                    <template v-slot:text
                        >Mapa de empatia, Journey Map, etc.</template
                    >
                </StageCard>
                <StageCard compact @click="goToGuidesSubStageTwo()">
                    <template v-slot:icon><IconDefine /></template>
                    <template v-slot:title>Definir</template>
                    <template v-slot:text
                        >Card sorting, Flujo de usuario, etc.</template
                    >
                </StageCard>
            </div>
        </Modal>
        <Modal :show="flagStageTwoModal" @close="closeStageTwoModal">
            <template v-slot:title>Subetapas de Diseño</template>
            <template v-slot:text>
                La etapa de diseño tiene dos sub etapas por las que podrias
                empezar.
            </template>
            <div class="grid">
                <StageCard compact @click="goToGuidesSubStageThree()">
                    <template v-slot:icon><IconIdea /></template>
                    <template v-slot:title>Idear</template>
                    <template v-slot:text>Lluvia de ideas, Moodboards</template>
                </StageCard>
                <StageCard compact @click="goToGuidesSubStageFour()">
                    <template v-slot:icon><IconPrototype /></template>
                    <template v-slot:title>Prototipar</template>
                    <template v-slot:text
                        >Mockup, Sistema de diseño, etc.</template
                    >
                </StageCard>
            </div>
        </Modal>
    </Teleport>
    <Navbar />
    <div class="stages_container">
        <div class="stages_wrapper">
            <div class="stages_title">
                <h1>Selecciona una Etapa</h1>
                <p>
                    Empieza desde el análisis o escoje una etapa especifica, si
                    ya tienes algo trabajado.
                </p>
            </div>
            <section class="stages_grid">
                <StageCard @click="selectStage(1)">
                    <template v-slot:icon><IconMap /></template>
                    <template v-slot:title>Etapa 1: Análisis</template>
                    <template v-slot:text>Empatizar y Definir</template>
                </StageCard>
                <StageCard @click="selectStage(2)">
                    <template v-slot:icon><IconDesign /></template>
                    <template v-slot:title>Etapa 2: Diseño</template>
                    <template v-slot:text>Idear y Prototipar</template>
                </StageCard>
                <StageCard @click="selectStage(3)">
                    <template v-slot:icon><IconLaunch /></template>
                    <template v-slot:title>Etapa 3: Implementación</template>
                    <template v-slot:text>Prototipar</template>
                </StageCard>
                <StageCard @click="selectStage(4)">
                    <template v-slot:icon><IconTest /></template>
                    <template v-slot:title>Etapa 4: Pruebas</template>
                    <template v-slot:text>Probar</template>
                </StageCard>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.stages_container {
    margin-top: 8rem;
    .stages_wrapper {
        padding: var(--padding);
        padding-top: 0;
        max-width: var(--container_width);
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        .stages_title {
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
        .stages_grid {
            margin-top: var(--padding_xl);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            grid-gap: var(--gap);
        }
    }
}

@include screen('md') {
    .stages_container {
        margin-top: 3rem;
        .stages_wrapper {
            .stages_grid {
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            }
        }
    }
}

@include screen('sm') {
    .stages_container {
        margin-top: 3rem;
        .stages_wrapper {
            .stages_grid {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>
