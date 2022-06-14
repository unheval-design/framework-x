import { guides } from '@/helpers/stagesData.js';
import { ref, inject } from '@vue/runtime-core';
import { computed, watch, watchEffect } from 'vue';

const useGuide = () => {
    const guideId = inject('guideId');
    const guide = ref();

    Object.keys(guides).forEach((key) => {
        const ids = key.split(',');
        if (ids.includes(guideId.value.toString())) {
            guide.value = guides[key];
            guide.value = {
                ...guide.value,
                current: guideId.value - guide.value.start + 1
            };
        }
    });
    console.log('getGuide');

    return { guide };
};

export default useGuide;
