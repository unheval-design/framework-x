import { ref, nextTick } from '@vue/runtime-core';
import { useTextSelection } from '@vueuse/core';
import { computed } from 'vue';

const useGuideContextMenu = () => {
    const guideRef = ref();
    const state = useTextSelection();
    const selection = computed(() => state.text.value.trim());
    const leftOffset = ref(0);

    nextTick(() => {
        const contextMenu = document.getElementById('GuideContextMenu');

        guideRef.value.addEventListener('contextmenu', (event) => {
            if (selection.value) {
                event.preventDefault();

                const { clientX: mouseX, clientY: mouseY } = event;
                const bodyWidth = document.body.getBoundingClientRect().width;
                const bodyHeight = window.innerHeight;

                contextMenu.style.top = `${mouseY}px`;
                contextMenu.style.left = `${mouseX}px`;

                if (mouseX + 175 > bodyWidth) {
                    contextMenu.style.left = `${bodyWidth - 175}px`;
                }
                if (mouseY + 140 > bodyHeight) {
                    contextMenu.style.top = `${bodyHeight - 140}px`;
                }
                contextMenu.classList.add('visible');
                contextMenu.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.offsetParent != contextMenu) {
                if (contextMenu.classList.contains('visible'))
                    document.body.style.overflow = 'initial';
                contextMenu.classList.remove('visible');
                contextMenu.classList.remove('show');
                leftOffset.value = 0;
                contextMenu.style.left = '0px';
            }
        });
    });

    const closeContextMenu = () => {
        nextTick(() => {
            const contextMenu = document.getElementById('GuideContextMenu');
            if (contextMenu.classList.contains('visible'))
                document.body.style.overflow = 'initial';
            contextMenu.classList.remove('visible');
            contextMenu.classList.remove('show');
        });
    };

    return { guideRef, closeContextMenu };
};

export default useGuideContextMenu;
