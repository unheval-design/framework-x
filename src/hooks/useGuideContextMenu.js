import { ref, nextTick } from '@vue/runtime-core';

const useGuideContextMenu = () => {
    const guideRef = ref();
    nextTick(() => {
        const contextMenu = document.getElementById('GuideContextMenu');
        guideRef.value.addEventListener('contextmenu', (event) => {
            event.preventDefault();

            const { clientX: mouseX, clientY: mouseY } = event;

            contextMenu.style.top = `${mouseY}px`;
            contextMenu.style.left = `${mouseX}px`;

            contextMenu.classList.add('visible');
            document.body.style.overflow = 'hidden';
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
