import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useTodoStore = defineStore('todo', () => {
    const list = ref([]);
    const lastTaskCreated = ref(null);
    function add() {
        const task = {
            id: ID(),
            completed: false,
            name: ''
        };
        lastTaskCreated.value = task.id;
        list.value.unshift(task);
    }

    return { list, add, lastTaskCreated };
});
