<template>
    <div
        class="RadioButton"
        :class="[size, { success: success }, { error: error }]"
    >
        <input
            type="radio"
            :id="id"
            :name="name"
            :checked="value === val"
            :value="val"
            @input="handleInput($event.target.value)"
        />
        <label :for="id">
            <div class="circle"></div>
            <span>{{ label }}</span>
        </label>
    </div>
</template>

<script setup>
import { ID } from '@/helpers/utils.js';
// model: {
//     event: 'change'
// },
const props = defineProps({
    label: {
        type: String,
        require: true
    },
    value: {
        type: [String, Number, Boolean]
    },
    val: {
        type: [String, Number, Boolean]
    },
    name: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    success: {
        type: Boolean,
        default: false
    },
    error: {
        type: Boolean,
        default: false
    }
});
const id = ID();
const emit = defineEmits(['update:model']);
const handleInput = (value) => {
    emit('update:model', value);
};
</script>

<style lang="scss">
.RadioButton {
    font-family: var(--font);
    pointer-events: auto;
    input {
        display: none;
        &:checked + label {
            display: flex;
            align-items: center;
            .circle {
                opacity: 1;
                background-color: var(--primary_color);
                border: 1px solid var(--primary_color);
                &:before {
                    transform: scale(0.5);
                }
            }
        }
    }
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--text_color);
        font-size: var(--text_size_l);
        line-height: var(--title_line_height);
        .circle {
            border: 1px solid var(--border_color);
            border-radius: 50%;
            margin-right: 10px;
            position: relative;
            min-width: 18px;
            height: 18px;
            &:before {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                width: 100%;
                height: 100%;
                background-color: var(--neutral_color);
                border-radius: 50%;
                transform: scale(0);
                transition: transform ease 0.2s;
            }
        }
    }
    &.success {
        input {
            &:checked + label {
                .circle {
                    background-color: var(--success_color);
                    border: 1px solid var(--success_color);
                }
            }
        }
    }
    &.error {
        input {
            &:checked + label {
                .circle {
                    background-color: var(--error_color);
                    border: 1px solid var(--error_color);
                }
            }
        }
    }
}
</style>
