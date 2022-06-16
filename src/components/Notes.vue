<script setup>
import { useNotesStore } from '@/stores/notes.js';
import useGuide from '@/hooks/useGuide.js';
import IconBack from '@/components/drawables/IconBack.vue';
import HoverIcon from '@/components/HoverIcon.vue';
import Note from '@/components/Note.vue';
import Empty from '@/components/Empty.vue';
import IconNotes from '@/components/drawables/IconNotes.vue';
import { onMounted } from '@vue/runtime-core';

const { guide } = useGuide();
const notes = useNotesStore();

onMounted(() => {
    notes.notify(false);
});

const emit = defineEmits(['close']);
const closeModalSlide = () => {
    emit('close');
};
</script>
<template>
    <div class="Notes">
        <nav class="notes_nav">
            <HoverIcon>
                <IconBack @click="closeModalSlide()" />
            </HoverIcon>
            <div class="notes_nav_title">
                <p>Notas</p>
            </div>
        </nav>
        <div class="todo_wrapper">
            <ul v-if="notes.list.length">
                <Note
                    v-for="(note, index) in notes.list"
                    :key="index"
                    :note="note"
                />
            </ul>
            <Empty v-if="!notes.list.length">
                <template v-slot:icon>
                    <IconNotes />
                </template>
                <template v-slot:title> Aún no hay notas </template>
                <template v-slot:description>
                    Añade tus notas para acceder mas tarde a ellas.
                </template>
            </Empty>
        </div>
    </div>
</template>

<style lang="scss">
.Notes {
    nav.notes_nav {
        position: relative;
        .notes_nav_title {
            flex: 1;
            padding-left: var(--gap);
            p {
                font-weight: 500;
                color: var(--text_color);
                font-size: var(--text_size_l);
            }
            small {
                color: var(--text_color_70);
                font-size: var(--text_size_sm);
            }
        }
        svg {
            width: var(--icon_size_xl);
            height: var(--icon_size_xl);
            fill: var(--text_color);
            &.IconBack {
                width: var(--icon_size);
                height: var(--icon_size);
            }
        }
    }
    .todo_wrapper {
        height: calc(100vh - #{var(--navbar_height)});
        overflow: auto;
    }
}
</style>
