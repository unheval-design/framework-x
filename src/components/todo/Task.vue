<script setup>
import CheckButton from '@/components/CheckButton.vue';
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
        <p v-show="!editable" @click="editTask()">{{ task.name }}</p>
        <textarea
            placeholder="Tarea..."
            v-show="editable"
            ref="taskInput"
            v-model.trim="task.name"
            @input="resize()"
            @focus="resize()"
            @blur="noEditTask()"
        />
    </div>
</template>

<style lang="scss">
.Task {
    display: flex;
    align-items: center;
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
    p {
        line-height: 20px;
        width: 100%;
        min-height: 20px;
        z-index: 1;
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
        z-index: 1;
    }
    &.completed {
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
}
</style>
