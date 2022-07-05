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
            <template v-slot:title>
                {{
                    guideId != 20 ? 'Subetapa Completada' : 'Etapas Completadas'
                }}
            </template>
            <template v-slot:description>
                <p v-if="guideId == 5">
                    Has completado de la subetapa
                    <strong>Empatizar</strong>, con las siguientes guías toca
                    <strong>Definir</strong> tu solución.
                </p>
                <p v-if="guideId == 10">
                    Has completado de la subetapa
                    <strong>Definir</strong>, con las siguientes guías toca
                    <strong>Idear</strong> tu solución.
                </p>
                <p v-if="guideId == 14">
                    Has completado de la subetapa
                    <strong>Idear</strong>, con las siguientes guías toca
                    <strong>Prototipar I</strong> tu solución.
                </p>
                <p v-if="guideId == 16">
                    Has completado de la subetapa
                    <strong>Prototipar I</strong>, en las siguientes guías
                    continua <strong>Prototipar II</strong> para una solución
                    mas real.
                </p>
                <p v-if="guideId == 18">
                    Has completado de la subetapa
                    <strong>Prototipar II</strong>, con las siguientes guías
                    toca <strong>Probar</strong> tu solución.
                </p>
                <p v-if="guideId == 20">
                    Has completado todas las subetapas y guias de la creación de
                    interfaces.
                </p></template
            >

            <template v-slot:button>
                <Button @click="onClick()">
                    {{ guideId != 20 ? 'Continuar' : 'Finalizar' }}
                </Button>
            </template>
        </Empty>
    </div>
</template>

<style></style>
