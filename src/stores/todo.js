import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('todo', () => {
    const list = ref([]);
    function add() {
        list.value.push({ name: 'task' });
    }

    return { list, add };
});
