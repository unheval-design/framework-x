<script setup>
import IconTodo from '@/components/drawables/IconTodo.vue';
import Navbar from '@/components/Navbar.vue';
import Guide from '@/components/Guide.vue';
import GuidesNav from '@/components/GuidesNav.vue';
import ModalSlide from '@/components/ModalSlide.vue';
import Todo from '@/components/Todo.vue';
import GuideTableContent from '@/components/GuideTableContent.vue';
import CurrentProject from '@/components/CurrentProject.vue';
import BadgeIcon from '@/components/BadgeIcon.vue';
import Dropdown from '@/components/Dropdown.vue';
import { useRoute } from 'vue-router';
import { computed, provide, ref, watch, watchEffect } from '@vue/runtime-core';
import { useTodoStore } from '@/stores/todo.js';
import { useProjectsStore } from '@/stores/projects.js';

const todo = useTodoStore();
const projects = useProjectsStore();
const route = useRoute();
const guideId = ref(Number(route.params.id));
const flagTodoModal = ref(false);
const guideTableContent = ref([]);

provide('guideTableContent', guideTableContent);
provide('guideId', guideId);
provide('flagTodoModal', flagTodoModal);
provide('projectName', projects.current.title);

const openTodoModal = () => {
    flagTodoModal.value = true;
};

const closeTodoModal = () => {
    flagTodoModal.value = false;
};

const params = computed(() => route.hash);
const path = computed(() => route.path);

watchEffect(() => {
    guideId.value = Number(route.params.id);
});

watch(
    path,
    (old, current) => {
        if (old !== current) guideTableContent.value = [];
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
                <CurrentProject />
            </li>
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
@import '@/assets/css/breakpoints';

.guides_grid {
    display: flex;
    gap: var(--gap_xl);
    padding: var(--padding);
    box-sizing: border-box;
    max-width: var(--container_width);
    width: 100%;
    margin: 0 auto;
    .Guide {
        flex: 1;
        .guide_wrapper {
            width: 100%;
            max-width: 680px;
        }
    }
    .GuidesNav {
        width: 360px;
        z-index: 5;
        position: sticky;
        top: calc(#{var(--navbar_height)} + #{var(--padding)});
        height: calc(100vh - #{var(--navbar_height)} - 2 * #{var(--padding)});
    }
}

@include screen('nm') {
    .guides_grid {
        flex-direction: column;
        gap: var(--gap_l);
        .Guide {
            .guide_wrapper {
                max-width: inherit;
            }
        }
        .GuidesNav {
            width: 100%;
            height: auto;
            .guides_wrapper {
                .guide_table_content {
                    display: none;
                }
            }
        }
    }
}
</style>
