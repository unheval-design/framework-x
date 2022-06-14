<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-7/image_1.png'
import imageTwo from '@/assets/images/guide-7/image_2.png'
import Heading from '@/components/Heading.vue';

const question1 = {
    question: '¿Por qué hacemos el Card Sorting?',
    answer: 1,
    alternatives: [
        'Por que necesitamos descubrir cómo las personas entienden y categorizan la información.',
        'Por que queremos descubrir la experiencia del usuario a lo largo de una serie de interacciones.',
        'Por que queremos entender como agrupar los elementos de nuestra interfaz.'
    ]
};

const question2 = {
    question: '¿Cuándo usariamos un Card Sorting de tipo cerrado?',
    answer: 3,
    alternatives: [
        'Si deseamos priorizar y clasificar funciones.',
        'Si deseamos descubrir nuevas categorias para un mismo grupo de tarjetas.',
        'Si deseamos mejorar la categorizacion para las funcionalidades de nuestra interfaz.'
    ]
};
</script>
<template>
    <GuideTitle>
        Mapa del Sitio
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" id="guide_7_title_1">Definición</Heading>
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
        </section>
        <Heading type="h1" id="guide_7_title_2">¿Cuándo hacer el mapa del sitio?</Heading>
        <section>
            <p>
                Los sitemaps se hacen al principio del proceso de diseño de UX, justo después de la fase de descubrimiento. Por lo general, creará un mapa del sitio después del User Journey Map y el Card Sorting(Babich, 2019) . Para un sitio web existente, trabaje en una auditoría del sitio o en un inventario de contenido antes de diseñar el nuevo mapa del sitio.
            </p>
        </section>
        <Heading type="h1" id="guide_7_title_3">Tipos de mapas de sitio</Heading>
        <section>
            <p>Por lo general, hay dos tipos de mapas de sitio: un mapa de sitio plano y un mapa de sitio profundo.</p>
            <Heading type="h2" id="guide_7_title_4">Mapa del sitio plano</Heading>
            <p>
                Generalmente tiene cuatro o menos filas verticales. Se utiliza para productos de tamaño pequeño a mediano en los que hay que organizar entre 10 y 100 páginas de información.
            </p>
            <Heading type="h2" id="guide_7_title_5">Mapa del sitio profundo</Heading>
            <p>
                el mapa del sitio profundo o detallado es cuando el mapa tiene cinco o más filas verticales. Es mejor usar un mapa del sitio completo si el producto tiene más de 100 a 1000 páginas/contenidos que deben organizarse.
            </p>
        </section>
        <Heading type="h1" id="guide_7_title_6">¿Cómo crear el mapa del sitio?</Heading>
        <section>
            <p>Un mapa del sitio de UX consta de páginas vinculadas, cada una con un número de referencia y una etiqueta . Los números de referencia lo ayudan a realizar un seguimiento de las páginas, incluso cuando avanza a esquemas, prototipos e iteraciones (Mears, 2013).</p>
            <Reference
                :image="imageOne"
                description="A single page in a UX sitemap. Author: Jennifer Jhang." />
            <p>Al crear el mapa del sitio, siempre comience la primera fila con una página significativa: página de inicio; luego aplique estratégicamente las subpáginas necesarias debajo de la primera fila. Todavía es beneficioso hacer una lluvia de ideas con su equipo antes de estructurar el mapa.</p>
            <Heading type="h2" id="guide_7_title_7">Reuniendo el contenido</Heading>
            <p>
                <ol>
                    <li>Escriba las páginas significativas en pegatinas(post-it)</li>
                    <li>Escriba las piezas de información representativas que son necesarias para el producto final.</li>
                    <li>Ordenar los contenidos y etiquetarlos según sus características/orígenes.</li>
                    <li>En función de la clasificación del contenido, decida las páginas secundarias y las subpáginas.</li>
                </ol>
            </p>
            <Heading type="h2" id="guide_7_title_8">Creación del mapa del sitio</Heading>
            <p>
                <ol>
                    <li>Coloque las páginas principales como la fila superior del mapa.</li>
                    <li>Etiquete cada página en su plan, ordene sus etiquetas y cree la hoja de ruta estructurada.</li>
                    <li>Coloque estratégicamente las páginas secundarias, agréguelas a las siguientes filas según la importancia del contenido.</li>
                    <li>Una vez que el sitio esté organizado, discuta el mapa del sitio y su flujo dentro de su equipo. Recorte, agregue o reemplace las piezas de información/páginas si es necesario.</li>
                    <li>Reorganiza las páginas y ensambla la estructura final del producto en tu mapa del sitio.</li>
                </ol>
            </p>
            <p>Un mapa del sitio basico deberia tener una estructura similar al siguiente:</p>
            <Reference
                :image="imageTwo"
                description="UX sitemap example of a dessert blog website. Author: Jennifer Jhang." />
        </section>
        <Heading type="h1" id="guide_7_title_9">Evaluación</Heading>
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
