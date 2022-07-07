import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';
import { random } from '@/helpers/utils.js';

export const useChallengesStore = defineStore(
    'challenges',
    () => {
        const listAll = ref([]);
        const guide = ref({});
        const project = ref('');

        const add = (id) => {
            if (
                listAll.value.find(
                    (c) => c.challenge_id === id && c.project === project.value
                )
            )
                return;
            listAll.value.push({
                project: project.value,
                challenge_id: id
            });
        };

        const currentChallenges = computed(
            () =>
                listAll.value.filter((c) => c.project === project.value).length
        );

        return {
            add,
            listAll,
            currentChallenges,
            project
        };
    },
    { persist: true }
);
