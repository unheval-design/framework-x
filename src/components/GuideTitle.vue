<script setup>
import IconListen from '@/components/drawables/IconListen.vue';
import IconTime from '@/components/drawables/IconTime.vue';
import useGuideSpeech from '@/hooks/useGuideSpeech.js';
import Button from '@/components/Button.vue';

const { playAudio, isPlaying, isStarted } = useGuideSpeech();
</script>
<template>
    <div class="GuideTitle">
        <h1><slot /></h1>
        <div class="guide_title_options">
            <Button v-if="!isPlaying" secondary small @click="playAudio()">
                <template v-slot:icon>
                    <IconListen />
                </template>
                Escuchar
            </Button>
            <Button v-if="isPlaying" small @click="playAudio()">
                <template v-slot:icon>
                    <IconListen animation />
                </template>
                Escuchando
            </Button>
            <span class="guide_time_read">
                <IconTime />
                <p>Lectura <slot name="timeRead" /> min</p>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.GuideTitle {
    border-bottom: 1px solid var(--border_color_70);
    padding-bottom: var(--padding);
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    h1 {
        color: var(--text_color);
        font-weight: 600;
        font-size: var(--title_size);
        line-height: var(--text_line_height);
    }
    .guide_title_options {
        display: flex;
        gap: var(--gap);
        .guide_time_read {
            display: flex;
            align-items: center;
            gap: 7px;
            svg {
                width: var(--icon_size_sm);
                height: var(--icon_size_sm);
                fill: var(--text_color_70);
            }
            p {
                font-size: var(--text_size);
                color: var(--text_color_70);
            }
        }
    }
}
.dark {
    .GuideTitle {
        h1 {
            background: -webkit-linear-gradient(
                315deg,
                var(--accent_color),
                var(--primary_color),
                var(--text_color)
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
