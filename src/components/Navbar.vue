<template>
    <nav>
        <router-link to="/">
            <Logo small theme />
        </router-link>
        <ul class="nav_options">
            <li>
                <SwitchTheme />
            </li>
            <li>
                <IconNotes />
            </li>
        </ul>
    </nav>
</template>

<script>
import IconNotes from './drawable/IconNotes.vue';
import Logo from './drawable/Logo.vue';
import SwitchTheme from './SwitchTheme.vue';
export default {
    components: { Logo, SwitchTheme, IconNotes }
};
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 var(--padding);
    height: var(--navbar_height);
    border-bottom: 1px solid var(--border_color_70);
    background-color: var(--neutral_color);
    position: sticky;
    top: 0;
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
            & > svg {
                fill: var(--text_color);
                width: var(--icon_size);
                height: var(--icon_size);
            }
        }
    }
}
</style>
