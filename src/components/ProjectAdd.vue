<script setup>
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
</script>

<template>
    <div class="ProjectAdd">
        <div class="project_add_form">
            <Input label="Titulo" placeholder="Ej: Pagina web de eventos" />
            <Input
                label="Descripción"
                type="textarea"
                placeholder="Ej: Nueva web donde publicar eventos y que se puedan inscribir en linea."
            />
        </div>
        <Button>Crear Proyecto</Button>
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
