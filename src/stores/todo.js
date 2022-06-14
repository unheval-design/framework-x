import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useTodoStore = defineStore('todo', () => {
    const list = ref([]);
    const lastTaskCreated = ref(null);
    const add = () => {
        const task = {
            id: ID(),
            completed: false,
            name: '',
            priority: 0
        };
        lastTaskCreated.value = task.id;
        list.value.unshift(task);
    };

    const remove = (id) => {
        list.value = list.value.filter((task) => task.id !== id);
    };

    return { list, add, remove, lastTaskCreated };
});
