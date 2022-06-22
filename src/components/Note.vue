<script setup>
import IconNotesFilled from '@/components/drawables/IconNotesFilled.vue';
import HoverIcon from '@/components/HoverIcon.vue';
import IconTrash from '@/components/drawables/IconTrash.vue';
import { useNotesStore } from '@/stores/notes.js';
import { GUIDES } from '@/helpers/stagesData.js';

const props = defineProps({
    note: {
        type: Object,
        required: true
    }
});

const notes = useNotesStore();

const changeColor = () => {
    if (props.note.color < 5) props.note.color++;
    if (props.note.color === 5) props.note.color = 0;
};
</script>

<template>
    <div class="Note" :class="`color_${note.color}`">
        <HoverIcon @click="changeColor()">
            <IconNotesFilled />
        </HoverIcon>
        <div class="note_wrapper">
            <b>{{ note.guide.substage.name }} / {{ GUIDES[note.guide.id] }}</b>
            <p>{{ note.title }}</p>
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
    &.color_1 {
        .IconNotesFilled {
            fill: var(--primary_color);
        }
    }
    &.color_2 {
        .IconNotesFilled {
            fill: var(--accent_color);
        }
    }
    &.color_3 {
        .IconNotesFilled {
            fill: var(--success_color);
        }
    }
    &.color_4 {
        .IconNotesFilled {
            fill: var(--error_color);
        }
    }
}
</style>
