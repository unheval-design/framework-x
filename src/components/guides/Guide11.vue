<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-11/image_1.png';
import imageMiro from '@/assets/images/brands/miro.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Para qué hacemos una lluvia de ideas?',
        alternatives: [
            { answer: true, description: 'Generar mayor participación de nuestro equipo de trabajo.' },
            { answer: false, description: 'Conocer diferentes formas de pensamiento de nuestro equipo.' },
            { answer: false, description: 'Generar ideas innovadoras que resuelvan problemas.' }
        ]
    },
    {
        id: 2,
        question: '¿En qué técnica partimos por definir malas ideas?',
        alternatives: [
            { answer: true, description: 'Mapa Mental.' },
            { answer: false, description: 'Lluvia de ideas inverso.' },
            { answer: false, description: 'En ninguna de las técnicas.' }
        ]
    }
]);

const challenge11_tasks = [
    'Definir el problema a los integrantes',
    'Escribir el problema y dibujar ramas a partir del problema',
    'Por turnos, aportar ideas para solucionar el problema',
    'Anotar una idea por rama, se pueden añadir aportaciones sobre las ideas para mejorarlas',
    'Reflexionar y valorar cada idea para intentar llegar a un consenso sobre las soluciones más adecuadas'
];
</script>

<template>
    <GuideTitle>
        Lluvia de Ideas (Brainstorming)
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                La lluvia de ideas es un método que utilizan los equipos de
                diseño para generar ideas para resolver problemas de diseño
                claramente definidos. En condiciones controladas y un entorno de
                pensamiento libre, los equipos abordan un problema por medios
                tales como preguntas de "¿Cómo podríamos?". Producen una amplia
                gama de ideas y establecen vínculos entre ellas para encontrar
                posibles soluciones.
            </p>
            <Blockquote>
                La lluvia de ideas alienta a las personas a generar pensamientos
                e ideas que, al principio, pueden parecer un poco locas. Algunas
                de estas ideas se pueden convertir en soluciones originales y
                creativas para un problema.
            </Blockquote>
        </section>
        <Heading type="h1">¿Cuándo hacer lluvia de ideas?</Heading>
        <section>
            <p>
                Por lo general lo usarás en la fase de Ideación. Es en ese
                momento cuando debes generar el mayor número de ideas posibles.
                Y, posteriormente, elegir aquellas que el grupo considere que
                son más adecuadas para dar respuesta y generar propuestas
                conceptuales de diseño.
            </p>
        </section>
        <Heading type="h1">Principales reglas al hacer lluvia de ideas</Heading>
        <section>
            <p>
                <strong>Suspender el juicio</strong>
            </p>
            <p>
                Durante el proceso de generación de ideas, no hay que realizar ninguna valoración o crítica sobre estas. Solo se apuntan las ideas, la evaluación se realiza después.
            </p>
            <p>
                <strong>Pensar libremente</strong>
            </p>
            <p>
                Las ideas más prácticas muchas veces nacen de otras ideas que, en su mayoría, son inviables. Por ello, es muy importante para una sesión de lluvia de ideas efectiva, que los usuarios piensen libremente y tengan ideas imposibles.
            </p>
            <p>
                <strong>La cantidad es importante</strong>
            </p>
            <p>
                Al hacer lluvia de ideas se busca generar una gran cantidad de ideas, para luego escoger la mejor de todas ellas.
            </p>
            <p>
                <strong>Efecto multiplicador</strong>
            </p>
            <p>
                Los participantes en las lluvias de ideas, no solo contribuyen con sus pensamientos, sino que también puede sugerir mejoras o combinar las ideas que tienen los demás. Así, las ideas que tienen unos usuarios sirven de estímulo para los otros participantes.
            </p>
        </section>
        <Heading type="h1">¿Cómo hacer una lluvia de ideas?</Heading>
        <section>
            <Heading type="h2">Paso 1: Formar un equipo de trabajo</Heading>
            <p>
                Como es una técnica grupal, es necesario formar un grupo de trabajo. La recomendación es que no sea superior a 10 personas. Los roles que pueden tener son las siguientes:
            </p>
            <p>
                <ul>
                    <li><strong>Moderador</strong>: Es la persona encargada de guiar la sesión, resuleve dudas, modera y dinamiza para que sea efectiva y cumpla el objetivo marcado.</li>
                    <li><strong>Secretario</strong>: Es la persona encargada de solventar cualquier problema o necesidad que pueda darse en la sesión. Además, es la persona que apunta todas las ideas que van surgiendo durante la sesión de Brainstorming. Según el número de participantes que haya en la sesión, el secretario, participa o no en la sesión.</li>
                    <li><strong>Participantes</strong>: Son todas aquellas personas que intervienen en el brainstorming para encontrar y proponer soluciones al problema propuesto.</li>
                </ul>
            </p>
            <Heading type="h2">Paso 2: Definir el lugar y tiempo para la sesión</Heading>
            <p>
                <strong>El lugar</strong>
            </p>
            <p>
                Antes de empezar con la lluvia de ideas es importante contar con un espacio adecuado para ello. Lo mejor es hacerlo en un ambiente relajado y no contaminado.
            </p>
            <p>
                <strong>El tiempo y el momento</strong>
            </p>
            <p>
                Es recomendable que la duración de la sesión no sea superior a 1 hora, aunque no hay un límite establecido y lo mejor es ser flexible.
            </p>
            <p>
                Tan importante como el tiempo es el momento. Hay personas que prefieren aprovechar los primeros momentos del día porque se encuentran más creativas, otras prefieren desconectar o romper la rutina con otras actividades.
            </p>
            <Heading type="h2">Paso 3: Definir el problema</Heading>
            <p>
                Antes de empezar, es fundamental aclarar cuál es el tema a tratar para evitar desviarse del camino y generar ideas orientadas a la resolución del problema. Se podría empezar formulando preguntas como estas:
            </p>
            <p>
                <ul>
                    <li>¿Cómo podríamos mejorar la calidad de…?</li>
                    <li>¿Cómo podríamos evitar que…?</li>
                    <li>¿Qué podríamos hacer para…?</li>
                </ul>
            </p>
            <Blockquote>Una técnica que podria usarse en este paso podria ser la Técnica de los 5 Whys. Consiste en preguntar 5 veces seguidas el por qué de un situación, acción o cosa con el fin de entender en profundidad la causa o motivación última del proceso.</Blockquote>
            <Heading type="h2">Paso 4: Desarrollo de la sesión de lluvia de ideas</Heading>
            <p>
                En una sesión de lluvia de ideas se trata de conseguir el mayor número posible de ideas, sin importar la calidad (al principio).
            </p>
            <p>
                También podrias usar una de las técnicas de brainstorming la que mejor se adapte al equipo y a los objetivos que se desean conseguir.
            </p>
            <Reference
                :image="imageOne"
                description="Una sesión de brainstorming. Fuente: interaction-design.org"
            />
            <Heading type="h2">Paso 5: Seleccionar las mejores ideas.</Heading>
            <p>
                Es el momento de votar por las ideas que mejor solucionen el problema. Lo mejor es empezar valorando las ideas de forma independiente para después seleccionar las mejor valoradas. Puedes utilizar una escala del 0 al 5 para valorar cada idea.
            </p>
            <p>
                Es recomendable terminar con las 2 o 3 ideas que mejor ayuden a solucionar el problema.
            </p>
            <Heading type="h2">Paso 6: Tomar decisiones.</Heading>
            <p>
                Llega el momento de la verdad y hay que decidir cuál es la solución que mejor se adapta a las necesidades que quieres cubrir.
            </p>
        </section>
        <Challenge time="1" :id="11" :tasks="challenge11_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #11 </Heading>
            </template>
            Elaborar una lluvia de ideas con la técnica de Mapa Mental para mejorar el login del
            intranet de alumnos de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Miro"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageMiro"
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
