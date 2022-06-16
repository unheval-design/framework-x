import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useTodoStore = defineStore('todo', () => {
    const listAll = ref([]);
    const substage = ref(0);
    const taskAdded = ref(false);
    const lastTaskCreated = ref(null);

    const add = (name) => {
        const task = {
            id: ID(),
            completed: false,
            name,
            priority: 0,
            substage: substage.value
        };
        lastTaskCreated.value = task.id;
        listAll.value.unshift(task);
    };
    const notify = (status = true) => {
        taskAdded.value = status;
        console.log('notify');
    };

    const remove = (id) => {
        listAll.value = listAll.value.filter((task) => task.id !== id);
    };

    const list = computed(() =>
        listAll.value.filter((task) => task.substage === substage.value)
    );

    return {
        list,
        add,
        notify,
        substage,
        remove,
        lastTaskCreated,
        taskAdded
    };
});
