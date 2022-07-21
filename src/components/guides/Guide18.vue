<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-18/image_1.png';
import imageTwo from '@/assets/images/guide-18/image_2.png';
import imageThree from '@/assets/images/guide-18/image_3.png';
import imageCode from '@/assets/images/brands/code.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';

const projectName = inject('projectName');
const questions = ref([
    {
        id: 1,
        question: '¿En cuál de estos proyectos seria recomendable usar un CMS?',
        answer: 2,
        alternatives: [
            {
                id: 1,
                description: 'Para promocionar un evento de emprendedores.'
            },
            {
                id: 2,
                description: 'Publicación de noticias de la Universidad.'
            },
            {
                id: 3,
                description: 'Control de asistencia para un colegio.'
            }
        ]
    },
    {
        id: 2,
        question:
            '¿Cuál seria la razon principal para escojer el desarrollo de una aplicación móvil nativo?',
        answer: 1,
        alternatives: [
            {
                id: 1,
                description:
                    'Se necesita aprovechar los componentes físicos de telefono o del sistema operativo.'
            },
            {
                id: 2,
                description:
                    'Se necesita mejorar el sistema de interacción con el usuario.'
            },
            {
                id: 3,
                description:
                    'Se piensa replicar en diferentes tipos de telefonos.'
            }
        ]
    }
]);

const challenge18_tasks = [
    'Preparar entonrno de desarrollo (HTMl, JS, CSS)',
    'Implementar sitio basado en el Reto #16'
];
</script>

<template>
    <GuideTitle>
        Implementación
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Llegado el punto donde tenemos que comenzar con el desarrollo
                del producto, es decir convertir nuestros prototipos en el
                producto real. En este pundo hay que tomar muchas deciciones
                importantes con respecto a la infrestructura tecnologia que
                necesitamos para nuestro proyecto, como por ejemplo el lenguaje
                de programación o la base de datos mas adecuado para el
                producto, si es que vamos a programar.
            </p>
            <p>
                Te dejaremos algunos tipos de implementación que puede tomar tu
                proyecto a partir de este punto.
            </p>
        </section>
        <Heading type="h1">Builders</Heading>
        <section>
            <p>
                Si nuestro proyecto es una página web simple e informativa, las
                denominadas Landing Page, es muy probable que quieras una
                implementación rápida sin tener que codificar. Para estos tipos
                de implementación existen soluciones con tecnologia “drag and
                drop” que consta de arrastrar y soltar elementos hacia la
                interfaz, uno de los mas conocidos es Wix.
            </p>
            <Reference
                :image="imageOne"
                description="El contructor de páginas web de Wix. Fuente: pcmag.com"
            />
        </section>
        <Heading type="h1">CMS</Heading>
        <section>
            <p>
                Los Content Managment System (CMS), en español sistema de
                administración de contenido, son constructores y gestores de
                contenido los cuales por lo general necesitan un nivel de
                coconocimiento medianamiente técnico para poder construir
                proyectos tipo blog o hasta incluso tiendas en linea. Algunos de
                los mas conocidos son WordPress y Joomla.
            </p>
            <Reference
                :image="imageTwo"
                description="Constructor de páginas Divi, plugin para Wordpress. Fuente: wpbeginner.com"
            />
        </section>
        <Heading type="h1">Codificación</Heading>
        <section>
            <p>
                Cuando pensamos en hacer nuestro proyecto por programación
                tenemos en mente control y escalabilidad, debido a que podemos
                abordar cualquier funcionalidad que el proyecto lo requiera a
                nivel experiencia, visual o de infraestructura, lo que conlleva
                a un nivel de conocimiento mas avanzado.
            </p>
            <p>
                En este basto mundo de la programación existen muchas
                tecnologias, estas por lo general deben ser convinadas con otras
                y puede ser facil abrumarse o no saber cuál elegir. Aqui te
                dejamos algunas recomendaciones de acuerdo al tipo de proyecto.
            </p>
            <Reference
                :image="imageThree"
                description="Interfaz del IDE Android Studio. Fuente: developer.android.com"
            />
            <Heading type="h2">Landing Page</Heading>
            <p>
                Para construir una web informativa, de una página, simple
                necesitaremos de tecnologias base para la web: HTML, CSS y
                JavaScript, cada una de estas pueden ser potenciadas para un
                mejor trabajo. Por ejemplo HTML puede usar Pug, para trabajar
                con estilos se recomienda usar SASS en lugar de directamente
                CSS.
            </p>
            <Heading type="h2">Sitio Web</Heading>
            <p>
                Vamos a denominar sitio web, cuando nuestro proyecto tiene
                varias vistas e incluso funcionadidades como de un formulario de
                contacto.
            </p>
            <p>
                Al igual que en el anterior vamos a requerir las tecnologias
                base para la web, adicionalmente podriamos empezar a usar
                librerias y frameworks, en especial para Javascript. Los mas
                conocidos son ReactJS, VueJS y Angular.
            </p>
            <Heading type="h2">Aplicación Web</Heading>
            <p>
                Para este tipo de proyectos, vamos a usar tecnologias anteriores
                para construir interfaces para el usuario(Front-end) pero
                también vamos a requerir de un lenguaje de programación que
                procese y gestione la información en el lado del
                servidor(Back-end), los lenguajes Back-end mas utilizados son
                NodeJS, Python, Java, C# entre otros, cada uno tiene sus pros y
                sus contras, por lo que es recomendable que escoja el que sea
                mejor para su proyecto.
            </p>
            <p>
                Adicionalmente, es posible que necesite una Base de Datos, si
                necesita tener una arquitectura estructura pude usar PostgreSQL
                o MySQL. Si por el contrario va optar por una no estructurada,
                es recomendable que use MongoBD.
            </p>
            <Heading type="h2">Aplicación Móvil</Heading>
            <p>
                Para hacer aplicaciones para telefonos inteligentes(apps)
                existen 2 opciones: Desarrollo Nativo o Desarrollo Hibrido.
            </p>
            <p>
                Optariamos por el desarrollo nativo si necesitamos aprobechar
                los recursos nativos del sistema operativo o sus componentes
                físicos, como por ejemplo la bateria o el giroscopio. Los
                lenguajes de programación principales para este tipo de
                aplicaciones son JAVA, KOTLIN para Sistemas operativos Android y
                SWIFT para iOS.
            </p>
            <p>
                Por otra parte, el desarrollo hibrido se ha caracterizados por
                usar tecnologias multiproposito, es decir lenguajes que ya usas
                para hacer otro tipo de aplicaciones, tambien ligado a eso
                tienen la caracteristica de ser multiplataforma y ser muy
                personalizables en cuanto al diseño visual y de interacciones
                debido al tipo de tecnologia que se usa. Los lenguajes mas
                reconocidos para hacer este tipo de aplicaciones son Flutter,
                Xamarin o las librerias para JavaScript como React Native.
            </p>
            <Heading type="h2">Aplicación de Escritorio</Heading>
            <p>
                Las aplicaciones de escritorio aun son una buena opción cuando
                queremos aprovechar los recursos nativos de un sistema operativo
                y de sus componentes de hardware. Los lenguajes de programación
                que mas resaltan en este campo son C# y su interfaz de
                desarrollo Visual Studio. Pero también puede optar por JAVA, su
                principal diferencia podria ser que es multiplataforma entre
                sistemas operativos que soporten JRE como por ejemplo las
                distribuciones de Linux y Windows.
            </p>
        </section>
        <Challenge time="60" :id="18" :tasks="challenge18_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #18 </Heading>
            </template>
            Crea el Sitio Web de "{{ projectName }}".
            <template v-slot:tools>
                <ResourceCard
                    title="VS Code"
                    description="Herramientas e implementación "
                    type="tool"
                    :src="imageCode"
                    href="https://code.visualstudio.com/"
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
