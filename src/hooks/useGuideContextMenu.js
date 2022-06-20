import { ref, nextTick } from '@vue/runtime-core';
import { useTextSelection } from '@vueuse/core';
import { computed } from 'vue';

const useGuideContextMenu = () => {
    const guideRef = ref();
    const state = useTextSelection();
    const selection = computed(() => state.text.value.trim());

    nextTick(() => {
        const contextMenu = document.getElementById('GuideContextMenu');
        guideRef.value.addEventListener('contextmenu', (event) => {
            if (selection.value) {
                event.preventDefault();
                const { clientX: mouseX, clientY: mouseY } = event;

                contextMenu.style.top = `${mouseY}px`;
                contextMenu.style.left = `${mouseX}px`;

                contextMenu.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.offsetParent != contextMenu) {
                if (contextMenu.classList.contains('visible'))
                    document.body.style.overflow = 'initial';
                contextMenu.classList.remove('visible');
            }
        });
    });

    const closeContextMenu = () => {
        nextTick(() => {
            const contextMenu = document.getElementById('GuideContextMenu');
            if (contextMenu.classList.contains('visible'))
                document.body.style.overflow = 'initial';
            contextMenu.classList.remove('visible');
        });
    };

    return { guideRef, closeContextMenu };
};

export default useGuideContextMenu;
