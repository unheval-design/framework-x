<script setup></script>

<template>
    <div class="Empty">
        <i>
            <slot name="icon" />
        </i>
        <b><slot name="title" /></b>
        <small><slot name="description" /></small>
        <slot name="button" />
    </div>
</template>

<style lang="scss">
.Empty {
    width: 100%;
    height: calc(100% - var(--navbar_height));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: var(--padding);
    box-sizing: border-box;
    i {
        background-color: var(--primary_color_10);
        width: 64px;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius);
        svg {
            width: var(--icon_size);
            height: var(--icon_size);
            fill: var(--text_color);
        }
    }
    b {
        margin-top: var(--gap);
        font-weight: 500;
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
    }
    .Button {
        margin-top: var(--gap);
    }
}
</style>
