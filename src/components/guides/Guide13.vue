<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-13/image_1.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageDoOne from '@/assets/images/guide-13/image_do_1.png'
import imageDontOne from '@/assets/images/guide-13/image_dont_1.png'
import imageDoTwo from '@/assets/images/guide-13/image_do_2.png'
import imageDontTwo from '@/assets/images/guide-13/image_dont_2.png'
import Challenge from '@/components/Challenge.vue';
import TipCard from '@/components/TipCard.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Cuándo debo escojer el enfoque mobile first?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Cuando necesito priorizar el contenido y las funcionanidades esenciales.'},
            { id: 2, description: 'Cuando hago diseño atómico, primero los elementos pequelos y luego los grandes.'},
            { id: 3, description: 'Cuando mis usuarios no tienen mucho conocimiento sobre usar interfaces.'}
        ]
    },
    {
        id: 2,
        question: '¿Cuándo debe escojer el enfoque desktop first?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Cuando nuestros usuarios son adultos y estan acostumbrados a las interfaces tradicionales.'},
            { id: 2, description: 'Cuando necesitamos utilizar un trabajo mejor estandarizado.'},
            { id: 3, description: 'Cuando necesitamos que nuestras interfaces tengan mucha funcionalidad y contenido.'}
        ]
    }
]);

const challenge13_tasks = [
    'Priorizar el contenido necesario',
    'Revisar consistencia de los texto',
    'Ubicar las acciones importante siempre visibles',
    'Validar cumplimiento de la funcionabilidad',
    'Diseñar mockup'
];
</script>

<template>
    <GuideTitle>
        Enfoques de diseño
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                La necesidad de que nuestras interfaces pueden verse bien y adaptarse a diferentes tipos de pantalla a generado diferentes enfoques de como debe ser el orden en el que diseñamos las interfaces, los principales enfoques son mobile first (primero móvil) y desktop first (primero escritorio).
            </p>
        </section>
        <Heading type="h1">Mobile First</Heading>
        <section>
            <p>
                El diseño móvil primero es una filosofía de diseño que tiene como objetivo crear mejores experiencias de usuario al comenzar el proceso de diseño con los dispositivos móviles en mente primero, a menudo dando prioridad a las pantallas más pequeñas. Esta estrategia de dar prioridad a los dispositivos móviles se deriva del concepto de avance progresivo , lo que significa que cuando un diseñador se sienta a hacer un prototipo o esbozar el diseño de un sitio web, comienza con cómo se verá en la pantalla de un dispositivo móvil y luego pasa a pantallas más grandes.
            </p>
            <Blockquote>
                Con un espacio tan limitado en una pequeña pantalla móvil, los diseñadores de UX deben priorizar los aspectos más importantes de su producto.
            </Blockquote>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontOne">
                    </template>
                    Opciones de dificil acceso y contenido extra que no aportan valor.
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoOne">
                    </template>
                    Opciones accesibles y solo contenido necesario acerca de la sección.
                </TipCard>
            </aside>
            <Heading type="h2">¿Por qué vista móvil primero?</Heading>
            <p>
                El uso de Internet móvil ha superado el uso de Internet de escritorio. Si el 72,5% de las personas accederá a Internet únicamente con sus teléfonos en 2025, esto demuestra la importancia de tener una experiencia de usuario móvil óptima. Además, es más probable que los consumidores compren y regresen a las empresas que tienen un sitio compatible con dispositivos móviles.
            </p>
            <Reference
                :image="imageOne"
                description="Gráfico que muestra el aumento en la cantidad de usuarios de teléfonos inteligentes en todo el mundo entre 2016 y 2021. Fuente: statista.com"
            />
            <p>
                Otro beneficio de centrarse en el diseño móvil primero se deriva del algoritmo de Google que favorece los sitios web optimizados para dispositivos móviles.
            </p>
            <Heading type="h2">5 principios de Mobile First</Heading>
            <p>
                Al diseñar primero para dispositivos móviles, es importante tener en cuenta estos principios de diseño:
            </p>
            <p>
                <ol>
                    <li bold>
                        <strong>Los usuarios están a la vanguardia del diseño</strong>
                        <br>
                        Su diseño debe ayudar a los usuarios a resolver un problema o completar una tarea de manera rápida y eficaz.
                    </li>
                    <li bold>
                        <strong>Jerarquía visual del contenido</strong>
                        <br>
                        Su contenido debe ser conciso y directo. Es importante centrarse en ofrecer solo lo que el usuario está buscando y eliminar los elemntos que puedan distraerlo.
                    </li>
                    <li bold>
                        <strong>Manténgalo simple</strong>
                        <br>
                        Un diseño móvil simple es una excelente manera de mejorar la claridad del contenido mientras ayuda a los usuarios a concentrarse en el contenido que más importa. Algunos métodos para mantenerlo simple incluyen:
                        <ul>
                            <li>
                                Reducir la cantidad de enlaces en su menú de navegación.
                            </li>
                            <li>
                                Usando la menor cantidad de páginas posible.
                            </li>
                            <li>
                                Dos columnas de contenido como máximo.
                            </li>
                            <li>
                                Utilice una tipografía que no sea demasiado pequeña para dispositivos móviles.
                            </li>
                            <li>
                                Mantenga sus bordes anchos y líneas limpias.
                            </li>
                            <li>
                                Utilice espacios en blanco para que el diseño sea menos desordenado y más legible.
                            </li>
                        </ul>
                    </li>
                    <li bold>
                        <strong>CTA audaces y consistentes</strong>
                        <br>
                        Tener un CTA(botones que llaman a acciones importantes) brillante, audaz y consistente ayuda a garantizar que los usuarios puedan ubicarlos con facilidad.
                    </li>
                    <li bold>
                        <strong>Considere la velocidad de carga de su sitio</strong>
                        <br>
                        Si los usuarios experimentan un bajo rendimiento del sitio web, es menos probable que el 79% de los compradores vuelvan a comprar en ese sitio web. Por lo tanto, la velocidad de su sitio móvil, incluida su pantalla de inicio, es extremadamente importante.
                    </li>
                </ol>
            </p>
        </section>
        <Heading type="h1">Desktop First</Heading>
        <section>
            <p>
                El desktop first (escritorio primero), es como se realizaron los primeros sitios web responsive, en donde primero se desarrolla la versión de escritorio, y luego, ésta se adapta para mostrar el sitio web correctamente en pantallas más pequeñas.
            </p>
            <p>
                Este flujo de trabajo es bastante diferente, pero comenzar desde el escritorio puede ser mejor para los diseñadores web que crean diseños ricos en funciones.
            </p>
            <Heading type="h2">¿Por qué vista de escritorio primero?</Heading>
            <p>
                Técnicamente, "primero el escritorio" era la forma tradicional en que todos creaban sitios web hasta la era receptiva.
            </p>
            <p>
                A menudo se prefiere comenzar con el diseño del escritorio cuando la experiencia en móvil es simple y necesitamos que la experiencia principal del usuario sea detallada, dinámica y contenga mucha funcionalidad.
            </p>
            <p>
                Estos son algunos de los beneficios de las ideologías de Desktop First:
            </p>
            <p>
                <ul>
                    <li>
                        Puedes ver todas las funciones principales a la vez.
                    </li>
                    <li>
                        Le permite imaginar todas las posibilidades más grandes para su diseño primero.
                    </li>
                    <li>
                        Es la mejor estrategia si su audiencia usa principalmente computadoras de escritorio/portátiles
                    </li>
                </ul>
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontTwo">
                    </template>
                    La pagina web no es responsiva por miedo a que no se entienda.
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoTwo">
                    </template>
                    Pagina responsiva sin perder funcionalidad.
                </TipCard>
            </aside>
        </section>
        <Heading type="h1">¿Cuál es el mejor enfoque?</Heading>
        <section>
            <p>
                Realmente no hay un mejor o un peor enfoque, el mobile first y el desktop first son igual de funcionales, por lo que dejaría la elección de una o la otra forma de trabajar a tu propia audiencia.
            </p>
            <p>
                Trabajar con mobile first, significa que el sitio web está originalmente optimizado para los dispositivos móviles y que la versión de escritorio es solo una adaptación de la versión móvil y lo mismo se aplica, aunque a la inversa, cuando pensamos en desktop first. Por eso, creo que lo mejor para decidir es considerar desde qué dispositivos tu sitio es visto.
            </p>
            <p>
                Revisa tus analytics y descubre cuáles son las circunstancias en las cuales la gente ve tu sitio, y si aún no tienes analytics, puedes ponerte en los pies de tus usuarios y tratar de proyectar en qué condiciones la gente llegará.
            </p>
        </section>
        <Challenge time="1" :id="13" :tasks="challenge13_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #13 </Heading>
            </template>
            Crea un Mockup rediseñando la pagina principal de la UNHEVAL con la técnica Mobile First.
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageFigma"
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
