<script setup>
import { inject } from '@vue/runtime-core';
import Empty from '@/components/Empty.vue';
import Button from '@/components/Button.vue';
import IconCheckpoint from '@/components/drawables/IconCheckpoint.vue';

const guideId = inject('guideId');
const emit = defineEmits(['click']);

const onClick = () => {
    emit('click');
};
</script>

<template>
    <div class="SubstageCompleted">
        <Empty full>
            <template v-slot:icon>
                <IconCheckpoint />
            </template>
            <template v-slot:title> Subetapa Completada </template>
            <template v-slot:description>
                <p v-if="guideId == 5">
                    Has completado de la subetapa de
                    <strong>Empatizar</strong>, con las siguientes guías toca
                    <strong>Definir</strong> tu solución.
                </p>
                <p v-if="guideId == 10">
                    Has completado de la subetapa de
                    <strong>Definir</strong>, con las siguientes guías toca
                    <strong>Idear</strong> tu solución.
                </p>
                <p v-if="guideId == 14">
                    Has completado de la subetapa de
                    <strong>Idear</strong>, con las siguientes guías toca
                    <strong>Prototipar</strong> tu solución.
                </p>
            </template>
            <template v-slot:button>
                <Button @click="onClick()"> Continuar </Button>
            </template>
        </Empty>
    </div>
</template>

<style></style>
