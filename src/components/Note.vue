<script setup>
import IconNotesFilled from '@/components/drawables/IconNotesFilled.vue';
import HoverIcon from '@/components/HoverIcon.vue';
import IconTrash from '@/components/drawables/IconTrash.vue';
import { useNotesStore } from '@/stores/notes.js';
import { GUIDES } from '@/helpers/stagesData.js';

defineProps({
    note: {
        type: Object,
        required: true
    }
});

const notes = useNotesStore();
</script>

<template>
    <div class="Note">
        <IconNotesFilled />
        <div class="note_wrapper">
            <b>{{ note.guide.substage.name }} / {{ GUIDES[note.guide.id] }}</b>
            <p>
                {{ note.title }}
            </p>
        </div>
        <HoverIcon @click="notes.remove(note.id)">
            <IconTrash />
        </HoverIcon>
    </div>
</template>

<style lang="scss">
.Note {
    display: flex;
    align-items: flex-start;
    padding: var(--padding);
    gap: var(--gap);
    border-bottom: 1px solid var(--border_color_70);
    font-size: var(--text_size);
    color: var(--text_color);
    position: relative;
    .IconNotesFilled {
        min-width: var(--icon_size_sm);
        height: var(--icon_size_sm);
        fill: var(--text_color);
    }
    .note_wrapper {
        flex: 1;
        p {
            line-height: 20px;
            width: 100%;
            min-height: 20px;
        }
        b {
            font-weight: 500;
            margin-bottom: var(--gap_sm);
            display: block;
        }
    }
    .IconTrash {
        opacity: 0;
        width: var(--icon_size_sm);
        height: var(--icon_size_sm);
        margin-top: -1px;
        fill: var(--text_color_50);
        transition: all 0.2s ease-in-out;
        &:hover {
            fill: var(--text_color);
        }
    }
    &:hover {
        .IconTrash {
            opacity: 1;
        }
    }
}
</style>
