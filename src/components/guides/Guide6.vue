<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-6/image_1.png'
import imageTwo from '@/assets/images/guide-6/image_2.png'
import imageThree from '@/assets/images/guide-6/image_3.png'
import imageDoOne from '@/assets/images/guide-6/image_do_1.png';
import imageDontOne from '@/assets/images/guide-6/image_dont_1.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageMiro from '@/assets/images/brands/miro.png';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import Challenge from '@/components/Challenge.vue';
import TipCard from '@/components/TipCard.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Qué conlleva una mala estructuración?',
        answer: 3,
        alternatives: [
            { id: 1, description: 'Mala identificación de las tareas del usuario.'},
            { id: 2, description: 'Demora en el proceso de diseño de interfaces.'},
            { id: 3, description: 'Una mala experiencia del usuario y, más allá de eso, a la pérdida de negocios.'}
        ]
    },
    {
        id: 2,
        question: '¿Por qué es recomendable poner un número de referencia en las páginas del mapa del sitio?',
        answer: 2,
        alternatives: [
            { id: 1, description: 'Para referenciar en la documentación del mapa del sitio.'},
            { id: 2, description: 'Ayudan a realizar un seguimiento en la jerarquía, esquemas y prototipos de las páginas.'},
            { id: 3, description: 'Ayudan a determinar el tipo de mapa de sitio.'}
        ]
    }
]);

const challenge6_tasks = [
    'Definir las páginas principales',
    'Definir las páginas secundarias',
    'Definir los contenidos'
];
</script>
<template>
    <GuideTitle>
        Mapa del Sitio
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
               Diseñar un sitio web puede parecer bastante abrumador con tantas cosas que considerar, es fácil caer en una mala estructuración de la información que queremos mostrar.
            </p>
            <p>
                Una mala estructuración puede conducir a una mala experiencia del usuario y, más allá de eso, a la pérdida de negocios. Si sus visitantes no saben a dónde ir o qué hacer, se irán.
            </p>
            <p>
                Un mapa del sitio de la experiencia del usuario (UX) es una representación visual de la arquitectura de la información de su producto que describe las diferentes páginas de su producto, junto con la jerarquía entre esas páginas. A veces se denomina diagrama de arquitectura de la información (IA) o esquema de contenido.
            </p>
            <p>Un mapa del sitio basico deberia tener una estructura similar al siguiente:</p>
            <Reference
                :image="imageThree"
                description="UX sitemap example of a dessert blog website. Author: Jennifer Jhang." />
        </section>
        <Heading type="h1" >¿Por que hacemos un mapa de sitio?</Heading>
        <section>
            <p>
                <ul>
                    <li>
                        <strong>Forma una mejor comprensión de los objetivos de diseño.</strong>
                        <br>
                        Cada sitio web debe tener un objetivo, con cada decisión de diseño alineada con él. Al presentar visualmente todo el contenido de su sitio al equipo, puede hablar sobre los objetivos y priorizar las decisiones de diseño.
                    </li>
                    <li>
                        <strong>Crea una única fuente de verdad</strong>
                        <br>
                        Un proyecto de diseño web involucra a muchas personas, desde diseñadores front-end hasta partes interesadas. Mostrar las relaciones entre las páginas de su sitio facilita la comprensión de las conexiones y la introducción de cambios en la IA y el diseño.
                    </li>
                    <li>
                        <strong>Elimina páginas innecesarias</strong>
                        <br>
                        La información jerárquica en un mapa del sitio ayuda a los miembros del equipo a encontrar y eliminar páginas que no están directamente relacionadas con el propósito del sitio.
                    </li>
                    <li>
                        <strong>Elimina el contenido duplicado</strong>
                        <br>
                        Cuando puede evaluar fácilmente todas las páginas de su sitio web de acuerdo con su mapa del sitio, reduce la posibilidad de duplicar contenido y crear una experiencia confusa para el usuario.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Tipos de mapas de sitio</Heading>
        <section>
            <p>Por lo general, hay dos tipos de mapas de sitio: un mapa de sitio plano y un mapa de sitio profundo.</p>
            <Heading type="h2" >Mapa de sitio plano</Heading>
            <p>
                Generalmente tiene cuatro o menos filas verticales. Se utiliza para productos de tamaño pequeño a mediano en los que hay que organizar entre 10 y 100 páginas de información.
            </p>
            <Heading type="h2" >Mapa de sitio profundo</Heading>
            <p>
                el mapa del sitio profundo o detallado es cuando el mapa tiene cinco o más filas verticales. Es mejor usar un mapa del sitio completo si el producto tiene más de 100 a 1000 páginas/contenidos que deben organizarse.
            </p>
            <Reference
                :image="imageOne"
                description="Mapas de sitio plano vs profundo. Author: Jennifer Jhang." />
        </section>
        <Heading type="h1" >¿Cómo crear el mapa del sitio?</Heading>
        <section>
            <p>Un mapa del sitio de UX consta de páginas vinculadas, cada una con un número de referencia y una etiqueta . Los números de referencia lo ayudan a realizar un seguimiento de las páginas, incluso cuando avanza a esquemas, prototipos e iteraciones (Mears, 2013).</p>
            <Reference
                :image="imageTwo"
                description="A single page in a UX sitemap. Author: Jennifer Jhang." />
            <p>Al crear el mapa del sitio, siempre comience la primera fila con una página significativa: página de inicio; luego aplique estratégicamente las subpáginas necesarias debajo de la primera fila. Todavía es beneficioso hacer una lluvia de ideas con su equipo antes de estructurar el mapa.</p>
            <Heading type="h2" >Reuniendo el contenido</Heading>
            <p>
                <ol>
                    <li>Escriba las páginas significativas en pegatinas(post-it)</li>
                    <li>Escriba las piezas de información representativas que son necesarias para el producto final.</li>
                    <li>Ordenar los contenidos y etiquetarlos según sus características/orígenes.</li>
                    <li>En función de la clasificación del contenido, decida las páginas secundarias y las subpáginas.</li>
                </ol>
            </p>
            <Heading type="h2" >Creación del mapa del sitio</Heading>
            <p>
                <ol>
                    <li>Coloque las páginas principales o categorias como la fila superior del mapa.</li>
                    <li>Etiquete cada página en su plan, ordene sus etiquetas y cree la hoja de ruta estructurada.</li>
                    <li>Coloque estratégicamente las páginas secundarias o subcategorias, agréguelas a las siguientes filas según la importancia del contenido.</li>
                    <li>Una vez que el sitio esté organizado, discuta el mapa del sitio y su flujo dentro de su equipo. Recorte, agregue o reemplace las piezas de información/páginas si es necesario.</li>
                    <li>Reorganiza las páginas y ensambla la estructura final del producto en tu mapa del sitio.</li>
                </ol>
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontOne">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoOne">
                    </template>
                </TipCard>
            </aside>
        </section>
        <Challenge time="30" :id="6" :tasks="challenge6_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #6 </Heading>
            </template>
            Construye un mapa del sitio basado en el resultado del Reto #5 (Card Sorting).
            <template v-slot:tools>
                <ResourceCard
                    title="Miro"
                    description="Organización visual"
                    type="tool"
                    :src="imageMiro"
                    href="https://miro.com/es"
                />
                <ResourceCard
                    title="Figma"
                    description="Prototipo interactivo"
                    type="tool"
                    :src="imageFigma"
                    href="https://figma.com/"
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
