import { guides } from '@/helpers/stagesData.js';
import { ref, inject } from '@vue/runtime-core';
import { watchEffect } from 'vue';

const useGuide = () => {
    const guideId = inject('guideId');
    let guide = ref();

    Object.keys(guides).forEach((key) => {
        const ids = key.split(',');
        if (ids.includes(guideId.value.toString())) guide = guides[key];
        guide = {
            ...guide,
            current: guideId.value - guide.start + 1
        };
    });

    return { guide };
};

export default useGuide;
