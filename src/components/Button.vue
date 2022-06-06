<template>
    <button class="Button" @click="onClick()">
        <slot name="icon"></slot>
        <span>
            <slot />
        </span>
    </button>
</template>

<script>
export default {
    props: {
        to: {
            type: Object,
            required: false
        }
    },
    methods: {
        onClick() {
            if (this.to) {
                this.$router.push(this.to);
            }
        }
    }
};
</script>

<style lang="scss">
.Button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: var(--radius);
    background-color: var(--primary_color);
    height: var(--button_height);
    padding: 0 var(--padding);
    font-family: var(--font);
    font-size: var(--text_size);
    letter-spacing: 0.03rem;
    gap: 10px;
    position: relative;
    span {
        color: white;
        font-weight: 500;
        font-size: 14px;
        position: relative;
        margin-top: -2px;
    }
    svg {
        fill: white;
        width: var(--icon_size_sm);
        height: var(--icon_size_sm);
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        clip-path: circle(0px at 0 center);
        transition: clip-path ease 0.4s;
        opacity: 0.1;
        background-color: var(--text_color);
    }
    &:hover:before {
        clip-path: circle(200% at 0 0);
    }
}
</style>
