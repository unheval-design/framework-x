import { nextTick } from '@vue/runtime-core';

const useTableContentHighlight = () => {
    nextTick(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document
                        .querySelector(
                            `.GuideTableContent ol li a[href="#${id}"]`
                        )
                        .classList.add('active');
                } else {
                    document
                        .querySelector(
                            `.GuideTableContent ol li a[href="#${id}"]`
                        )
                        .classList.remove('active');
                }
            });
        });

        // Track all sections that have an `id` applied
        document.querySelectorAll('h1[id], h2[id]').forEach((title) => {
            observer.observe(title);
        });
    });
};

export default useTableContentHighlight;
