<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageFigma from '@/assets/images/brands/figma.png';
import Challenge from '@/components/Challenge.vue';
import TipCard from '@/components/TipCard.vue';
import imageDoOne from '@/assets/images/guide-12/image_do_1.png'
import imageDontOne from '@/assets/images/guide-12/image_dont_1.png'
import imageDoTwo from '@/assets/images/guide-12/image_do_2.png'
import imageDontTwo from '@/assets/images/guide-12/image_dont_2.png'
import imageDoThree from '@/assets/images/guide-12/image_do_3.png'
import imageDontThree from '@/assets/images/guide-12/image_dont_3.png'
import imageDoFour from '@/assets/images/guide-12/image_do_4.png'
import imageDontFour from '@/assets/images/guide-12/image_dont_4.png'
import imageDoFive from '@/assets/images/guide-12/image_do_5.png'
import imageDontFive from '@/assets/images/guide-12/image_dont_5.png'
import { inject } from '@vue/runtime-core';

const projectName = inject('projectName');
const questions = [
    {
        id: 1,
        question: '¿Para qué hacemos mockups?',
        answer: 3,
        alternatives: [
            { id: 1, description: 'Para saber la estructura y posición de los elementos en la vista.' },
            { id: 2, description: 'Para ver como interactuan las diferentes vistas en conjunto.' },
            { id: 3, description: 'Para representar nuestro producto con alto grado de detalles.' }
        ]
    },
    {
        id: 2,
        question: '¿En qué se diferencia el mockup del wireframe?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'El mockup tiene interacciones entre vistas y el wireframe no.' },
            { id: 2, description: 'El mockup representa visualmente al producto, mientas que el wireframe solo muestra como es la estructura de dicho producto.' },
            { id: 3, description: 'El mockup representa el producto final mientras que el wireframe es una estructura no terminada.' }
        ]
    }
];

const challenge12_tasks = [
    'Tomar en cuenta Reto #8',
    'Tomar en cuenta Reto #10',
    'Tomar en cuenta Reto #11',
    'Definir color, tipografía, etc.',
    'Crear el mockup'
];
</script>

<template>
    <GuideTitle>
        Mockup
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                El diseño del mockup es una parte fundamental del proceso de diseño. Son una representación visual o una captura de pantalla de cómo se verá el sitio web o el producto final que incluye jerarquía, tipografía, íconos y otros elementos de la interfaz de usuario.
            </p>
            <Blockquote>
                Es la primera vez que los diseñadores ven cómo sus ideas cobran vida con color, tipografía y contenido.
            </Blockquote>
            <p>
                Un mockup lo ayuda a tomar decisiones finales con respecto a los esquemas de color, el estilo visual y la tipografía de un producto. Con un mockup, puede permitirse experimentar con el lado visual del producto para ver qué se ve mejor, puede solicitar comentarios a sus usuarios potenciales y realizar los cambios necesarios de inmediato. Esto le ahorrará mucho más tiempo que regresar y hacer ajustes en la interfaz de usuario después de haber lanzado el producto.
            </p>
        </section>
        <Heading type="h1">¿Para qué sirven los mockups?</Heading>
        <section>
            <p>
                Son una parte crucial del proceso de pensamiento de diseño porque responden preguntas visuales importantes (como el diseño, el color y la jerarquía) y permiten a los diseñadores comenzar con la creación de prototipos de alta fidelidad.
            </p>
            <p>
                Los desarrolladores pueden usarlo como referencia de especificación para analizar el tamaño, es espaciado, la cuadricula, la tipografía, etc.
            </p>
            <p>
                Los mockups también proporcionan:
            </p>
            <p>
                <ul>
                    <li><strong>Comentarios significativos de las partes interesadas.</strong> Gracias a la mayor fidelidad se puede recibir feedback de todas las partes interesadas.</li>
                    <li><strong>Perspectiva realista.</strong> Revelan problemas que podrían no haber sido obvios durante la estructuración de wireframes, como consideraciones de accesibilidad, opciones de color deficientes o problemas de diseño.</li>
                    <li><strong>Flexibilidad.</strong> Es más fácil realizar cambios en un mockup de la interfaz de usuario que editar el código.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1">Mockup vs Wireframe</Heading>
        <section>
            <p>
                Una mockup es una forma visual de representar un producto, mientras que un wireframe representa principalmente la estructura de un producto, un mockup muestra cómo se verá el producto. Pero aún así, al igual que en los wireframes, estos no son interactivos. A diferencia de un wireframe, un mockup es una muestra de diseño de fidelidad media o alta.
            </p>
        </section>
        <Heading type="h1">Elementos de un mockup</Heading>
        <section>
            <Heading type="h2">Contenido</Heading>
            <p>
                Un mockup reemplaza los cuadros y las líneas de un wireframe con contenido real, como imágenes, componentes de la interfaz de usuario y texto. Este contenido suele dictar el diseño, ya que los diseñadores deciden cómo priorizar y ajustar todo dentro de las limitaciones de la pantalla.
            </p>
            <Blockquote>Es común que los diseñadores usen imágenes y texto ficticios para la primera iteración de una maqueta, que reemplazan una vez que comienzan a crear prototipos y probar.</Blockquote>
            <Heading type="h2">Color y contraste</Heading>
            <p>
                El color juega un papel crucial en la marca, la agrupación de contenido, la jerarquía y la accesibilidad, mientras que el contraste es vital para la legibilidad, la usabilidad y la accesibilidad.
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
            <Heading type="h2">Tipografía</Heading>
            <p>
                Las mockups le permiten explorar el tamaño de su tipografía, la fuente, el estilo y el espaciado, sin mencionar el uso estructural para mantener la coherencia, como cómo estilizar los subtítulos.
            </p>
            <p>
                Los mockups son la primera oportunidad para que los diseñadores visualicen las opciones de fuente en contexto con el resto de la interfaz de usuario.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontTwo">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoTwo">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2">Espaciado</Heading>
            <p>
                El espaciado y el espacio en blanco son poderosas características de diseño. El espacio mejora la legibilidad y ayuda a definir la jerarquía visual. Los diseñadores a menudo usan espacios en blanco para llamar la atención sobre elementos importantes de la interfaz de usuario o una imagen del producto.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontThree">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoThree">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2">Iconografía</Heading>
            <p>
                A veces, los íconos parecen ser la parte "más fácil" del diseño. Algunos diseñadores incluso los ven como un elemento decorativo “extra”, cuando en realidad también son parte fundamental de las interfaces modernas. Por eso es tan importante elegir el "símbolo" correcto que comunique claramente el significado del elemento y mantener un estilo uniforme para los íconos en toda la aplicación.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontFour">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoFour">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2">Alineación</Heading>
            <p>
                La alineación es una parte pequeña pero importante de la interfaz. La alineación afecta la forma en que nuestro cerebro escanea el contenido en una pantalla. Una alineación de texto adecuada es uno de los indicadores más distintivos de un producto digital diseñado profesionalmente.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontFive">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoFive">
                    </template>
                </TipCard>
            </aside>
        </section>
        <Heading type="h1">¿Qué herramientas usar para crear mockups?</Heading>
        <section>
            <p>
                A diferencia de un wireframe, no puede dibujar un mockup. Necesita usar una herramienta de mockup. 
            </p>
            <Heading type="h2">Software de mockup</Heading>
            <p>
                Las herramientas de diseño de experiencia de usuario especializadas, como Figma, Adobe XD, etc. Que brindan a los diseñadores las funciones para crear mockups rápidamente, especialmente si tienen una biblioteca de componentes o un sistema de diseño.
            </p>
            <Heading type="h2">Software de diseño grafico</Heading>
            <p>
                Algunos diseñadores aún prefieren crear maquetas utilizando software de diseño gráfico, como Photoshop o Illustrator . La desventaja con el software de diseño gráfico es que no puede agregar animaciones o interacciones, por lo que debe recrear las mockups en otra aplicación para comenzar a crear prototipos.
            </p>
            <Heading type="h2">Código</Heading>
            <p>
                Algunos diseñadores técnicamente competentes construyen mockups utilizando HTML, CSS y Javascript o también aplicaciones con tecnologias “drag and drop” que permiten construir sin saber de codigo como Wordpress o Wix . La desventaja del código es que lleva mucho tiempo compilarlo, corregir errores y realizar cambios.
            </p>
        </section>
        <Challenge time="45" :id="12" :tasks="challenge12_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #12 </Heading>
            </template>
            Elaborar el Mockup de "{{projectName}}".
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Creación de mockups"
                    type="tool"
                    :src="imageFigma"
                    href="https://figma.com/"
                />
                <ResourceCard
                    title="Ejemplos"
                    description="Mockups"
                    type="download"
                    href="https://www.figma.com/community/file/1126792861965409028"
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
