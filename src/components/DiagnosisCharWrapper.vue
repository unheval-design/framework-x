<template>
    <div class="DiagnosisCharWrapper">
        <div class="score">
            <IconBadge />
            <div class="score_info">
                <small>{{ title }}</small>
                <strong>{{ scoreTotal.toFixed(1) }} <b>/ 100.0</b></strong>
            </div>
        </div>
        <div class="diagnosis_char_wrapper">
            <slot />
        </div>
    </div>
</template>

<script>
import IconBadge from '@/components/drawables/IconBadge.vue';

export default {
    components: { IconBadge },
    props: {
        scoreTotal: {
            type: Number
        },
        title: {
            type: String,
            default: 'Puntuación'
        }
    }
};
</script>

<style lang="scss">
.DiagnosisCharWrapper {
    border-radius: var(--radius);
    border: 1px solid var(--border_color_70);
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    .diagnosis_char_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--padding);
        flex: 1;
        .DiagnosisChar {
            width: 100%;
            box-sizing: border-box;
        }
    }
    .score {
        border-bottom: 1px solid var(--border_color_70);
        display: flex;
        gap: var(--gap_sm);
        padding: var(--padding_sm) var(--padding);
        align-items: center;
        svg {
            width: var(--icon_size_xl);
            height: var(--icon_size_xl);
            fill: var(--text_color);
        }
        .score_info {
            display: flex;
            flex-direction: column;
            small {
                font-size: var(--text_size_sm);
                color: var(--text_color_50);
            }
            strong {
                font-weight: 500;
                font-size: var(--text_size_l);
                margin-top: 4px;
                color: var(--text_color);
                b {
                    color: var(--text_color_70);
                    font-weight: 300;
                }
            }
        }
    }
}
</style>
