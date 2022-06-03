<template>
    <div class="Welcome">
        <div class="bg_noise"></div>
        <div class="bg_blur">
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <div class="welcome_wrapper">
            <Logo />
            <p>Creación de interfaces con alto grado de usabilidad.</p>
            <Button>
                <template v-slot:icon>
                    <IconGuide />
                </template>
                Comenzar
            </Button>
            <div class="welcome_grid">
                <article class="example">
                    <img
                        src="@/assets/welcome_image_1.png"
                        alt="welcome_image"
                    />
                </article>
                <article class="stage">
                    <div class="stage_wrapper">
                        <IconDesign />
                        <p>Diseño</p>
                    </div>
                </article>
                <article class="example">
                    <img
                        src="@/assets/welcome_image_3.png"
                        alt="welcome_image"
                    />
                </article>
                <article class="stage">
                    <div class="stage_wrapper">
                        <IconMap />
                        <p>Análisis</p>
                    </div>
                </article>
                <article class="example">
                    <img
                        src="@/assets/welcome_image_2.png"
                        alt="welcome_image"
                    />
                </article>
                <article class="stage">
                    <div class="stage_wrapper">
                        <IconLaunch />
                        <p>Implementación</p>
                    </div>
                </article>
                <article class="stage">
                    <div class="stage_wrapper">
                        <IconTest />
                        <p>Pruebas</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../components/drawable/Button.vue';
import IconDesign from '../components/drawable/IconDesign.vue';
import IconGuide from '../components/drawable/IconGuide.vue';
import IconLaunch from '../components/drawable/IconLaunch.vue';
import IconMap from '../components/drawable/IconMap.vue';
import IconTest from '../components/drawable/IconTest.vue';
import Logo from '../components/drawable/Logo.vue';
export default {
    components: {
        Logo,
        Button,
        IconGuide,
        IconMap,
        IconDesign,
        IconLaunch,
        IconTest
    }
};
</script>

<style lang="scss">
.Welcome {
    position: relative;
    .bg_noise {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        background-image: url(@/assets/noise_pattern.png);
        background-repeat: repeat;
        opacity: 0.7;
    }
    .bg_blur {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        min-height: 100vh;
        z-index: 1;
        .circle {
            width: 30vw;
            height: 30vw;
            border-radius: 50%;
            filter: blur(12vw);
            margin-top: 30rem;
            &:nth-child(1) {
                width: 25vw;
                height: 25vw;
                background-color: var(--primary_color);
            }
            &:nth-child(2) {
                background-color: var(--accent_color);
            }
        }
    }
    .welcome_wrapper {
        position: relative;
        z-index: 3;
        padding-top: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .Logo {
            margin-left: -20px;
        }
        & > p {
            font-weight: 300;
            margin: 1.5rem 0;
            color: var(--text_color_70);
            font-size: var(--text_size_xl);
        }
        .welcome_grid {
            margin-top: 5rem;
            width: 720px;
            height: 400px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: var(--gap);
            article {
                border-radius: var(--radius);
                border: 1px solid var(--surface_color);
                box-sizing: border-box;
                box-shadow: var(--shadow_deep);
                background-color: var(--surface_color_alpha);
                &:nth-child(1) {
                    grid-row: 1 / span 2;
                }
                &:nth-child(3) {
                    grid-row: 1 / span 2;
                    grid-column: 3 / span 2;
                }
                &:nth-child(4) {
                    grid-column: 1;
                }
                &:nth-child(5) {
                    grid-row: 2 / span 2;
                }
                &.example {
                    padding: var(--padding_sm);
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: var(--radius);
                    }
                }
                &.stage {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--padding_sm);
                    .stage_wrapper {
                        border-radius: var(--radius);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        background-color: var(--surface_color);
                        width: 100%;
                        height: 100%;
                        svg {
                            width: 24px;
                            height: 24px;
                        }
                        p {
                            font-size: var(--text_size_sm);
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
}
</style>
