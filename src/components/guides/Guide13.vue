<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-13/image_1.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageXd from '@/assets/images/brands/xd.png';
import imagePs from '@/assets/images/brands/ps.png';
import imageAi from '@/assets/images/brands/ai.png';
import imageWix from '@/assets/images/brands/wix.png';
import imageWp from '@/assets/images/brands/wp.png';

const question1 = {
    question:
        '¿Cuándo debo escojer el enfoque mobile first?',
    answer: 1,
    alternatives: [
        'Cuando necesito priorizar el contenido y las funcionanidades esenciales.',
        'Cuando hago diseño atómico, primero los elementos pequelos y luego los grandes.',
        'Cuando mis usuarios no tienen mucho conocimiento sobre usar interfaces.'
    ]
};

const question2 = {
    question: '¿Cuándo debe escojer el enfoque desktop first?',
    answer: 3,
    alternatives: [
        'Cuando nuestros usuarios son adultos y estan acostumbrados a las interfaces tradicionales.',
        'Cuando necesitamos utilizar un trabajo mejor estandarizado.',
        'Cuando necesitamos que nuestras interfaces tengan mucha funcionalidad y contenido.'
    ]
};
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
                        su diseño debe ayudar a los usuarios a resolver un problema o completar una tarea de manera rápida y eficaz.
                    </li>
                    <li bold>
                        <strong>Jerarquía visual del contenido</strong>
                        <br>
                        su contenido debe ser conciso y directo. Es importante centrarse en ofrecer solo lo que el usuario está buscando y eliminar los elemntos que puedan distraerlo.
                    </li>
                    <li bold>
                        <strong>Manténgalo simple</strong>
                        <br>
                        un diseño móvil simple es una excelente manera de mejorar la claridad del contenido mientras ayuda a los usuarios a concentrarse en el contenido que más importa. Algunos métodos para mantenerlo simple incluyen:
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
                        tener un CTA(botones que llaman a acciones importantes) brillante, audaz y consistente ayuda a garantizar que los usuarios puedan ubicarlos con facilidad.
                    </li>
                    <li bold>
                        <strong>Considere la velocidad de carga de su sitio</strong>
                        <br>
                        si los usuarios experimentan un bajo rendimiento del sitio web, es menos probable que el 79% de los compradores vuelvan a comprar en ese sitio web. Por lo tanto, la velocidad de su sitio móvil, incluida su pantalla de inicio, es extremadamente importante.
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
        <Heading type="h1">Evaluación</Heading>
        <section>
            <p>Valida tu aprendizaje</p>
            <aside class="tests_grid">
                <TestCard :question="question1" />
                <TestCard :question="question2" />
            </aside>
        </section>
    </GuideBody>
</template>

<style></style>
