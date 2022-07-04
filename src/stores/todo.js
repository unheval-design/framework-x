import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useTodoStore = defineStore(
    'todo',
    () => {
        const listAll = ref([]);
        const guide = ref(0);
        const project = ref('');
        const taskAdded = ref(false);
        const lastTaskCreated = ref(null);

        const add = (title, reverse = false, focus = true, challenge) => {
            const task = {
                id: ID(),
                completed: false,
                title,
                priority: 0,
                guide: guide.value,
                project: project.value,
                challenge
            };
            if (focus) lastTaskCreated.value = task.id;
            if (!reverse) listAll.value.unshift(task);
            if (reverse) listAll.value.push(task);
        };
        const notify = (status = true) => {
            taskAdded.value = status;
        };

        const remove = (id) => {
            listAll.value = listAll.value.filter((task) => task.id !== id);
        };

        const removeChallengeTasks = (challengeId) => {
            listAll.value = listAll.value.filter(
                (task) => task.challenge !== challengeId
            );
        };

        const list = computed(() =>
            listAll.value.filter(
                (task) =>
                    task.guide.substage.id === guide.value.substage.id &&
                    project.value === task.project
            )
        );

        return {
            listAll,
            list,
            add,
            notify,
            guide,
            project,
            remove,
            removeChallengeTasks,
            lastTaskCreated,
            taskAdded
        };
    },
    { persist: true }
);
