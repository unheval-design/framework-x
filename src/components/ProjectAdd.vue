<script setup>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';
import { ID } from '@/helpers/utils.js';
import { useProjectsStore } from '@/stores/projects.js';
import { ref } from '@vue/reactivity';
import dayjs from 'dayjs';

const router = useRouter();
const projects = useProjectsStore();
const title = ref('');
const description = ref('');

const goToStages = () => {
    projects.add({
        id: ID(),
        title: title.value,
        description: description.value,
        date: dayjs().format('YYYY-MM-DD'),
        step: 0,
        completed: false
    });
    router.push({ name: 'Stages' });
};
</script>

<template>
    <div class="ProjectAdd">
        <div class="project_add_form">
            <Input
                label="Titulo"
                placeholder="Ej: Pagina web de eventos"
                v-model="title"
            />
            <Input
                label="Descripción"
                type="textarea"
                placeholder="Ej: Nueva web donde publicar eventos"
                v-model="description"
            />
        </div>
        <Button @click="goToStages()">Crear Proyecto</Button>
    </div>
</template>

<style lang="scss">
.ProjectAdd {
    display: grid;
    grid-gap: var(--padding_xl);
    .project_add_form {
        display: grid;
        grid-gap: var(--gap);
    }
    .Button {
        width: fit-content;
        margin-left: auto;
    }
}
</style>
