<script setup>
import IconTools from '@/components/drawables/IconTools.vue';
import Chip from '@/components/Chip.vue';
import Button from '@/components/Button.vue';
import IconPlay from '@/components/drawables/IconPlay.vue';
import IconStop from '@/components/drawables/IconStop.vue';
import start from '@/assets/media/start.wav';
import end from '@/assets/media/end.wav';
import { computed, inject, onMounted, ref, watch } from '@vue/runtime-core';
import dayjs from 'dayjs';
import { useToastStore } from '@/stores/toast.js';
import { useTodoStore } from '@/stores/todo.js';

const timeLeft = ref('00:00');
const isPlaying = ref(false);
const interval = ref();
const flagTodoModal = inject('flagTodoModal');

const todo = useTodoStore();
const toast = useToastStore();
const audioStart = new Audio(start);
const audioEnd = new Audio(end);

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    tasks: {
        type: Array,
        required: true
    }
});

const getTimeLeft = () => {
    timeLeft.value = `2000-10-10T00:${props.time}:00`;
};

const timeLeftFormatted = computed(() => dayjs(timeLeft.value).format('mm:ss'));

onMounted(() => {
    getTimeLeft();
});

const addTasks = () => {
    todo.removeChallengeTasks(props.id);
    props.tasks.map((t) => {
        todo.add(t, true, false, props.id);
    });
    setTimeout(() => {
        flagTodoModal.value = true;
    }, 1500);
    setTimeout(() => {
        toast.type = 2;
        toast.message = 'Tareas agregadas';
    }, 3200);
};

const play = () => {
    if (isPlaying.value) {
        stop();
        return;
    }
    interval.value = setInterval(() => {
        timeLeft.value = dayjs(timeLeft.value).subtract(1, 'second');
    }, 1000);
    isPlaying.value = true;
    audioStart.play();
    addTasks();
    toast.type = 4;
    toast.message = 'Reto iniciado';
};

const stop = () => {
    isPlaying.value = false;
    audioEnd.play();
    timeLeft.value = `2000-10-10T00:${props.time}:00`;
    clearInterval(interval.value);
    toast.type = 4;
    toast.message = 'Reto finalizado';
};

watch(timeLeftFormatted, () => {
    if (timeLeftFormatted.value == '00:00') {
        stop();
    }
});
</script>

<template>
    <div class="Challenge" :class="isPlaying ? 'isPlaying' : ''">
        <IconTools />
        <div class="challenge_content">
            <slot name="title"></slot>
            <p>
                <slot></slot>
            </p>
            <aside class="challenge_todo">
                <ul>
                    <li v-for="(task, index) in tasks" :key="index">
                        {{ task }}
                    </li>
                </ul>
            </aside>
            <aside class="challenge_tools">
                <slot name="tools" />
            </aside>
            <div class="controls">
                <Button @click="play()" :class="isPlaying ? 'error' : ''">
                    <template v-slot:icon>
                        <IconPlay v-if="!isPlaying" />
                        <IconStop v-if="isPlaying" />
                    </template>
                    {{ isPlaying ? timeLeftFormatted : 'Comenzar' }}
                </Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.Challenge {
    border-radius: var(--radius);
    font-size: var(--text_size_l);
    padding: var(--padding);
    display: flex;
    align-items: flex-start;
    gap: var(--gap);
    color: var(--text_color);
    border: 1px solid var(--border_color_70);
    /* border-left: 3px solid var(--primary_color); */
    .challenge_content {
        display: flex;
        flex-direction: column;
        gap: var(--gap_sm);
        flex: 1;
        p {
            line-height: var(--title_line_height);
        }
        aside {
            b {
                font-size: var(--text_size);
                color: var(--text_color_50);
                /* font-weight: 400; */
                margin-bottom: 10px;
                display: block;
            }
            .chip_grid {
                display: flex;
                gap: var(--gap_sm);
                flex-wrap: wrap;
            }
        }
        .controls {
            display: flex;
            justify-content: flex-end;
            padding-top: var(--gap_sm);
            border-top: 1px solid var(--border_color_70);
        }
        .challenge_todo {
            ul {
                li {
                    font-size: var(--text_size_l);
                    line-height: var(--text_line_height);
                }
            }
        }
        .challenge_tools {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-gap: var(--gap_sm);
            margin: 6px 0;
        }
    }
    & > svg {
        width: var(--icon_size);
        height: var(--icon_size);
        fill: var(--text_color);
        margin-top: 4px;
    }
}

@include screen('xs') {
    .Challenge {
        flex-direction: column;
        gap: var(--gap_sm);
        .challenge_content {
            .controls {
                .Button {
                    width: 100%;
                }
            }
            .challenge_tools {
                grid-template-columns: 1fr;
            }
        }
    }
}
</style>
