import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { ID } from '@/helpers/utils.js';
import { random } from '@/helpers/utils.js';

export const useNotesStore = defineStore(
    'notes',
    () => {
        const listAll = ref([]);
        const guide = ref({});
        const project = ref('');
        const noteAdded = ref(false);

        const add = (title) => {
            const note = {
                id: ID(),
                title,
                color: random(0, 4),
                guide: guide.value,
                project: project.value
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

        const currentNotes = computed(
            () =>
                listAll.value.filter((note) => note.project === project.value)
                    .length
        );

        return {
            listAll,
            list,
            add,
            notify,
            guide,
            remove,
            noteAdded,
            project,
            currentNotes
        };
    },
    { persist: true }
);
