<script setup>
import Navbar from '@/components/Navbar.vue';
import StageCard from '@/components/StageCard.vue';
</script>
<template>
    <Navbar />
    <div class="stages_container">
        <div class="stages_wrapper">
            <div class="stages_title">
                <h1>Selecciona una Etapa</h1>
                <p>
                    Utilizamos una metodologia flexible, puedes empezar desde el
                    principio o desde una etapa <br />
                    especifica si ya tienes algun avance de tu interfaz.
                </p>
            </div>
            <section class="stages_grid">
                <StageCard :stage="1" />
                <StageCard :stage="2" />
                <StageCard :stage="3" />
                <StageCard :stage="4" />
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.stages_container {
    margin-top: 8rem;
    .stages_wrapper {
        padding: var(--padding);
        width: var(--container_width);
        margin: 0 auto;
        .stages_title {
            h1 {
                font-size: var(--title_size);
                font-weight: 600;
                color: var(--text_color);
            }
            p {
                margin-top: 10px;
                font-size: var(--text_size_sm);
                color: var(--text_color_50);
                line-height: var(--text_line_height);
            }
        }
        .stages_grid {
            margin-top: var(--padding_xl);
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            grid-gap: var(--gap);
        }
    }
}
</style>
