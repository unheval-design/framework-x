<script setup>
import Navbar from '@/components/Navbar.vue';
import Empty from '@/components/Empty.vue';
import StatCard from '@/components/StatCard.vue';
import IconTrophy from '@/components/drawables/IconTrophy.vue';
import IconQuestion from '@/components/drawables/IconQuestion.vue';
import IconTools from '@/components/drawables/IconTools.vue';
import IconNotes from '@/components/drawables/IconNotes.vue';
import IconTodo from '@/components/drawables/IconTodo.vue';
import { useTodoStore } from '@/stores/todo.js';
import { useNotesStore } from '@/stores/notes.js';
import { useProjectsStore } from '@/stores/projects.js';
import { useChallengesStore } from '@/stores/challenges.js';
import { useEvaluationsStore } from '@/stores/evaluations.js';

const projects = useProjectsStore();
const todo = useTodoStore();
const notes = useNotesStore();
const challenges = useChallengesStore();
const evaluations = useEvaluationsStore();

todo.project = projects.current.id;
notes.project = projects.current.id;
challenges.project = projects.current.id;
evaluations.project = projects.current.id;
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
                <template v-slot:icon><IconQuestion /></template>
                <template v-slot:title
                    >{{ evaluations.currentEvaluations }}/40</template
                >
                <template v-slot:text>Preguntas respondidas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTools /></template>
                <template v-slot:title
                    >{{ challenges.currentChallenges }}/20</template
                >
                <template v-slot:text>Retos tomados</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconNotes /></template>
                <template v-slot:title>{{ notes.currentNotes }}</template>
                <template v-slot:text>Notas guardadas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTodo /></template>
                <template v-slot:title>
                    {{ todo.currentTodosCompleted }}/{{
                        todo.currentTodos
                    }}</template
                >
                <template v-slot:text>Tareas completadas</template>
            </StatCard>
        </div>
    </section>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

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
        width: 560px;
        margin: 0 auto;
        margin-top: 1rem;
        gap: var(--gap);
        padding: 0 var(--padding);
    }
}

@include screen('md') {
    .Finish {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        .stats_grid {
            max-width: 280px;
            width: 100%;
            grid-template-columns: 1fr;
        }
    }
}
</style>
