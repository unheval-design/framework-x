<script setup>
import IconMap from './drawable/IconMap.vue';
import IconDesign from './drawable/IconDesign.vue';
import IconLaunch from './drawable/IconLaunch.vue';
import IconTest from './drawable/IconTest.vue';
const props = defineProps({
    stage: {
        type: Number,
        required: true
    }
});
</script>

<template>
    <article class="StageCard">
        <div class="stage_card_wrapper" v-if="props.stage === 1">
            <IconMap />
            <div class="stage_title">
                <h1>Etapa 1: Análisis</h1>
                <p>Empatizar y Definir</p>
            </div>
        </div>
        <div class="stage_card_wrapper" v-if="props.stage === 2">
            <IconDesign />
            <div class="stage_title">
                <h1>Etapa 2: Diseño</h1>
                <p>Idear y Prototipar</p>
            </div>
        </div>
        <div class="stage_card_wrapper" v-if="props.stage === 3">
            <IconLaunch />
            <div class="stage_title">
                <h1>Etapa 3: Implementación</h1>
                <p>Prototipar</p>
            </div>
        </div>
        <div class="stage_card_wrapper" v-if="props.stage === 4">
            <IconTest />
            <div class="stage_title">
                <h1>Etapa 4: Pruebas</h1>
                <p>Probar</p>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.StageCard {
    display: flex;
    align-items: center;
    height: 240px;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    padding: var(--padding);
    box-sizing: border-box;
    transition: background ease-in-out 0.1s;
    cursor: pointer;
    .stage_card_wrapper {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        svg {
            width: var(--icon_size_xl);
            height: var(--icon_size_xl);
            fill: var(--text_color);
        }
        .stage_title {
            display: flex;
            align-items: center;
            flex-direction: column;
            h1 {
                font-weight: 500;
                color: var(--text_color);
                font-size: var(--text_size_l);
            }
            p {
                color: var(--text_color_50);
                font-size: var(--text_size_sm);
                margin-top: 7px;
            }
        }
    }
    &:hover {
        border: 1px solid var(--primary_color);
        background-color: var(--primary_color_10);
    }
}
</style>
