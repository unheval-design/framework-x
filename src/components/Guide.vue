<script setup>
import Guide1 from '@/components/guides/Guide1.vue';
import Guide2 from '@/components/guides/Guide2.vue';
import Guide3 from '@/components/guides/Guide3.vue';
import Guide4 from '@/components/guides/Guide4.vue';
import Guide5 from '@/components/guides/Guide5.vue';
import Guide6 from '@/components/guides/Guide6.vue';
import Guide7 from '@/components/guides/Guide7.vue';
import Guide8 from '@/components/guides/Guide8.vue';
import { inject } from '@vue/runtime-core';
const guideId = inject('guideId');
</script>

<template>
    <section class="Guide">
        <Guide1 v-if="guideId === 1" />
        <Guide2 v-if="guideId === 2" />
        <Guide3 v-if="guideId === 3" />
        <Guide4 v-if="guideId === 4" />
        <Guide5 v-if="guideId === 5" />
        <Guide6 v-if="guideId === 6" />
        <Guide7 v-if="guideId === 7" />
        <Guide8 v-if="guideId === 8" />
    </section>
</template>

<style lang="scss"></style>
