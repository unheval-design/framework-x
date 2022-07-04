<script setup>
import CheckButton from '@/components/CheckButton.vue';
import Chip from '@/components/Chip.vue';
import HoverIcon from '@/components/HoverIcon.vue';
import IconTrash from '@/components/drawables/IconTrash.vue';
import { ref } from '@vue/reactivity';
import { nextTick, onMounted, watchEffect } from '@vue/runtime-core';
import { onClickOutside } from '@vueuse/core';
import { useTodoStore } from '@/stores/todo.js';

const todo = useTodoStore();
const taskInput = ref(null);
const editable = ref(false);
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
});

const editTask = () => {
    if (!props.task.completed) {
        editable.value = true;
        nextTick(() => {
            taskInput.value.focus();
            todo.lastTaskCreated = null;
        });
    }
};

const noEditTask = () => {
    editable.value = false;
};

onClickOutside(taskInput, () => {
    noEditTask();
});

const resize = () => {
    nextTick(() => {
        const el = taskInput.value;
        if (el) {
            el.style.cssText = 'height: 20px';
            if (el.scrollHeight > 20) {
                el.style.cssText = 'height: auto;';
                el.style.cssText = 'height:' + el.scrollHeight + 'px';
            }
        }
    });
};

watchEffect(() => {
    if (props.task.id === todo.lastTaskCreated) editTask();
});
</script>

<template>
    <div class="Task" :class="{ completed: task.completed }">
        <div class="task_overlay" @click="editTask()"></div>
        <CheckButton rounded v-model:checked="task.completed" />
        <div class="task_wrapper">
            <p v-show="!editable" @click="editTask()">{{ task.title }}</p>
            <textarea
                placeholder="Tarea..."
                v-show="editable"
                ref="taskInput"
                v-model.trim="task.title"
                @input="resize()"
                @focus="resize()"
                @blur="noEditTask()"
            />
            <div class="task_status">
                <Chip v-if="task.challenge">Reto #{{ task.challenge }}</Chip>
            </div>
        </div>
        <HoverIcon @click="todo.remove(task.id)">
            <IconTrash />
        </HoverIcon>
    </div>
</template>

<style lang="scss">
.Task {
    display: flex;
    align-items: flex-start;
    padding: var(--padding);
    gap: var(--gap);
    border-bottom: 1px solid var(--border_color_70);
    font-size: var(--text_size);
    color: var(--text_color);
    position: relative;
    .task_overlay {
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: 0;
    }
    .task_wrapper {
        z-index: 1;
        width: 100%;
        flex: 1;
        p {
            line-height: 20px;
            width: 100%;
            min-height: 20px;
        }
        textarea {
            display: block;
            background-color: transparent;
            width: 100%;
            height: 20px;
            border: none;
            color: var(--text_color);
            font-family: var(--font);
            line-height: 20px;
            padding: 0;
            font-weight: 300;
            resize: none;
            box-sizing: border-box;
            display: flex;
            align-items: center;
        }
        .task_status {
            margin-top: var(--gap_sm);
            margin-left: -2px;
            width: fit-content;
            display: flex;
            gap: var(--gap_sm);
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
    &.completed .task_wrapper {
        p {
            text-decoration: line-through;
            color: var(--text_color_50);
        }
    }
    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--primary_color);
        transform: scaleX(0);
    }
    &:focus-within {
        background-color: var(--primary_color_10);
        &:before {
            transform: scaleX(1);
            transition: transform 0.2s ease-in-out;
            transform-origin: left;
        }
    }
    &:hover {
        .IconTrash {
            opacity: 1;
        }
    }
}
</style>
