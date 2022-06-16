import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useTodoStore = defineStore('todo', () => {
    const listAll = ref([]);
    const guide = ref(0);
    const taskAdded = ref(false);
    const lastTaskCreated = ref(null);

    const add = (title) => {
        const task = {
            id: ID(),
            completed: false,
            title,
            priority: 0,
            guide: guide.value
        };
        lastTaskCreated.value = task.id;
        listAll.value.unshift(task);
    };
    const notify = (status = true) => {
        taskAdded.value = status;
    };

    const remove = (id) => {
        listAll.value = listAll.value.filter((task) => task.id !== id);
    };

    const list = computed(() =>
        listAll.value.filter(
            (task) => task.guide.substage.id === guide.value.substage.id
        )
    );

    return {
        list,
        add,
        notify,
        guide,
        remove,
        lastTaskCreated,
        taskAdded
    };
});
