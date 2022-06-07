<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
});
</script>
<template>
    <div class="Input">
        <label v-if="props.label">{{ props.label }}</label>
        <div class="input_wrapper">
            <input
                v-if="props.type !== 'textarea'"
                :type="props.type"
                :placeholder="props.placeholder"
            />
            <textarea
                v-if="props.type === 'textarea'"
                :placeholder="props.placeholder"
            />
        </div>
    </div>
</template>

<style lang="scss">
.Input {
    width: 100%;
    label {
        display: block;
        font-size: var(--text_size_sm);
        color: var(--text_color);
        margin-bottom: 5px;
    }
    .input_wrapper {
        input,
        textarea {
            width: 100%;
            height: var(--input_height);
            border: 1px solid var(--border_color);
            border-radius: var(--radius);
            padding: 0 var(--padding_sm);
            box-sizing: border-box;
            font-size: var(--text_size);
            color: var(--text_color);
            background-color: var(--neutral_color);
            font-family: var(--font);
            &:focus {
                outline: none;
                border-color: var(--primary_color);
            }
            &::placeholder {
                color: var(--text_color_50);
            }
        }
        textarea {
            padding: var(--padding_sm);
            height: var(--textarea_height);
            line-height: var(--text_line_height);
            resize: none;
        }
    }
}
</style>
