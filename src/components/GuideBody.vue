<template>
    <article class="GuideBody">
        <slot />
    </article>
</template>

<script>
export default {};
</script>

<style lang="scss">
.GuideBody {
    display: flex;
    flex-direction: column;
    margin-top: var(--gap);
    color: var(--text_color);
    section {
        display: flex;
        flex-direction: column;
        gap: var(--gap_sm);
    }
    h1 {
        font-size: var(--text_size_xl);
        font-weight: 600;
        margin-top: var(--gap);
        margin-bottom: var(--gap_sm);
        &:nth-of-type(1) {
            margin-top: 0;
        }
    }
    h2 {
        font-size: var(--text_size_l);
        font-weight: 600;
    }
    p {
        font-size: var(--text_size_l);
        line-height: var(--text_line_height);
        opacity: 0.9;
    }
    ul {
        li {
            list-style-type: disc;
            list-style-position: inside;
            text-indent: -22px;
            margin-left: 20px;
        }
    }
    ol {
        li {
            list-style-type: decimal;
            list-style-position: inside;
            text-indent: -22px;
            margin-left: 20px;
        }
    }
    ul,
    ol {
        padding-left: 2px;
    }
    .tips_grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: var(--gap);
    }
}
</style>
