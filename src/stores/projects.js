import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useProjectsStore = defineStore(
    'projects',
    () => {
        const list = ref([]);
        const current = ref();

        const select = (id) => {
            current.value = list.value.find((p) => p.id === id);
        };

        const add = (project) => {
            list.value.push(project);
            select(project.id);
        };

        const update = ({
            guide,
            step,
            completed,
            fromStart,
            diagnosisOne,
            diagnosisTwo
        }) => {
            const projectUpdated = list.value.find(
                (p) => p.id === current.value.id
            );
            if (guide) projectUpdated.guide = guide;
            if (step) projectUpdated.step = step;
            if (completed) projectUpdated.completed = completed;
            if (fromStart) projectUpdated.fromStart = fromStart;
            if (diagnosisOne) projectUpdated.diagnosisOne = diagnosisOne;
            if (diagnosisTwo) projectUpdated.diagnosisTwo = diagnosisTwo;
            current.value = projectUpdated;
            Object.assign(list.value, projectUpdated);
        };

        return { list, add, select, update, current };
    },
    { persist: true }
);
