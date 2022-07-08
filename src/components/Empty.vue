<script setup>
defineProps({
    full: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <Transition name="fade">
        <div class="Empty" :class="{ full: full }">
            <div class="icon_wrapper">
                <span></span>
                <i><slot name="icon" /></i>
                <span></span>
            </div>
            <b><slot name="title" /></b>
            <small><slot name="description" /></small>
            <slot name="button" />
        </div>
    </Transition>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

.Empty {
    width: 100%;
    height: calc(100% - var(--navbar_height));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: var(--padding);
    box-sizing: border-box;
    .icon_wrapper {
        position: relative;
        i {
            position: relative;
            background-color: var(--primary_color_10);
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius);
            z-index: 2;
            svg {
                width: var(--icon_size_l);
                height: var(--icon_size_l);
                fill: var(--text_color);
            }
        }
        span {
            width: 36px;
            height: 36px;
            background-color: var(--accent_color_10);
            position: absolute;
            left: -18px;
            top: -18px;
            border-radius: var(--radius);
            &:last-of-type {
                background-color: var(--success_color_10);
                left: inherit;
                top: inherit;
                right: -18px;
                bottom: -18px;
            }
            z-index: 1;
        }
    }
    b {
        margin-top: var(--padding_xl);
        font-weight: 600;
        text-align: center;
        color: var(--text_color);
        font-size: var(--text_size_l);
    }
    small {
        font-size: var(--text_size_sm);
        color: var(--text_color_70);
        max-width: 240px;
        width: 100%;
        text-align: center;
        line-height: var(--title_line_height);
        margin-top: 8px;
        strong {
            font-weight: 500;
            background-color: var(--primary_color_10);
        }
    }
    .Button {
        margin-top: var(--padding);
    }
    &.full {
        small {
            max-width: 320px;
        }
    }
}

@include screen('md') {
    .Empty {
        .icon_wrapper {
            i {
                width: 56px;
                height: 56px;
            }
            span {
                width: 28px;
                height: 28px;
                left: -14px;
                top: -14px;
                &:last-of-type {
                    right: -14px;
                    bottom: -14px;
                }
            }
        }
    }
}
</style>
