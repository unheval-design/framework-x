<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-16/image_1.png';
import imageTwo from '@/assets/images/guide-16/image_2.gif';
import imageThree from '@/assets/images/guide-16/image_3.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageFramer from '@/assets/images/brands/framer.png';
import imageCode from '@/assets/images/brands/code.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Para qué hacemos el prototipado?',
        alternatives: [
            { answer: true, description: 'Para saber la estructura y posición de los elementos en la vista.' },
            { answer: false, description: 'Para ver como interactuan las diferentes vistas y elementos en conjunto.' },
            { answer: false, description: 'Para mostrar el diseño con contenido real sobre el producto.' }
        ]
    },
    {
        id: 2,
        question: '¿En qué se diferencia el prototipo del mockup?',
        alternatives: [
            { answer: true, description: 'El prototipo tiene interacciones y animaciones mientras que el mockup no.' },
            { answer: false, description: 'El prototipo representa visualmente al producto, mientas que el mockup solo muestra como es la estructura de dicho producto.' },
            { answer: false, description: 'El prototipo es la implementación inicial de un producto mientras que el mockup es el diseño mas fiel del producto.' }
        ]
    }
]);

const challenge16_tasks = [
    'Crear prototipo en papel',
    'Crear prototipo en digital',
    'Crear prototipo en en HTML y Javascript'
];
</script>

<template>
    <GuideTitle>
        Prototipo
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Un prototipo suele ser una representación de alta fidelidad del producto final que pretende simular la interacción del usuario. A diferencia de diseños anteriores (wireframes y mockups), se puede hacer clic en un prototipo y, por lo tanto, permite que el usuario experimente el contenido y las interacciones en la interfaz. De hecho, un prototipo es muy parecido al producto final en sí.
            </p>
            <!-- <Reference
                :image="imageOne"
                description="Prototipo para Core Dashboard. Author: Anton Tkachev."
            /> -->
        </section>
        <Heading type="h1">Metodologías de creación de prototipos</Heading>
        <section>
            <p>
                Vamos a explorar prototipos en tres tipos de prototipos: papel, digital y HTML.
            </p>
            <Heading type="h2">Prototipos de papel</Heading>
            <p>
                La creación de prototipos en papel funciona mejor durante las primeras etapas de diseño, donde los equipos de UX colaboran para explorar muchos conceptos rápidamente. Los miembros del equipo esbozan ideas a mano usando líneas, formas y texto simples. El énfasis está en muchas ideas y velocidad, no en la estética.
            </p>
            <Reference
                :image="imageOne"
                description="Power Paper Prototyping. Author: Sharon Rajkumar."
            />
            <Heading type="h2">Prototipos digitales</Heading>
            <p>
                La creación de prototipos digitales es una parte emocionante del proceso de diseño. Los prototipos comienzan a parecerse al producto final, lo que permite a los equipos probar y validar ideas.
            </p>
            <Reference
                :image="imageTwo"
                description="An Introduction to Digital Prototyping. Fuente: protopie.io"
            />
            <Heading type="h2">Prototipos de HTML y JavaScript</Heading>
            <p>
                En raras ocasiones, los equipos pueden crear prototipos de HTML y JavaScript para obtener resultados más precisos. La desventaja de este enfoque es que la codificación implica un tiempo y costos técnicos considerables.
            </p>
            <Reference
                :image="imageThree"
                description="Design in the Browser Prototyping. Fuente: ssagov.github.io"
            />
        </section>
        <Heading type="h1">Ventajas del prototipado</Heading>
        <section>
            <p>
                Uno de los mayores beneficios de los prototipos es, sin duda, la posibilidad de detectar de forma temprana los posibles problemas de diseño y fabricación. Además, prototipar también nos puede ayudar a estimar las necesidades y los materiales que necesitaremos en un futuro, así como el tiempo de fabricación y el personal. 
            </p>
            <p>
                Prototipar es perfecto si lo que quieres es:
            </p>
            <p>
                <ul>
                    <li>El descubrimiento temprano de los problemas de diseño.</li>
                    <li>Estimación de los costes de producción, el tiempo de fabricación y los requisitos de los materiales.</li>
                    <li>Seleccionar la maquinaria necesaria para la producción.</li>
                    <li>Pruebas para determinar el ajuste y la durabilidad.</li>
                    <li>Recibir un feedback de los clientes y usuarios finales.</li>
                    <li>Identificar las mejoras.</li>
                    <li>Establecer la función y el diseño final.</li>
                    <li>Captación de fondos e inversores.</li>
                </ul>
            </p>
        </section>
        <Challenge time="1" :id="16" :tasks="challenge16_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #16 </Heading>
            </template>
            Crea un prototipo del login del intranet de alumnos de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageFigma"
                />
                <ResourceCard
                    title="Framer"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageFramer"
                />
                <ResourceCard
                    title="VS Code"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageCode"
                />
                <ResourceCard
                    title="Ejemplos"
                    description="Herramienta para organizar ideas"
                    type="download"
                />
            </template>
        </Challenge>
        <Heading type="h1">Evaluación</Heading>
        <section>
            <p>Valida tu aprendizaje</p>
            <Evaluation :questions="questions" />
        </section>
    </GuideBody>
</template>

<style></style>
