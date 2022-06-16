import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';

export const useNotesStore = defineStore('notes', () => {
    const listAll = ref([]);
    const guide = ref({});
    const noteAdded = ref(false);

    const add = (title) => {
        const note = {
            id: ID(),
            title,
            guide: guide.value
        };
        listAll.value.unshift(note);
    };
    const notify = (status = true) => {
        noteAdded.value = status;
    };

    const remove = (id) => {
        listAll.value = listAll.value.filter((note) => note.id !== id);
    };

    const list = computed(() => listAll.value);

    return {
        list,
        add,
        notify,
        guide,
        remove,
        noteAdded
    };
});