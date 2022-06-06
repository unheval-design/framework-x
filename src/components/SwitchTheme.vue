<script setup>
import { useColorMode } from '@vueuse/core';
import IconSun from '@/components/drawable/IconSun.vue';
import IconSystem from '@/components/drawable/IconSystem.vue';
import IconMoon from '@/components/drawable/IconMoon.vue';
import Dropdown from '@/components/Dropdown.vue';
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';

const mode = useColorMode();
const modeSelected = ref(mode.value);
const flagThemeMenu = ref(false);

onMounted(() => {
    modeSelected.value = mode.value;
});

const changeTheme = ({ theme }) => {
    modeSelected.value = theme;
    if (theme === 'auto') modeSelected.value = 'system';
    mode.value = theme;
};

const showThemeMenu = () => {
    flagThemeMenu.value = true;
};

const hideThemeMenu = () => {
    flagThemeMenu.value = false;
};
</script>

<template>
    <div class="SwitchTheme">
        <IconSun @click="showThemeMenu()" v-if="mode == 'light'" />
        <IconMoon @click="showThemeMenu()" v-if="mode == 'dark'" />
        <Dropdown :show="flagThemeMenu" @close="hideThemeMenu">
            <ul>
                <li
                    :class="{ active: modeSelected == 'light' }"
                    @click="changeTheme({ theme: 'light' })"
                >
                    <IconSun />
                    Claro
                </li>
                <li
                    :class="{ active: modeSelected == 'dark' }"
                    @click="changeTheme({ theme: 'dark' })"
                >
                    <IconMoon />
                    Oscuro
                </li>
                <li
                    :class="{ active: modeSelected == 'system' }"
                    @click="changeTheme({ theme: 'auto' })"
                >
                    <IconSystem />
                    Sistema
                </li>
            </ul>
        </Dropdown>
    </div>
</template>

<style scoped lang="scss">
.SwitchTheme {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    svg {
        width: var(--icon_size);
        height: var(--icon_size);
        fill: var(--text_color);
    }
    .Dropdown {
        top: calc(var(--navbar_height) + 10px);
        ul {
            li {
                height: 100%;
                display: flex;
                align-items: center;
                font-size: var(--text_size);
                gap: var(--gap_sm);
                height: var(--list_option_height);
                padding: 0 var(--padding_sm);
                color: var(--text_color);
                cursor: pointer;
                svg {
                    width: var(--icon_size_sm);
                    height: var(--icon_size_sm);
                    fill: var(--text_color);
                    opacity: 0.5;
                }
                &:hover {
                    background-color: var(--hover_color);
                }
                &.active {
                    color: var(--primary_color);
                    svg {
                        fill: var(--primary_color);
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>
