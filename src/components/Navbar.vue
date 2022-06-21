<script setup>
import IconNotes from './drawables/IconNotes.vue';
import Logo from './drawables/Logo.vue';
import SwitchTheme from './SwitchTheme.vue';
import ModalSlide from '@/components/ModalSlide.vue';
import Notes from '@/components/Notes.vue';
import BadgeIcon from '@/components/BadgeIcon.vue';
import { useNotesStore } from '@/stores/notes.js';
import { ref } from '@vue/reactivity';

const flagNotesModal = ref(false);
const notes = useNotesStore();

const openNotesModal = () => {
    flagNotesModal.value = true;
};

const closeNotesModal = () => {
    flagNotesModal.value = false;
};
</script>

<template>
    <Teleport to="body">
        <ModalSlide :show="flagNotesModal" @close="closeNotesModal">
            <Notes @close="closeNotesModal" />
        </ModalSlide>
    </Teleport>
    <nav>
        <router-link :to="{ name: 'Projects' }">
            <Logo small theme />
        </router-link>
        <ul class="nav_options">
            <slot name="options" />
            <li>
                <BadgeIcon :show="notes.noteAdded">
                    <IconNotes @click="openNotesModal()" />
                </BadgeIcon>
            </li>
            <li>
                <SwitchTheme />
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '@/assets/css/breakpoints';

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--padding);
    height: var(--navbar_height);
    border-bottom: 1px solid var(--border_color_70);
    background-color: var(--neutral_color);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 11;
    .nav_options {
        height: 100%;
        gap: var(--gap);
        display: flex;
        align-items: center;
        li {
            height: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;
            & > svg,
            & > .BadgeIcon > svg {
                fill: var(--text_color);
                width: var(--icon_size);
                height: var(--icon_size);
            }
        }
    }
}

@include screen('sm') {
    nav {
        .Logo.small {
            width: 140px;
        }
    }
}
</style>
