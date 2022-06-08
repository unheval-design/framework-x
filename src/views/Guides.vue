<script setup>
import IconTodo from '@/components/drawable/IconTodo.vue';
import Navbar from '@/components/Navbar.vue';
import Guide from '@/components/Guide.vue';
import GuidesNav from '@/components/GuidesNav.vue';
import GuideTableContent from '@/components/GuideTableContent.vue';
import { useRoute } from 'vue-router';
import { provide, ref, watchEffect } from '@vue/runtime-core';
const route = useRoute();
const guideId = ref(Number(route.params.id));
provide('guideId', guideId);
watchEffect(() => {
    guideId.value = Number(route.params.id);
});
</script>
<template>
    <Navbar>
        <template v-slot:options>
            <li>
                <IconTodo />
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
    .GuidesNav {
        z-index: 5;
        position: sticky;
        top: calc(#{var(--navbar_height)} + #{var(--padding)});
        height: calc(100vh - #{var(--navbar_height)} - 2 * #{var(--padding)});
    }
}
</style>
