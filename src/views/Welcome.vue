<script setup>
import Button from '@/components/Button.vue';
import IconDesign from '@/components/drawables/IconDesign.vue';
import IconGuide from '@/components/drawables/IconGuide.vue';
import IconLaunch from '@/components/drawables/IconLaunch.vue';
import IconMap from '@/components/drawables/IconMap.vue';
import IconTest from '@/components/drawables/IconTest.vue';
import Logo from '@/components/drawables/Logo.vue';
</script>

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
            <Button :to="{ name: 'Projects' }">
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
                        <i>
                            <IconDesign />
                        </i>
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
                        <i>
                            <IconMap />
                        </i>
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
                        <i>
                            <IconLaunch />
                        </i>
                        <p>Implementación</p>
                    </div>
                </article>
                <article class="stage">
                    <div class="stage_wrapper">
                        <i>
                            <IconTest />
                        </i>
                        <p>Pruebas</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.Welcome {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    background-color: var(--neutral_color);
    .bg_noise {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        background-image: url(@/assets/noise_pattern.png);
        background-repeat: repeat;
        opacity: 0.9;
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
            width: 50vh;
            height: 50vh;
            border-radius: 50%;
            filter: blur(25vh);
            margin-top: 30rem;
            &:nth-child(1) {
                background-color: var(--primary_color);
                animation: floating 5s ease-in-out infinite;
            }
            &:nth-child(2) {
                background-color: #d1a942;
                animation: floating 6s ease-in-out infinite;
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
            margin: {
                top: 1.5rem;
                bottom: 2.5rem;
            }
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
                border: 1px solid white;
                box-sizing: border-box;
                box-shadow: var(--shadow_deep);
                background-color: var(--surface_color_alpha);
                backdrop-filter: blur(1rem);
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
                        gap: var(--gap_sm);
                        /* background-color: white; */
                        width: 100%;
                        height: 100%;
                        i {
                            backdrop-filter: blur(1px);
                            background-color: rgba(white, 0.5);
                            border: 1px solid white;
                            border-radius: 50%;
                            width: 56px;
                            height: 56px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            svg {
                                width: 20px;
                                height: 20px;
                                fill: var(--text_color_70);
                            }
                        }
                        p {
                            font-size: var(--text_size_sm);
                            font-weight: 500;
                            color: white;
                            display: none;
                        }
                    }
                }
            }
        }
    }
}

.dark {
    .Welcome {
        .bg_noise {
            opacity: 0.5;
            filter: invert(1);
        }
        .welcome_wrapper {
            .welcome_grid {
                article {
                    border: 1px solid rgba(white, 0.2);
                    &.stage {
                        .stage_wrapper {
                            i {
                                background-color: rgba(white, 0.15);
                                border: 1px solid rgba(white, 0.3);
                                svg {
                                    fill: var(--text_color);
                                }
                            }
                            p {
                                color: rgba(white, 0.7);
                            }
                        }
                    }
                }
            }
        }
    }
}

@keyframes floating {
    0% {
        transform: translate(0px);
    }
    25% {
        transform: translate(15vh, -5vh);
    }
    50% {
        transform: translate(0px);
    }
    75% {
        transform: translate(-15vh, 5vh);
    }
    100% {
        transform: translate(0px);
    }
}
</style>
