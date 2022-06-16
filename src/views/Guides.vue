<script setup>
import IconTodo from '@/components/drawables/IconTodo.vue';
import Navbar from '@/components/Navbar.vue';
import Guide from '@/components/Guide.vue';
import GuidesNav from '@/components/GuidesNav.vue';
import ModalSlide from '@/components/ModalSlide.vue';
import Todo from '@/components/Todo.vue';
import GuideTableContent from '@/components/GuideTableContent.vue';
import BadgeIcon from '@/components/BadgeIcon.vue';
import { useRoute } from 'vue-router';
import { computed, provide, ref, watch, watchEffect } from '@vue/runtime-core';
import { useTodoStore } from '@/stores/todo.js';

const todo = useTodoStore();
const route = useRoute();
const guideId = ref(Number(route.params.id));
const flagTodoModal = ref(false);
const guideTableContent = ref([]);

provide('guideTableContent', guideTableContent);
provide('guideId', guideId);

const openTodoModal = () => {
    flagTodoModal.value = true;
};

const closeTodoModal = () => {
    flagTodoModal.value = false;
};

const params = computed(() => route.hash);

watchEffect(() => {
    guideId.value = Number(route.params.id);
});

watch(
    params,
    () => {
        if (!params.value) guideTableContent.value = [];
    },
    { deep: true }
);
</script>
<template>
    <Teleport to="body">
        <ModalSlide :show="flagTodoModal" @close="closeTodoModal">
            <Todo @close="closeTodoModal" />
        </ModalSlide>
    </Teleport>
    <Navbar>
        <template v-slot:options>
            <li>
                <BadgeIcon :show="todo.taskAdded">
                    <IconTodo @click="openTodoModal()" />
                </BadgeIcon>
            </li>
        </template>
    </Navbar>
    <div class="guides_grid" :key="guideId">
        <Guide />
        <GuidesNav>
            <GuideTableContent />
        </GuidesNav>
    </div>
</template>
<style lang="scss">
.guides_grid {
    display: grid;
    grid-template-columns: 1fr 320px;
    grid-gap: var(--gap_xl);
    grid-auto-rows: max-content;
    padding: var(--padding);
    width: var(--container_width);
    margin: 0 auto;
    .Guide {
        max-width: 100%;
        width: 720px;
    }
    .GuidesNav {
        z-index: 5;
        position: sticky;
        top: calc(#{var(--navbar_height)} + #{var(--padding)});
        height: calc(100vh - #{var(--navbar_height)} - 2 * #{var(--padding)});
    }
}
</style>
