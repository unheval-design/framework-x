<script setup>
import Navbar from '@/components/Navbar.vue';
import Empty from '@/components/Empty.vue';
import StatCard from '@/components/StatCard.vue';
import IconTrophy from '@/components/drawables/IconTrophy.vue';
import IconTools from '@/components/drawables/IconTools.vue';
import IconNotes from '@/components/drawables/IconNotes.vue';
import IconTodo from '@/components/drawables/IconTodo.vue';
</script>

<template>
    <Navbar />
    <section class="Finish">
        <Empty>
            <template v-slot:icon>
                <IconTrophy />
            </template>
            <template v-slot:title> Proyecto Completado </template>
            <template v-slot:description>
                Completaste toda las etapas satisfactoriamente.
            </template>
        </Empty>
        <div class="stats_grid">
            <StatCard>
                <template v-slot:icon><IconTrophy /></template>
                <template v-slot:title>20/30</template>
                <template v-slot:text>Preguntas respondidas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTools /></template>
                <template v-slot:title>12/20</template>
                <template v-slot:text>Retos</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconNotes /></template>
                <template v-slot:title>10</template>
                <template v-slot:text>Notas guardadas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTodo /></template>
                <template v-slot:title>16/32</template>
                <template v-slot:text>Tareas</template>
            </StatCard>
        </div>
    </section>
</template>

<style lang="scss">
.Finish {
    margin-top: 8rem;
    .Empty {
        small {
            max-width: 300px;
        }
    }
    .stats_grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 540px;
        margin: 0 auto;
        margin-top: 1rem;
        gap: var(--gap);
    }
}
</style>
