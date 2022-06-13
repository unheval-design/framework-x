<template>
    <picture class="Reference">
        <img :src="image" alt="image_reference" />
        <caption>
            {{
                description
            }}
        </caption>
    </picture>
</template>

<script>
export default {
    props: {
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss">
.Reference {
    padding: var(--padding);
    box-sizing: border-box;
    border: 1px solid var(--border_color_70);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    gap: var(--gap_sm);
    img {
        border-radius: var(--radius);
    }
    caption {
        width: 100%;
        text-align: left;
        font-style: italic;
        font-size: var(--text_size);
        color: var(--text_color_70);
    }
}
</style>
