<script setup>
import Navbar from '@/components/Navbar.vue';
import Empty from '@/components/Empty.vue';
import StatCard from '@/components/StatCard.vue';
import DiagnosisChar from '@/components/DiagnosisChar.vue';
import DiagnosisCharWrapper from '@/components/DiagnosisCharWrapper.vue';
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
import success from '@/assets/media/finish.wav';
import { computed, onMounted, reactive, ref, watch } from '@vue/runtime-core';
import JSConfetti from 'js-confetti';
import gsap from 'gsap';

const jsConfetti = new JSConfetti();

const projects = useProjectsStore();
const todo = useTodoStore();
const notes = useNotesStore();
const challenges = useChallengesStore();
const evaluations = useEvaluationsStore();

todo.project = projects.current.id;
notes.project = projects.current.id;
challenges.project = projects.current.id;
evaluations.project = projects.current.id;

const challengesNumber = ref(0);
const questionsNumber = ref(0);
const notesNumber = ref(0);
const tasksNumber = ref(0);

onMounted(() => {
    const audioSuccess = new Audio(success);
    audioSuccess.play();
    jsConfetti.addConfetti({
        confettiColors: ['#FFD66E', '#318BEA', '#FFEFC5', '#ADD0F7'],
        confettiRadius: 3.5,
        confettiNumber: 350
    });
});

const number = ref(10);
const tweened = reactive({
    challenges: 0,
    questions: 0,
    notes: 0,
    tasks: 0
});

onMounted(() => {
    setTimeout(() => {
        challengesNumber.value = challenges.currentChallenges;
        notesNumber.value = notes.currentNotes;
        tasksNumber.value = todo.currentTodosCompleted;
        questionsNumber.value = evaluations.currentEvaluations;
    }, 200);
});

watch(challengesNumber, (n) => {
    gsap.to(tweened, { duration: 1, challenges: Number(n) || 0 });
});

watch(questionsNumber, (n) => {
    gsap.to(tweened, { duration: 1, questions: Number(n) || 0 });
});

watch(notesNumber, (n) => {
    gsap.to(tweened, { duration: 1, notes: Number(n) || 0 });
});

watch(tasksNumber, (n) => {
    gsap.to(tweened, { duration: 1, tasks: Number(n) || 0 });
});

const scoreTotalOne = computed(
    () =>
        ((projects.current.diagnosisOne.layout +
            projects.current.diagnosisOne.imagery +
            projects.current.diagnosisOne.interactivity +
            projects.current.diagnosisOne.branding +
            projects.current.diagnosisOne.media +
            projects.current.diagnosisOne.messaging +
            projects.current.diagnosisOne.performance) *
            100) /
        35
);

const scoreTotalTwo = computed(
    () =>
        ((projects.current.diagnosisTwo.layout +
            projects.current.diagnosisTwo.imagery +
            projects.current.diagnosisTwo.interactivity +
            projects.current.diagnosisTwo.branding +
            projects.current.diagnosisTwo.media +
            projects.current.diagnosisTwo.messaging +
            projects.current.diagnosisTwo.performance) *
            100) /
        35
);
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
            <DiagnosisCharWrapper
                title="Puntuación inicial"
                :scoreTotal="scoreTotalOne"
            >
                <DiagnosisChar
                    small
                    :layoutScore="projects.current.diagnosisOne.layout"
                    :imageryScore="projects.current.diagnosisOne.imagery"
                    :interactivityScore="
                        projects.current.diagnosisOne.interactivity
                    "
                    :brandingScore="projects.current.diagnosisOne.branding"
                    :mediaScore="projects.current.diagnosisOne.media"
                    :messagingScore="projects.current.diagnosisOne.messaging"
                    :performanceScore="
                        projects.current.diagnosisOne.performance
                    "
                />
            </DiagnosisCharWrapper>
            <DiagnosisCharWrapper
                title="Puntuación final"
                :scoreTotal="scoreTotalTwo"
            >
                <DiagnosisChar
                    small
                    :layoutScore="projects.current.diagnosisTwo.layout"
                    :imageryScore="projects.current.diagnosisTwo.imagery"
                    :interactivityScore="
                        projects.current.diagnosisTwo.interactivity
                    "
                    :brandingScore="projects.current.diagnosisTwo.branding"
                    :mediaScore="projects.current.diagnosisTwo.media"
                    :messagingScore="projects.current.diagnosisTwo.messaging"
                    :performanceScore="
                        projects.current.diagnosisTwo.performance
                    "
                />
            </DiagnosisCharWrapper>
            <StatCard>
                <template v-slot:icon><IconQuestion /></template>
                <template v-slot:title
                    >{{ tweened.questions.toFixed(0) }}/40</template
                >
                <template v-slot:text>Preguntas respondidas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTools /></template>
                <template v-slot:title
                    >{{ tweened.challenges.toFixed(0) }}/20</template
                >
                <template v-slot:text>Retos tomados</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconNotes /></template>
                <template v-slot:title>{{ tweened.notes.toFixed(0) }}</template>
                <template v-slot:text>Notas guardadas</template>
            </StatCard>
            <StatCard>
                <template v-slot:icon><IconTodo /></template>
                <template v-slot:title>
                    {{ tweened.tasks.toFixed(0) }}/{{
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
        margin: var(--padding) auto;
        /* margin-top: 1rem; */
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
