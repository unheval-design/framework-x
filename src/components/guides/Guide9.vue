<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-9/image_1.png'
import imageTwo from '@/assets/images/guide-9/image_2.png'
import imageThree from '@/assets/images/guide-9/image_3.png'
import imagePs from '@/assets/images/brands/ps.png';
import imageAi from '@/assets/images/brands/ai.png';
import imageXd from '@/assets/images/brands/xd.png';
import imageFigma from '@/assets/images/brands/figma.png';
import Blockquote from '@/components/Blockquote.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';

const question1 = {
    question:
        '¿Por qué hacemos Wireframes?',
    answer: 1,
    alternatives: [
        'Ayudan a crear flujos o rutas para nuestros usuarios.',
        'Ayudan a comunicar la estructura de páginas individuales y como se conectan esas páginas.',
        'Ayudan a visualizar el producto para que el equipo de desarrollo empiece a trabajar en paralelo.'
    ]
};

const question2 = {
    question:
        '¿Cuando hariamos wireframes dibujando a mano?',
    answer: 3,
    alternatives: [
        'Cuando queremos crear e iterar rapidamente.',
        'Cuando trabajamos en un producto pequeño.',
        'Cuando ya tenemos la idea clara y no necesitamos wireframes con muchos detalles e iteracciones.'
    ]
};
</script>
<template>
    <GuideTitle>
        Wireframe
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                Un wireframe es una representación estática y de baja fidelidad de las diferentes pantallas y páginas que forman un producto. Los wireframes usan formas simples para crear representaciones visuales de diseños de página. Se utilizan para comunicar la estructura de páginas individuales (cómo funcionan juntas las piezas de la página y dónde estará el contenido) y cómo se conectan esas páginas (cómo funcionará la interfaz desde la perspectiva del usuario).
            </p>
        </section>
        <Heading type="h1" >Propósitos de un Wireframe</Heading>
        <section>
            <p>
               Los wireframes reemplazan la naturaleza abstracta del mapa del sitio, que suele ser el primer paso en el desarrollo del sitio, con algo más tangible y comprensible. Hay varios propósitos interrelacionados para los wireframes:
            </p>
            <p>
                <ul>
                    <li>
                        <strong>Asegurarse de que el sitio o la aplicación se construya de acuerdo con los objetivos.</strong>
                        <br>
                        Ver las características claramente con una influencia creativa mínima permite a las partes interesadas centrarse en otros aspectos del proyecto. Wireframing establece expectativas sobre cómo se implementarán las funciones al mostrar cómo funcionarán, dónde se ubicarán y cuánto beneficio brindarán.
                    </li>
                    <li>
                        <strong>Centrándose en la usabilidad.</strong>
                        <br>
                        Wireframing proporciona una mirada objetiva a los nombres de los enlaces, las rutas de conversión, la facilidad de uso, la navegación y la ubicación de las funciones. Los wireframes lo ayudan a identificar fallas en la arquitectura o las características del sitio y le muestran qué tan bien fluye desde la perspectiva del usuario.
                    </li>
                    <li>
                        <strong>Capacidad de crecimiento de contenido.</strong>
                        <br>
                        Si sabe que su sitio crecerá en un futuro cercano, su sitio web debe poder adaptarse a ese crecimiento con un impacto mínimo en la arquitectura, la usabilidad y el diseño del sitio. El wireframing puede revelar estas oportunidades importantes para el crecimiento del contenido y cómo encajarlas.
                    </li>
                    <li>
                        <strong>Retroalimentación e iteración sin dolor.</strong>
                        <br>
                        En lugar de fusionar la funcionalidad completa, el diseño y los elementos creativos en un solo paso, los wireframes garantizan que estas consideraciones se tomen por separado. Esto permite que las partes interesadas proporcionen comentarios mucho antes en el proceso. La creación de wireframes con software hace que el proceso iterativo inherente al diseño web sea mucho menos complicado.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >¿Cuándo deberías crear un wireframe?</Heading>
        <section>
            <p>
                Los diseñadores suelen crear esquemas al principio del proceso de diseño, antes de que el equipo empiece a trabajar en los detalles visuales.
            </p>
            <p>
                En la etapa de wireframing, es mucho más fácil hacer grandes cambios, dado que los wireframes son relativamente rápidos y económicos de producir, los diseñadores pueden experimentar agregando o eliminando objetos, moviendo contenido y objetos, y agrupando elementos.
            </p>
            <Blockquote>
                Hacer wireframes en la etapa de definir, antes de que se escriba cualquier código y antes de que se finalice el diseño visual, le ahorrará mucho tiempo y un doloroso trabajo de ajuste posterior.
            </Blockquote>
        </section>
        <Heading type="h1" >Tipos de Wireframe</Heading>
        <section>
            <p>
                Hay cuatro tipos diferentes de wireframes que van desde el tipo más simple (en blanco y negro o plano) hasta el más complejo (casi simulando lo real):
            </p>
            <Heading type="h2" >Wireframes básicos</Heading>
            <p>
                También conocidos como representaciones de baja fidelidad, estos son esquemas de página muy simples, generalmente en blanco y negro.
            </p>
            <Heading type="h2" >Wireframes anotados</Heading>
            <p>Estos agregan una amplia gama de detalles a un esquema básico. Las anotaciones son notas breves, generalmente en el costado o en la parte inferior de un wireframe, que describen cada elemento del wireframe, generalmente separados por áreas de contenido y funcionalidad, y muestran (brevemente) el motivo y el propósito de cada elemento.</p>
            <Heading type="h2" >Wireframes de flujo de usuario</Heading>
            <p>Cuando la anotación no es suficiente para mostrar cómo un usuario de sitio o aplicación se moverá lógicamente a través del contenido de una página a otra, es posible que se requiera más información. Estos wireframes de flujo de usuario pueden ser vistas estáticas de un wireframe completamente interactivo, pero podrían incluir una presentación de diapositivas o una colección de wireframes en serie para mostrar un flujo de usuario principal o un conjunto de flujos de usuario.</p>
            <Heading type="h2" >Wireframes interactivos de alta definición</Heading>
            <p>Puede experimentar interacciones (p. ej., toques, clics y deslizamientos) dentro o entre wireframes individuales. Agregar interacciones antes de pasar a las maquetas completas o la creación de prototipos en vivo ahorra horas al diseñador y al desarrollador. Esta variación de wireframes solo se puede realizar en presentaciones y diseño gráfico, o en software de creación de prototipos y wireframing.</p>
        </section>
        <Heading type="h1" >¿Que herramientas usar para hacer Wireframes?</Heading>
        <section>
            <p>Puede crear su diseño de wireframe utilizando uno de los siguientes métodos:</p>
            <Heading type="h2" >Dibujando</Heading>
            <p>Los bocetos dibujados a mano son rápidos de crear y rápidos de iterar. Esbozar es especialmente bueno para las sesiones de lluvia de ideas cuando los diseñadores necesitan visualizar rápidamente diferentes ideas (por ejemplo, explorar una variedad de diseños para una determinada vista).</p>
            <Reference
                :image="imageOne"
                description="Wireframe a mano. Author: Nicholas Swanson." />
            <Heading type="h2" >Software de diseño gráfico</Heading>
            <p>
                Es bastante fácil wireframes con software como
                <ResourceLink type="tool">
                    Adobe Photoshop
                    <template v-slot:popup>
                        <ResourceCard
                            title="Adobe Photoshop"
                            description="Herramienta para fotografia"
                            type="tool"
                            :src="imagePs"
                            />
                    </template>
                </ResourceLink>
                o
                <ResourceLink type="tool">
                    Adobe Illustrator
                    <template v-slot:popup>
                        <ResourceCard
                            title="Adobe Illustrator"
                            description="Herramienta para vectores"
                            type="tool"
                            :src="imageAi"
                            />
                    </template>
                </ResourceLink>
            </p>
            <Reference
                :image="imageTwo"
                description="Wireframe en Adobe Illustrator. Author: Toptal.com." />
            <Heading type="h2" >Software de diseño de experiencia de usuario</Heading>
            <p>La principal ventaja de usar un software especial es que puede pasar sin problemas de esquemas a prototipos sin tener que cambiar a otra herramienta. Con herramientas como
                <ResourceLink type="tool">
                    Adobe XD
                    <template v-slot:popup>
                        <ResourceCard
                            title="Adobe XD"
                            description="Herramienta de prototipado"
                            type="tool"
                            :src="imageXd"
                            />
                    </template>
                </ResourceLink>
                o
                <ResourceLink type="tool">
                    Figma
                    <template v-slot:popup>
                        <ResourceCard
                            title="Figma"
                            description="Herramienta de prototipado"
                            type="tool"
                            :src="imageFigma"
                            />
                    </template>
                </ResourceLink>
                <!-- Adobe XD o Figma, -->
                los diseñadores pueden convertir sus wireframes en prototipos de baja fidelidad en cuestión de minutos.</p>
            <Reference
                :image="imageThree"
                description="Wireframe en Adobe XD. Author: Oliver Lindberg." />
        </section>
        <Heading type="h1" >Recomendaciones prácticas</Heading>
        <section>
            <p>
                Aquí hay algunos consejos a tener en cuenta al diseñar wireframes:
            </p>
            <p>
                <ul>
                    <li>
                        <strong>No intente hacer wireframes perfectos en píxeles.</strong>
                        <br>
                        El objetivo del wireframing es evaluar la estructura de las páginas individuales, no pulir los detalles del diseño visual.
                    </li>
                    <li>
                        <strong>No agregue demasiados detalles.</strong>
                        <br>
                        Los wireframes son la estructura básica del producto, así que solo agregue los elementos esenciales.
                    </li>
                    <li>
                        <strong>Usa el color para llamar la atención.</strong>
                        <br>
                        Los wireframes tradicionalmente usan blanco y negro o escala de grises, pero siéntase libre de usar un color de contraste para crear acentos visuales.
                    </li>
                    <li>
                        <strong>Use anotaciones cortas y al punto.</strong>
                        <br>
                        Si planea presentar un wireframe al equipo, incluya siempre anotaciones escritas. Las anotaciones ayudan a crear contexto y ofrecen rápidamente ideas clave.
                    </li>
                    <li>
                        <strong>Fomente la retroalimentación.</strong>
                        <br>
                        Compartir sus esquemas y alentar los comentarios de los miembros de su equipo es una forma segura de mejorarlos.
                    </li>
                    <li>
                        <strong>Utilice plantillas de estructura alámbrica.</strong>
                        <br>
                        Es más fácil diseñar wireframes cuando tienes referencias visuales. Hemos creado una colección muy útil de &nbsp;&nbsp;&nbsp;&nbsp;
                        <ResourceLink type="tool">
                            plantillas
                            <template v-slot:popup>
                                <ResourceCard
                                    title="Plantillas.pdf"
                                    description="plantillas de wireframes"
                                    type="download"
                                    :src="imageAi"
                                    />
                            </template>
                        </ResourceLink>
                        que lo ayudarán a comenzar.
                    </li>
                    <li>
                        <strong>Utilice un kit wireframe.</strong>
                        <br>
                        Comience con su estructura alámbrica con Wires o kits de interfaz de usuario.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Evaluación</Heading>
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
