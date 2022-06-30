<script setup>
import { inject } from '@vue/runtime-core';
import IconError from '@/components/drawables/IconError.vue';

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
        default: 'text',
        validator: (value) => {
            return (
                ['text', 'textarea', 'number', 'date', 'password'].indexOf(
                    value
                ) !== -1
            );
        }
    },
    modelValue: {
        type: [String, Number]
    },
    required: {
        type: Boolean,
        default: false
    },
    validation: {
        type: Boolean,
        default: true
    },
    errorMessage: {
        type: String
    }
});

const triggerForm = inject('triggerForm');

const emit = defineEmits(['update:modelValue']);

const handleInput = (value) => {
    emit('update:modelValue', value);
};
</script>
<template>
    <div class="Input">
        <label v-if="props.label"
            >{{ props.label }} <b v-if="required">*</b></label
        >
        <div
            class="input_wrapper"
            :class="{ error: !validation && triggerForm }"
        >
            <input
                v-if="props.type !== 'textarea'"
                :type="props.type"
                :placeholder="props.placeholder"
                :value="modelValue"
                @input="handleInput($event.target.value)"
            />
            <textarea
                v-if="props.type === 'textarea'"
                :placeholder="props.placeholder"
                :value="modelValue"
                @input="handleInput($event.target.value)"
            />
            <i v-if="!validation && triggerForm">
                <IconError />
            </i>
            <dd v-if="!validation && triggerForm && errorMessage">
                {{ errorMessage }}
            </dd>
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
        b {
            color: var(--error_color);
        }
    }
    .input_wrapper {
        position: relative;
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
            line-height: var(--title_line_height);
            resize: none;
        }
        dd {
            background-color: var(--error_color);
            border-radius: var(--radius);
            padding: 6px 8px;
            font-size: var(--text_size_sm);
            color: var(--neutral_color);
            width: fit-content;
            position: absolute;
            right: 0;
            top: calc(var(--input_height) + 4px);
            display: none;
        }
        textarea + dd {
            top: calc(var(--textarea_height) + 4px);
        }
        i {
            svg {
                position: absolute;
                right: 10px;
                top: 8px;
                fill: var(--error_color);
                width: var(--icon_size);
                height: var(--icon_size);
            }
            &:hover + dd {
                display: block;
            }
        }
        &.error {
            input,
            textarea {
                border: 1px solid var(--error_color);
            }
        }
    }
}
</style>
