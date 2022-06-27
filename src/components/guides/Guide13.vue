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
        '¿Para qué hacemos mockups?',
    answer: 1,
    alternatives: [
        'Para saber la estructura y posición de los elementos en la vista.',
        'Para ver como interactuan las diferentes vistas en conjunto.',
        'Para representar nuestro producto con alto grado de detalles.'
    ]
};

const question2 = {
    question: '¿En qué se diferencia el mockup del wireframe?',
    answer: 3,
    alternatives: [
        'El mockup tiene interacciones entre vistas y el wireframe no.',
        'El mockup representa visualmente al producto, mientas que el wireframe solo muestra como es la estructura de dicho producto.',
        'El mockup representa el producto final mientras que el wireframe es una estructura no terminada.'
    ]
};
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
            <Reference
                :image="imageOne"
                description="Skyfly mobile app design. Author: Taras Migulko"
            />
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
            <Heading type="h2">Tipografía</Heading>
            <p>
                Las mockups le permiten explorar el tamaño de su tipografía, la fuente, el estilo y el espaciado, sin mencionar el uso estructural para mantener la coherencia, como cómo estilizar los subtítulos.
            </p>
            <p>
                Los mockups son la primera oportunidad para que los diseñadores visualicen las opciones de fuente en contexto con el resto de la interfaz de usuario.
            </p>
            <Heading type="h2">Espaciado</Heading>
            <p>
                El espaciado y el espacio en blanco son poderosas características de diseño. El espacio mejora la legibilidad y ayuda a definir la jerarquía visual. Los diseñadores a menudo usan espacios en blanco para llamar la atención sobre elementos importantes de la interfaz de usuario o una imagen del producto.
            </p>
        </section>
        <Heading type="h1">¿Qué herramientas usar para crear mockups?</Heading>
        <section>
            <p>
                A diferencia de un wireframe, no puede dibujar un mockup. Necesita usar una herramienta de mockup. 
            </p>
            <Heading type="h2">Software de mockup</Heading>
            <p>
                Las herramientas de diseño de experiencia de usuario especializadas, como
                <ResourceLink type="tool">
                    Figma
                    <template v-slot:popup>
                        <ResourceCard
                            title="Figma"
                            description="Herramienta para prototipar"
                            type="tool"
                            :src="imageFigma"
                            />
                    </template>
                </ResourceLink>,
                <ResourceLink type="tool">
                    Adobe XD
                    <template v-slot:popup>
                        <ResourceCard
                            title="Adobe XD"
                            description="Herramienta para prototipar"
                            type="tool"
                            :src="imageXd"
                            />
                    </template>
                </ResourceLink>, etc. Que brindan a los diseñadores las funciones para crear mockups rápidamente, especialmente si tienen una biblioteca de componentes o un sistema de diseño.
            </p>
            <Heading type="h2">Software de diseño grafico</Heading>
            <p>
                Algunos diseñadores aún prefieren crear maquetas utilizando software de diseño gráfico, como
                <ResourceLink type="tool">
                    Photoshop
                    <template v-slot:popup>
                        <ResourceCard
                            title="Photoshop"
                            description="Herramienta para diseño"
                            type="tool"
                            :src="imagePs"
                            />
                    </template>
                </ResourceLink>
                 o
                <ResourceLink type="tool">
                    Illustrator
                    <template v-slot:popup>
                        <ResourceCard
                            title="Illustrator"
                            description="Herramienta para vectores"
                            type="tool"
                            :src="imageAi"
                            />
                    </template>
                </ResourceLink>. La desventaja con el software de diseño gráfico es que no puede agregar animaciones o interacciones, por lo que debe recrear las mockups en otra aplicación para comenzar a crear prototipos.
            </p>
            <Heading type="h2">Código</Heading>
            <p>
                Algunos diseñadores técnicamente competentes construyen mockups utilizando HTML, CSS y Javascript o también aplicaciones con tecnologias “drag and drop” que permiten construir sin saber de codigo como
                <ResourceLink type="tool">
                    Wordpress
                    <template v-slot:popup>
                        <ResourceCard
                            title="Wordpress"
                            description="Plataforma para crear paginas"
                            type="tool"
                            :src="imageWp"
                            />
                    </template>
                </ResourceLink>
                o
                <ResourceLink type="tool">
                    Wix
                    <template v-slot:popup>
                        <ResourceCard
                            title="Wix"
                            description="Plataforma para crear paginas"
                            type="tool"
                            :src="imageWix"
                            />
                    </template>
                </ResourceLink>. La desventaja del código es que lleva mucho tiempo compilarlo, corregir errores y realizar cambios.
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
