import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useToastStore = defineStore('toast', () => {
    const message = ref('');
    const type = ref(1);
    let timer = 0;

    watch(
        () => message.value,
        () => {
            if (timer) {
                clearTimeout(timer);
                timer = 0;
            }
            timer = window.setTimeout(() => {
                if (message.value) {
                    message.value = '';
                    type.value = 0;
                }
            }, 3000);
        }
    );

    return {
        message,
        type
    };
});
