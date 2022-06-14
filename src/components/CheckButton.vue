<script setup>
import { ID, isBool } from '@/helpers/utils.js';
import IconCheck from '@/components/drawables/IconCheck.vue';

defineProps({
    label: {
        type: String,
        require: true
    },
    checked: {
        type: Boolean
    },
    name: {
        type: String,
        require: true
    },
    rounded: {
        type: Boolean,
        default: false
    }
});
const id = ID();
const emit = defineEmits(['update:checked']);

const handleInput = (value) => {
    if (isBool(value)) emit('update:checked', value === 'true');
    else emit('update:checked', value);
};
</script>

<template>
    <div class="CheckButton" :class="[{ rounded: rounded }]">
        <input
            type="checkbox"
            :id="id"
            :name="name"
            :checked="checked"
            :value="checked"
            @input="handleInput($event.target.checked)"
        />
        <label :for="id">
            <div class="square">
                <IconCheck></IconCheck>
            </div>
            <span v-if="label">{{ label }}</span>
        </label>
    </div>
</template>

<style lang="scss" scoped>
.CheckButton {
    font-family: var(--font);
    pointer-events: auto;
    input {
        display: none;
        &:checked + label {
            display: flex;
            align-items: center;
            .square {
                background-color: var(--primary_color);
                border: 1px solid var(--primary_color);
                opacity: 1;
                svg {
                    transform: scale(1);
                }
            }
        }
    }
    label {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--text_color);
        .square {
            border: 1px solid var(--border_color);
            border-radius: 4px;
            position: relative;
            min-width: 18px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                //display: none
                transition: transform ease 0.2s;
                transform: scale(0);
                fill: var(--neutral_color);
            }
        }
        span {
            margin-left: 10px;
            font-size: 16px;
        }
    }
    &.rounded {
        label .square {
            min-width: 20px;
            height: 20px;
            border-radius: 50%;
            svg {
                width: 14px;
                height: 14px;
            }
        }
    }
}
</style>
