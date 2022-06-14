<script setup>
import { useTodoStore } from '@/stores/todo.js';
import useGuide from '@/hooks/useGuide.js';
import IconBack from '@/components/drawables/IconBack.vue';
import IconAdd from '@/components/drawables/IconAdd.vue';

const todo = useTodoStore();
const { guide } = useGuide();

const emit = defineEmits(['close']);
const closeModalSlide = () => {
    emit('close');
};
</script>
<template>
    <div class="Todo">
        <nav class="todo_nav">
            <IconBack @click="closeModalSlide()" />
            <div class="todo_nav_title">
                <p>Tareas</p>
                <small>{{ guide.substage.name }}</small>
            </div>
            <IconAdd @click="todo.add()" />
        </nav>
        <div class="todo_wrapper">
            <ul>
                <li v-for="(task, index) in todo.list" :key="index">
                    {{ task.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.Todo {
    nav.todo_nav {
        .todo_nav_title {
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
}
</style>
