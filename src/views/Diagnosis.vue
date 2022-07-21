<script setup>
import Button from '@/components/Button.vue';
import { useProjectsStore } from '@/stores/projects.js';
import { computed, inject, onMounted, provide, ref } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import DiagnosisScore from '@/components/DiagnosisScore.vue';
import DiagnosisChar from '@/components/DiagnosisChar.vue';
import DiagnosisCharWrapper from '@/components/DiagnosisCharWrapper.vue';
import { LAST_GUIDE_ID } from '@/helpers/stagesData.js';

const projects = useProjectsStore();
const router = useRouter();
const route = useRoute();
const layoutScore = ref(0);
const imageryScore = ref(0);
const interactivityScore = ref(0);
const brandingScore = ref(0);
const mediaScore = ref(0);
const messagingScore = ref(0);
const performanceScore = ref(0);
const scoreTitle = ref('Puntuación inicial');
const title = ref('Diagnóstico');

provide('layoutScore', layoutScore);
provide('imageryScore', imageryScore);
provide('interactivityScore', interactivityScore);
provide('brandingScore', brandingScore);
provide('mediaScore', mediaScore);
provide('messagingScore', messagingScore);
provide('performanceScore', performanceScore);

onMounted(() => {
    if (route.name === 'Results') {
        scoreTitle.value = 'Puntuación final';
        title.value = 'Resultados';
    }
});

const goToPrevious = () => {
    router.push({ name: 'Guides', params: { id: projects.current.guide } });
};

const goToNext = () => {
    if (projects.current.guide === LAST_GUIDE_ID) {
        projects.update({ completed: true });
        projects.update({
            diagnosisTwo: {
                layout: layoutScore.value,
                imagery: imageryScore.value,
                interactivity: interactivityScore.value,
                branding: brandingScore.value,
                media: mediaScore.value,
                messaging: messagingScore.value,
                performance: performanceScore.value
            }
        });
        router.push({ name: 'Finish' });
    } else {
        let nextGuideId = projects.current.guide;
        if (projects.current.guide === 1) nextGuideId++;
        projects.update({ guide: nextGuideId });
        projects.update({
            diagnosisOne: {
                layout: layoutScore.value,
                imagery: imageryScore.value,
                interactivity: interactivityScore.value,
                branding: brandingScore.value,
                media: mediaScore.value,
                messaging: messagingScore.value,
                performance: performanceScore.value
            }
        });
        router.push({ name: 'Guides', params: { id: nextGuideId } });
    }
};

const setLayoutScore = (score) => {
    layoutScore.value = score;
};
const setImageryScore = (score) => {
    imageryScore.value = score;
};
const setInteractivityScore = (score) => {
    interactivityScore.value = score;
};
const setBrandingScore = (score) => {
    brandingScore.value = score;
};
const setMediaScore = (score) => {
    mediaScore.value = score;
};
const setMessagingScore = (score) => {
    messagingScore.value = score;
};
const setPerformanceScore = (score) => {
    performanceScore.value = score;
};

const scoreTotal = computed(
    () =>
        ((layoutScore.value +
            imageryScore.value +
            interactivityScore.value +
            brandingScore.value +
            mediaScore.value +
            messagingScore.value +
            performanceScore.value) *
            100) /
        35
);

const allIsSelected = computed(
    () =>
        layoutScore.value > 0 &&
        imageryScore.value > 0 &&
        interactivityScore.value > 0 &&
        brandingScore.value > 0 &&
        mediaScore.value > 0 &&
        messagingScore.value > 0 &&
        performanceScore.value > 0
);
</script>
<template>
    <Navbar />
    <div class="diagnosis_container">
        <div class="diagnosis_wrapper">
            <section class="diagnosis_content">
                <div class="diagnosis_form">
                    <div class="diagnosis_title">
                        <h1>{{ title }}</h1>
                        <p>
                            Basado en tus entrevistas, ahora evalua 7 aspectos
                            de tus interfaces.
                        </p>
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Layout</h2>
                        <small>Posicionamiento de los elementos.</small>
                        <DiagnosisScore @selection="setLayoutScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Imagery</h2>
                        <small
                            >Informacion que las imágenes e iconos
                            trasmiten.</small
                        >
                        <DiagnosisScore @selection="setImageryScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Interactivity</h2>
                        <small>
                            Animaciones y movimientos con la que interactua el
                            usuario.
                        </small>
                        <DiagnosisScore @selection="setInteractivityScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Branding</h2>
                        <small>
                            Relación entre la marca y las interfaces como
                            colores, consistencia e identidad.
                        </small>
                        <DiagnosisScore @selection="setBrandingScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Media</h2>
                        <small
                            >Recursos audiovisuales de ayuda o
                            presentacion.</small
                        >
                        <DiagnosisScore @selection="setMediaScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Messaging</h2>
                        <small
                            >Mensajes consistentes y claros en los
                            elementos.</small
                        >
                        <DiagnosisScore @selection="setMessagingScore" />
                    </div>
                    <div class="diagnosis_feature">
                        <h2>Performance</h2>
                        <small>
                            Manejo de tiempos de carga y tareas que tomen
                            tiempo.
                        </small>
                        <DiagnosisScore @selection="setPerformanceScore" />
                    </div>
                </div>
                <aside class="diagnosis_char_box">
                    <DiagnosisCharWrapper
                        :title="scoreTitle"
                        :scoreTotal="scoreTotal"
                    >
                        <DiagnosisChar
                            :layoutScore="layoutScore"
                            :imageryScore="imageryScore"
                            :interactivityScore="interactivityScore"
                            :brandingScore="brandingScore"
                            :mediaScore="mediaScore"
                            :messagingScore="messagingScore"
                            :performanceScore="performanceScore"
                        />
                    </DiagnosisCharWrapper>
                    <div class="control">
                        <Button secondary @click="goToPrevious()"
                            >Anterior</Button
                        >
                        <Button :disabled="!allIsSelected" @click="goToNext()"
                            >Continuar</Button
                        >
                    </div>
                </aside>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.diagnosis_container {
    .diagnosis_wrapper {
        padding: var(--padding);
        max-width: var(--container_width);
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
        .diagnosis_title {
            border-bottom: 1px solid var(--border_color_70);
            padding-bottom: var(--padding);
            width: 100%;
            h1 {
                font-size: var(--title_size);
                font-weight: 600;
                color: var(--text_color);
                line-height: var(--text_line_height);
            }
            p {
                font-size: var(--text_size_sm);
                color: var(--text_color_50);
                line-height: var(--text_line_height);
            }
        }
        .diagnosis_content {
            display: grid;
            grid-template-columns: 1fr 360px;
            grid-gap: var(--gap_xl);
            .diagnosis_form {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: var(--gap_l);
                justify-items: flex-start;
                width: 100%;
                max-width: 680px;
                .diagnosis_feature {
                    width: 100%;
                    h2 {
                        font-weight: 500;
                        font-size: var(--text_size_l);
                        color: var(--text_color);
                    }
                    small {
                        display: block;
                        font-size: var(--text_size_sm);
                        color: var(--text_color_50);
                        margin-top: 4px;
                        margin-bottom: var(--gap_sm);
                    }
                }
            }
            .diagnosis_char_box {
                position: sticky;
                top: calc(var(--navbar_height) + var(--padding));
                height: calc(
                    100vh - #{var(--navbar_height)} - 2 * #{var(--padding)}
                );
                /* height: fit-content; */
                display: flex;
                flex-direction: column;

                .control {
                    width: 100%;
                    margin-top: var(--gap_sm);
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
}

@include screen('nm') {
    .diagnosis_container {
        .diagnosis_wrapper {
            .diagnosis_content {
                grid-template-columns: 1fr;
                grid-gap: var(--gap_l);
                .diagnosis_form {
                    grid-gap: var(--gap);
                }
                .diagnosis_char_box {
                    height: auto;
                }
            }
        }
    }
}

@include screen('xs') {
    .diagnosis_container {
        .diagnosis_wrapper {
            .diagnosis_content {
                .diagnosis_char_box {
                    .DiagnosisChar {
                        padding: 12px;
                        .titles {
                            legend {
                                font-size: 9px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
