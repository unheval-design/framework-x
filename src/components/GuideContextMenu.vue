<script setup>
import Dropdown from '@/components/Dropdown.vue';
import IconCopy from '@/components/drawables/IconCopy.vue';
import IconAddNote from '@/components/drawables/IconAddNote.vue';
import IconAddTask from '@/components/drawables/IconAddTask.vue';
import { useClipboard, useTextSelection } from '@vueuse/core';
import { useTodoStore } from '@/stores/todo.js';
import { useNotesStore } from '@/stores/notes.js';
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';

const state = useTextSelection();
const selection = computed(() => state.text.value.trim());
const emit = defineEmits(['close']);

const close = () => {
    emit('close');
};

const copy = () => {
    const { copy } = useClipboard({ source: selection });
    copy();
    close();
};

const addTask = () => {
    const todo = useTodoStore();
    todo.add(selection.value);
    todo.notify();
    close();
};

const addNote = () => {
    const notes = useNotesStore();
    notes.add(selection.value);
    notes.notify();
    close();
};
</script>

<template>
    <Dropdown fixed id="GuideContextMenu" :show="true">
        <ul>
            <li @click="copy()">
                <i>
                    <IconCopy />
                </i>
                Copiar
            </li>
            <li @click="addNote()">
                <i>
                    <IconAddNote />
                </i>
                Agregar a notas
            </li>
            <li @click="addTask()">
                <i>
                    <IconAddTask />
                </i>
                Agregar a tareas
            </li>
        </ul>
    </Dropdown>
</template>

<style lang="scss">
#GuideContextMenu {
    z-index: 10000;
    display: none;
    &.Dropdown {
        ul {
            li {
                height: 100%;
                display: flex;
                align-items: center;
                font-size: var(--text_size);
                gap: var(--gap_sm);
                height: var(--list_option_height);
                padding: 0 var(--padding_sm);
                color: var(--text_color);
                cursor: pointer;
                user-select: none;
                i {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 20px;
                    svg {
                        width: var(--icon_size_sm);
                        height: var(--icon_size_sm);
                        fill: var(--text_color);
                    }
                }
                &:hover {
                    background-color: var(--hover_color);
                }
                &.active {
                    color: var(--primary_color);
                    svg {
                        fill: var(--primary_color);
                        opacity: 1;
                    }
                }
            }
        }
    }
}

#GuideContextMenu.visible {
    display: block;
}
</style>
