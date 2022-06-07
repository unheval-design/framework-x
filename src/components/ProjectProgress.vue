<template>
    <div class="ProjectProgress" :class="`stage_${stage}`">
        <span></span>
        <p>Etapa {{ stage }} / 4</p>
    </div>
</template>

<script>
export default {
    props: {
        stage: {
            type: Number,
            required: true
        }
    }
};
</script>

<style lang="scss">
.ProjectProgress {
    display: flex;
    align-items: center;
    width: 100%;
    gap: var(--gap);
    span {
        border-radius: var(--radius);
        background-color: var(--neutral_color_90);
        width: 100%;
        height: 4px;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 100%;
            /* background-color: var(--primary_color); */
            border-radius: var(--radius);
        }
    }
    p {
        font-weight: 500;
        color: var(--text_color_50);
        font-size: var(--text_size_sm);
        white-space: nowrap;
    }
    &.stage_1 span {
        &:before {
            background-color: var(--text_color);
            width: 25%;
        }
    }
    &.stage_2 span {
        background-color: var(--accent_color_20);
        &:before {
            background-color: var(--accent_color);
            width: 50%;
        }
    }
    &.stage_3 span {
        background-color: var(--success_color_20);
        &:before {
            background-color: var(--success_color);
            width: 75%;
        }
    }
    &.stage_4 span {
        &:before {
            background-color: var(--primary_color);
            width: 100%;
        }
    }
}
</style>
