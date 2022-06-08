<script setup>
import Guide1 from '@/components/guides/Guide1.vue';
import Guide2 from '@/components/guides/Guide2.vue';
import { inject } from '@vue/runtime-core';
const guideId = inject('guideId');
</script>

<template>
    <div class="Guide">
        <Guide1 v-if="guideId === 1" />
        <Guide2 v-if="guideId === 2" />
    </div>
</template>

<style lang="scss">
.Guide {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    p {
        line-height: var(--text_line_height);
    }
}
</style>
