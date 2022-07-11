<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-14/image_1.png';
import imageTwo from '@/assets/images/guide-14/image_2.png';
import imageThree from '@/assets/images/guide-14/image_3.png';
import imageFour from '@/assets/images/guide-14/image_4.png';
import imageFive from '@/assets/images/guide-14/image_5.png';
import imageSix from '@/assets/images/guide-14/image_6.png';
import imageFigma from '@/assets/images/brands/figma.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Para qué hacemos el Diseño Atómico?',
        answer: 2,
        alternatives: [
            {
                id: 1,
                description:
                    'Mejora la claridad del contenido mientras ayuda a los usuarios a concentrarse en el contenido que más importa'
            },
            {
                id: 2,
                description:
                    'Nos brinda una estructura para formular nuestro diseño, nos ayuda a crear componentes básicos para construir nuestros sistemas de diseño.'
            },
            {
                id: 3,
                description:
                    'Ayuda a tomar decisiones finales con respecto a los esquemas de color, el estilo visual y la tipografía de un producto.'
            }
        ]
    },
    {
        id: 2,
        question: '¿Que son los átomos?',
        answer: 2,
        alternatives: [
            {
                id: 1,
                description:
                    'Elemento simple compuesto por un avatar y un par de elementos de etiqueta.'
            },
            {
                id: 2,
                description:
                    'Son los bloques de construcción más pequeños de nuestro sistema.'
            },
            {
                id: 3,
                description:
                    'Elementos de UI básicos con los que los desarrolladores tendrán que trabajar.'
            }
        ]
    }
]);

const challenge14_tasks = [
    'Identificar y crear las atomos',
    'Identificar y crear las moleculas',
    'Identificar y crear los organismos',
    'Crear la plantilla',
    'Crear la pagina'
];
</script>

<template>
    <GuideTitle>
        Atomic Design
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                El diseño atómico (Atomic Design) es una metodología creada por
                Brad Frost que busca orientar la creación de sistemas de diseño
                de interfaz de manera más deliberada y con un orden y una
                jerarquía explícitos.
            </p>
        </section>
        <Heading type="h1">¿Por qué Diseño Atómico?</Heading>
        <section>
            <p>
                Esta metodología se llama Diseño Atómico porque su idea misma se
                basa en la Química y el estudio de la composición de la materia.
            </p>
            <p>
                Esta comprensión de cómo los elementos más pequeños, o átomos,
                se pueden combinar para crear objetos más grandes, o moléculas,
                es un buen paralelo con el mundo del diseño y los muchos
                elementos que usamos para construir nuestros diseños. Seguir los
                principios del diseño atómico nos brinda una estructura no solo
                para formular nuestro diseño, sino que crea los componentes
                básicos para construir nuestros sistemas de diseño y bibliotecas
                de patrones.
            </p>
        </section>
        <Heading type="h1">Elementos del Diseño Atómico</Heading>
        <section>
            <p>
                Hay cinco etapas distintas de la metodología de diseño atómico,
                con las tres primeras modeladas según sus equivalentes en el
                mundo de la química. Cada etapa se basa en la anterior, actuando
                como un agregado de elementos de las etapas anteriores.
            </p>
            <Reference
                :image="imageOne"
                description="Atomic Design Principles. Fuente: xd.adobe.com"
            />
            <Heading type="h2">Átomos</Heading>
            <p>
                Al igual que en Química, los átomos son los bloques de
                construcción más pequeños de nuestro sistema. En lugar de átomos
                como el oxígeno o el hidrógeno, en el diseño tenemos botones,
                entradas, etiquetas y otros elementos pequeños que se utilizan a
                lo largo de nuestro diseño. La iconografía encaja en esta
                categoría, ya sea un ícono de menú o un avatar, ya que son
                pequeños elementos que se unen para formar la siguiente etapa:
                las moléculas.
            </p>
            <Reference
                :image="imageTwo"
                description="Atomic Design Atoms. Fuente: xd.adobe.com"
            />
            <Heading type="h2">Moléculas</Heading>
            <p>
                En la etapa de la molécula, tomamos nuestros elementos de diseño
                atómico independientes, cada uno con sus propias
                características, estilo y formato, y comenzamos a unirlos en
                nuevos grupos. Tomemos por ejemplo nuestro átomo avatar. Si
                combinamos el átomo avatar con etiquetas de nombre y título,
                otros elementos atómicos, podemos crear una molécula de perfil.
                Cada átomo ha llevado sus propiedades únicas a un grupo que por
                sí mismo tiene características distintas.
            </p>
            <p>
                Al igual que en Química, podemos combinar los mismos átomos de
                diferentes maneras para crear moléculas únicas para usar en
                nuestro diseño. Aunque en esta etapa las agrupaciones siguen
                siendo colecciones relativamente simples.
            </p>
            <Reference
                :image="imageThree"
                description="Atomic Design Molecules. Fuente: xd.adobe.com"
            />
            <Heading type="h2">Organismos</Heading>
            <p>
                A medida que ingresamos a la etapa de Organismos, nuestras
                colecciones de átomos y moléculas ahora se vuelven más complejas
                que a nivel molecular. Tomemos, por ejemplo, nuestra molécula de
                "perfil". Era un elemento simple compuesto por un avatar y un
                par de elementos de etiqueta. A medida que traemos eso a un
                organismo, podemos agregarlo en el encabezado de una aplicación
                para una página de perfil, completa con navegación, una foto de
                portada de fondo y algunas otras moléculas. Esto crea nuestro
                organismo de cabecera.
            </p>
            <Reference
                :image="imageFour"
                description="Atomic Design Organisms. Fuente: xd.adobe.com"
            />
            <Heading type="h2">Plantillas</Heading>
            <p>
                La plantilla es la primera etapa de la metodología de Diseño
                Atómico que no se alinea con una etapa en el mundo molecular,
                pero es importante para el Diseño Atómico. Una plantilla es
                donde comenzamos a curar nuestros organismos y otros elementos
                en un diseño cohesivo.
            </p>
            <p>
                Usted vio en la etapa de Organismo que los elementos comenzaron
                a formarse en bloques de contenido utilizables, y esos comienzan
                a unirse en una plantilla de bloques que se pueden usar en una
                variedad de páginas. Piense en las plantillas como el modelo
                para nuestros futuros diseños de páginas terminadas. En este
                punto, siguen siendo los elementos y no contendrán datos reales,
                como una estructura alámbrica.
            </p>
            <Reference
                :image="imageFive"
                description="Atomic Design Templates. Fuente: xd.adobe.com"
            />
            <Heading type="h2">Páginas</Heading>
            <p>
                Las páginas son la etapa final de la metodología de Diseño
                Atómico. Aquí es donde se crean instancias de plantillas (en
                este caso, una para cada perfil). En el proceso de diseño, es
                posible que no diseñe páginas para cada instancia, pero es útil
                crear algunas variaciones.
            </p>
            <p>
                A medida que cambian sus datos, la información de perfil
                diferente o los idiomas pueden afectar el diseño de su
                plantilla. Desarrollar hasta la etapa de la página le permite
                probar estas variaciones y hacer adaptaciones globalmente a sus
                plantillas.
            </p>
            <Reference
                :image="imageSix"
                description="Atomic Design Pages. Fuente: xd.adobe.com"
            />
        </section>
        <Heading type="h1">Ventajas de aplicar Diseño Atómico</Heading>
        <section>
            <p>
                La metodología del Atomic Design es muy útil porque nos obliga a
                coger cada diseño y diseccionarlo para poder separar cada átomo.
            </p>
            <p>
                Esto nos ayudará a plantear los elementos de UI básicos con los
                que los desarrolladores tendrán que trabajar. Con esta base,
                después podrán ir creando fácilmente las moléculas, organismos
                y, finalmente, el diseño final.
            </p>
            <p>
                El Atomic Design obliga a plantear bien de inicio el “sistema de
                diseño”, con las tipografías, jerarquías, paleta de colores,
                etc. que se necesitarán en un momento dado.
            </p>
            <p>
                Ayuda a planificar y, lo que es todavía mejor, permite crear un
                sistema que en un futuro podrá asumir fácilmente el diseño de
                nuevas funcionalidades, ya que probablemente ya estarán los
                átomos creados y sólo habrá que “combinarlos” de otro modo para
                crear moléculas y organismos distintos.
            </p>
        </section>
        <Challenge time="1" :id="14" :tasks="challenge14_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #14 </Heading>
            </template>
            Tomando en cuenta el resultado del Reto #13, crear el Diseño Atómico
            de la pagina principal de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Creación de componentes"
                    type="tool"
                    :src="imageFigma"
                    href="https://figma.com/"
                />
                <ResourceCard
                    title="Ejemplos"
                    description="Atomic Design"
                    type="download"
                    href="https://www.figma.com/community/file/1073848703449461140"
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
