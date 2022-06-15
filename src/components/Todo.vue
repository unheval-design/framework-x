<script setup>
import { useTodoStore } from '@/stores/todo.js';
import useGuide from '@/hooks/useGuide.js';
import IconBack from '@/components/drawables/IconBack.vue';
import IconAdd from '@/components/drawables/IconAdd.vue';
import HoverIcon from '@/components/HoverIcon.vue';
import Task from '@/components/todo/Task.vue';
import Empty from '@/components/Empty.vue';
import IconTodo from '@/components/drawables/IconTodo.vue'

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
            <HoverIcon>
                <IconBack @click="closeModalSlide()" />
            </HoverIcon>
            <div class="todo_nav_title">
                <p>Tareas</p>
                <small>{{ guide.substage.name }}</small>
            </div>
            <HoverIcon>
                <IconAdd hover @click="todo.add()" />
            </HoverIcon>
        </nav>
        <div class="todo_wrapper">
            <ul v-if="todo.list.length">
                <Task
                    v-for="(task, index) in todo.list"
                    :key="index"
                    :task="task"
                />
            </ul>
            <Empty v-if="!todo.list.length">
                <template v-slot:icon>
                    <IconTodo />
                </template>
                <template v-slot:title>
                    Aún no hay tareas
                </template>
                <template v-slot:description>
                    Añade tus tareas pendientes y haz un seguimiento de ellas.
                </template>
            </Empty>
        </div>
    </div>
</template>

<style lang="scss">
.Todo {
    nav.todo_nav {
        position: relative;
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
    .todo_wrapper {
        height: calc(100vh - #{var(--navbar_height)});
        overflow: auto;
    }
}
</style>
