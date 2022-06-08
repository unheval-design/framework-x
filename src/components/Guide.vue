<script setup>
import Guide1 from '@/components/guides/Guide1.vue';
import Guide2 from '@/components/guides/Guide2.vue';
import { inject } from '@vue/runtime-core';
const guideId = inject('guideId');
</script>

<template>
    <section class="Guide">
        <Guide1 v-if="guideId === 1" />
        <Guide2 v-if="guideId === 2" />
    </section>
</template>

<style lang="scss"></style>
