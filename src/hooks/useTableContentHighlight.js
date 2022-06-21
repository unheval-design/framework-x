import { nextTick } from '@vue/runtime-core';

const useTableContentHighlight = () => {
    nextTick(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                const tableContent = document.querySelector(
                    `.GuideTableContent ol li a[href="#${id}"]`
                );
                if (tableContent) {
                    if (entry.intersectionRatio > 0) {
                        tableContent.classList.add('active');
                    } else {
                        tableContent.classList.remove('active');
                    }
                }
            });
        });

        document.querySelectorAll('h1[id], h2[id]').forEach((title) => {
            observer.observe(title);
        });
    });
};

export default useTableContentHighlight;
