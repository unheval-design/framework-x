import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';
import { random } from '@/helpers/utils.js';

export const useEvaluationsStore = defineStore(
    'evaluations',
    () => {
        const listAll = ref([]);
        const guide = ref({});
        const project = ref('');

        const add = (evaluation, question, status) => {
            if (
                listAll.value.find(
                    (e) =>
                        e.question === question &&
                        e.evaluation === evaluation &&
                        e.project === project.value
                )
            )
                return;
            listAll.value.push({
                project: project.value,
                evaluation,
                question,
                status
            });
        };

        const currentEvaluations = computed(
            () =>
                listAll.value.filter(
                    (e) => e.project === project.value && e.status
                ).length
        );

        return {
            add,
            listAll,
            currentEvaluations,
            project
        };
    },
    { persist: true }
);
