<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Challenge from '@/components/Challenge.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-5/image_1.png'
import imageTwo from '@/assets/images/guide-5/image_2.png'
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageMiro from '@/assets/images/brands/miro.png';
import imageOw from '@/assets/images/brands/ow.png';
import TipCard from '@/components/TipCard.vue';
import Evaluation from '@/components/Evaluation.vue';
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';

const projectName = inject('projectName')
const questions = ref([
    {
        id: 1,
        question: '¿Por qué hacemos el Card Sorting?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Por que necesitamos descubrir cómo las personas entienden y categorizan la información.'},
            { id: 2, description: 'Por que queremos descubrir la experiencia del usuario a lo largo de una serie de interacciones.'},
            { id: 3, description: 'Por que queremos entender como agrupar los elementos de nuestra interfaz.'}
        ]
    },
    {
        id: 2,
        question: '¿Cuándo usariamos un Card Sorting de tipo cerrado?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Si deseamos priorizar y clasificar funciones.'},
            { id: 2, description: 'Si deseamos descubrir nuevas categorías para un mismo grupo de tarjetas.'},
            { id: 3, description: 'Si deseamos mejorar la categorizacion para las funcionalidades de nuestra interfaz.'}
        ]
    }
]);

const challenge5_tasks = [
    'Definir el perfil del usuario',
    'Crear tarjetas (cards) con el contenido',
    'Definir las categorías',
    'Aplicar el ejercicio con un usuario'
];
</script>
<template>
    <GuideTitle>
        Card Sorting
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
               Parte de hacer que un sitio sea fácil de usar es organizar la información para que los visitantes del sitio puedan encontrar lo que buscan sin mucho esfuerzo. Con demasiada frecuencia, el contenido se estructura en función de lo que tiene sentido para la empresa, no para los visitantes.
            </p>
            <p>
                Card Sorting (clasificación de tarjetas) es una técnica de investigación de UX para descubrir cómo las personas entienden y clasifican la información. Esta técnica se usa cuando un equipo quiere agrupar y etiquetar la información del sitio web de una manera que tenga sentido para el público objetivo. La clasificación de tarjetas crea una base para una arquitectura de información (IA) robusta, y una IA sólida permite la creación de un sistema de navegación que coincida con las expectativas de los usuarios.
            </p>
        </section>
        <Heading type="h1" >¿Cuándo usar el Card Sorting?</Heading>
        <section>
            <p>
                La clasificación de tarjetas es útil en dos casos:
            </p>
            <p>
                <ul>
                    <li>Cuando se quiere descubrir cómo las personas entienden y agrupan diferentes conceptos. Desea revelar el modelo mental del usuario, y esta comprensión lo ayudará a diseñar mejores productos para ellos.</li>
                    <li>Cuando desea mejorar el diseño existente o crear un nuevo diseño, su objetivo es comprender cómo los usuarios categorizan la información y hacer que la interfaz de usuario sea predecible para ellos.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Ventajas y Desventajas</Heading>
        <section>
            <Heading type="h2" >Ventajas</Heading>
            <p>
                <ul>
                    <li>Es simple y económico ejecutar sesiones de clasificación de tarjetas.</li>
                    <li>Rápido para realizar investigaciones y obtener resultados de los usuarios, especialmente si las sesiones se realizan de forma remota.</li>
                    <li>Proporciona una buena perspectiva sobre los usuarios y cómo esperarían que se organizara la información.</li>
                </ul>
            </p>
            <Heading type="h2" >Desventajas</Heading>
            <p>
                <ul>
                    <li>Los resultados pueden variar y es posible que no haya un patrón real en los datos.</li>
                    <li>El análisis de los resultados puede llevar mucho tiempo dependiendo de la complejidad de los datos.</li>
                    <li>La clasificación de tarjetas no tiene en cuenta las tareas y los objetivos de los usuarios, por lo que si la investigación se utiliza sin tener esto en cuenta, podría terminar con una estructura que el usuario no pueda utilizar para completar sus tareas en el sitio.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Tipos de Card Sorting</Heading>
        <section>
            <p>Hay tres técnicas de UX de Card Sorting entre las que puede elegir: abierta, cerrada e híbrida.</p>
            <Heading type="h2" >Abierta</Heading>
            <p>A cada participante se le entrega una pila de tarjetas que se completan previamente con temas y luego se les pide que agrupen esas tarjetas de la forma que deseen. Después de eso, el participante debe crear etiquetas para los grupos que eligió. Los participantes no tienen ninguna restricción para nombrar.</p>
            <p>Este tipo de clasificación es excelente cuando desea diseñar un nuevo sitio web o mejorar el existente. Al analizar los resultados de la clasificación de tarjetas, es fácil ver si la estructura del sitio web que tiene en este momento coincide con la forma en que las personas organizarían la misma información.</p>
            <Reference
                :image="imageOne"
                description="Open Card Sort. Fuente: interaction-design.org" />
            <p>Por ejemplo, al definir cards de la página de convocatorias debes tomar en cuenta lo siguiente:</p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <ul>
                        <li>Convocatoria para docentes</li>
                        <li>Convocatoria para administrativas</li>
                        <li>Convocatoria 007</li>
                    </ul>
                </TipCard>
                <TipCard type="do">
                     <ul>
                        <li>En proceso</li>
                        <li>Cronogramas</li>
                        <li>Bases</li>
                    </ul>
                </TipCard>
            </aside>
            <Heading type="h2" >Cerrada</Heading>
            <p>Los investigadores crean etiquetas para categorías y les piden a los participantes que clasifiquen las tarjetas en categorías predefinidas. Todo lo que los participantes deben hacer es relacionar el contenido con las categorías existentes. Este tipo de clasificación de tarjetas no revela cómo los usuarios conceptualizan los temas, pero lo ayuda a comprender qué tan bien una estructura de categoría existente admite el contenido.</p>
            <p>La clasificación de tarjetas cerradas funciona mejor para priorizar y clasificar funciones. Por ejemplo, puede aplicarlo para filtros de búsqueda en la aplicación de comercio electrónico. Los usuarios pueden distribuir todos los filtros de búsqueda que tiene en los grupos 'Obligatorio', 'Opcional' o 'Uso frecuente' a 'Nunca lo uso'.</p>
            <Reference
                :image="imageTwo"
                description="Closed Card Sort. Fuente: interaction-design.org" />
            <p>Por ejemplo, para categorizar el menú principal de una universidad deberias tomar en cuenta estos ejemplos:</p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <ul>
                        <li>Oficinas</li>
                        <li>La universidad</li>
                        <li>Campus Virtuales</li>
                    </ul>
                </TipCard>
                <TipCard type="do">
                     <ul>
                        <li>Areas administrativas</li>
                        <li>Acerca de nosotros</li>
                        <li>Aulas virtuales</li>
                    </ul>
                </TipCard>
            </aside>
            <Heading type="h2" >Híbrida</Heading>
            <p>Como sugiere el nombre, este tipo de clasificación de tarjetas donde los participantes clasifican las tarjetas en categorías predefinidas pero también pueden crear sus propias categorías.</p>
            <p>La clasificación de tarjeta híbrida funciona mejor cuando los investigadores desean generar ideas para agrupar información y saben que les faltan algunas categorías en su estructura de categorías actual. Pueden obtener información sobre las categorías que faltan, y esta información puede informar las decisiones de diseño.</p>
        </section>
        <Heading type="h1" >¿Que herramientas usar para hacer Card Sorting?</Heading>
        <section>
            <p>Para realizar una ordenación de tarjetas, necesita dos cosas: usuarios reales y tarjetas. </p>
            <p>Para las tarjetas, puede usar tarjetas físicas reales (pedazos de papel) o una de varias herramientas de software de clasificación de tarjetas en línea como Miro o Optimal Workshop si desea una herramienta mas automatizada. </p>
        </section>
        <Challenge time="15" :id="5" :tasks="challenge5_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #5 </Heading>
            </template>
            Realizar un Card Sorting cerrado de "{{projectName}}".
            <template v-slot:tools>
                <ResourceCard
                    title="Miro"
                    description="Analisis visual"
                    type="tool"
                    :src="imageMiro"
                />
                <ResourceCard
                    title="Plantilla"
                    description="Card Sorting"
                    type="download"
                    href="https://miro.com/es/plantillas/clasificacion-de-tarjetas/"
                />
            </template>
        </Challenge>
        <Heading type="h1" >Evaluación</Heading>
        <section>
            <p>Valida tu aprendizaje</p>
            <Evaluation :questions="questions" />
        </section>
    </GuideBody>
</template>

<style></style>
