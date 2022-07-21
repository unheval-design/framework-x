<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-17/image_1.png';
import imageTwo from '@/assets/images/guide-17/image_2.gif';
import imageThree from '@/assets/images/guide-17/image_3.gif';
import imageFour from '@/assets/images/guide-17/image_4.gif';
import imageFive from '@/assets/images/guide-17/image_5.gif';
import imageFigma from '@/assets/images/brands/figma.png';
import imageFramer from '@/assets/images/brands/framer.png';
import imageCode from '@/assets/images/brands/code.png';
import imageLottie from '@/assets/images/brands/lottie.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';

const projectName = inject('projectName');
const questions = ref([
    {
        id: 1,
        question: '¿Cual es el objetivo de las microinteracciones?',
        answer: 2,
        alternatives: [
            {
                id: 1,
                description:
                    'Estandarizar conceptos, componentes y patrones que serán reutilizados.'
            },
            {
                id: 2,
                description:
                    'Deleitar al usuario; para crear un momento atractivo y más humano.'
            },
            {
                id: 3,
                description:
                    'Ver como interactuan las diferentes vistas en conjunto.'
            }
        ]
    },
    {
        id: 2,
        question:
            '¿En qué consiste la retroalimentación en las microinteracciones?',
            answer: 3,
        alternatives: [
            {
                id: 1,
                description:
                    'Es la mejora que el usuario puede aportar acerca de una interacción realizada.'
            },
            {
                id: 2,
                description:
                    'Es la opinión que tiene el usuario luego de ejecutar una tarea o acción en la interfaz.'
            },
            {
                id: 3,
                description:
                    'La respuesta que ve el usuario luego de ejecutar un disparador o realizar una acción.'
            }
        ]
    }
]);

const challenge17_tasks = [
    'Crear una microinteracción de disparador',
    'Crear una microinteracción de reglas',
    'Crear una microinteracción de retroalimentación',
    'Crear una microinteracción de bucles y modos'
];
</script>

<template>
    <GuideTitle>
        Microinteracciones
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                La microinteracción es una de las cosas clave a tener en cuenta en el diseño de UI/UX. Son, quizás, la mejor prueba de que la atención a los pequeños detalles es capaz de dar grandes y poderosos resultados.
            </p>
            <p>
                Las microinteracciones son eventos que tienen una tarea principal, un solo propósito, y se encuentran en todo su dispositivo y dentro de las aplicaciones. Su finalidad es deleitar al usuario; para crear un momento atractivo y más humano.
            </p>
        </section>
        <Heading type="h1">Tipos de microinteracción</Heading>
        <section>
            <p>
                Según Dan Saffer, diseñador de productos sénior del personal
                de Twitter y autor de "Microinteractions: Designing with
                Details” hay cuatro partes de una microinteracción.
            </p>
            <Heading type="h2">Disparador</Heading>
            <p>
                También llamado Trigger por su definición en ingles, define qué
                elemento o acción va a poner en marcha la microinteracción, ésta
                puede ser accionada por el usuario o por el sistema. Uno de los
                más famosos disparadores es el famoso “Me gusta” de Facebook.
            </p>
            <Reference
                :image="imageTwo"
                description="Iconos animados de llamar a la acción. Author: Margarita Ivanchikova"
            />
            <Heading type="h2">Reglas</Heading>
            <p>
                La regla define las variantes que deben suceder para que la
                microinteracción se accione. La regla generalmente no se
                visualiza al usuario, en un formulario por ejemplo, las reglas
                son las que definen cuales son los elementos básicos de llenado
                para que éste sea completado de forma correcta. Por ejemplo, en
                el input de contraseña, la regla sería introducir la password
                correcta.
            </p>
            <Reference
                :image="imageThree"
                description="Microinteracciones en un data input. Author: Gustavo Gómez"
            />
            <Heading type="h2">Retroalimentación</Heading>
            <p>
                Mejor conocido como Feedback, es la respuesta que el usuario ve
                cuándo es accionado el disparador, aunque puede llegar a ser
                imperceptible es lo que se acciona como respuesta a algo. En el
                formulario sería la respuesta de llenado correcto o incorrecto
                antes o después de ser enviado.
            </p>
            <Reference
                :image="imageFour"
                description="Animación de correcto e incorrecto en un input de contraseña. Author: Aaron Iker"
            />
            <Heading type="h2">Bucles y Modos</Heading>
            <p>
                Los bucles y modos definen las metarreglas de la
                microinteracción y cómo cambia la microinteracción cuando se usa
                repetidamente. Por ejemplo, en el comercio electrónico, un botón
                "Cómpralo ahora" podría cambiar a "Comprar otro" cuando el
                usuario haya comprado el artículo anteriormente.
            </p>
            <Reference
                small
                :image="imageFive"
                description="Animación de un boton de favorito. Author: Aaron Iker"
            />
        </section>
        <Heading type="h1">¿Cuándo usar Microinteracciones?</Heading>
        <section>
            <p>
                En el mundo de UX/UI, aunque son pequeñas, las microinteracciones se promocionan como el centro neurálgico cuando se trata de comunicarse con el usuario. A continuación se muestran las siete microinteracciones principales y su impacto en la experiencia del usuario:
            </p>
            <p>
                <ul>
                    <li>
                        <strong>Deslizar</strong>
                        <br>
                        La acción Deslizar elimina el toque y es mucho más interactiva y
                        fluida. Ayuda al usuario a cambiar rápidamente entre las
                        pestañas y adquirir más información sobre el producto.
                    </li>
                    <li>
                        <strong>Entrada de datos</strong>
                        <br>
                        Todos conocemos las frustraciones de establecer una contraseña o crear una cuenta. Esta acción puede levantar fácilmente los pelos de punta. Si bien las sugerencias proactivas sobre la seguridad y el uso de la contraseña facilitan que el usuario avance, algunas interacciones interactivas en el momento de la entrada de datos también mantienen a los usuarios comprometidos con el proceso y ayudan a lograr el objetivo.
                    </li>
                    <li>
                        <strong>Animaciones</strong>
                        <br>
                        La animación simplemente habilita y mejora las microinteracciones. Personifican el buen diseño; su presencia puede no ser notada, pero la ausencia afecta a todos. Actúan como un pegamento que ayuda a los diseñadores a hacer que los procesos más simples sean interesantes y adictivos. Pero tenga mucho cuidado, ya que están destinados a atraer a los usuarios y no distraerlos o frustrarlos; el procesamiento retrasado o la introducción de un nuevo estilo en el sitio web puede causar confusión.
                    </li>
                    <li>
                        <strong>Call to Action</strong>
                        <br>
                        Empuja al usuario a interactuar con una aplicación o sitio web. El llamado a la acción infunde una sensación de logro y también un factor de empatía en el comportamiento del usuario y la mejor manera de hacer que su usuario interactúe con el CTA es hacerlo atractivo para atraer el interés del usuario.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1">¿Cómo diseñar Microinteracciones?</Heading>
        <section>
            <p>
                Hacer microinteracciones es emocionante para los diseñadores, porque es posible experimentar nuevas soluciones de diseño y buscar nuevas formas de sorprender a los usuarios. Pero para hacerlo debes tener en cuenta algunas cosas:
            </p>
            <p>
                <ol>
                    <li>Ponte en el lugar de los usuarios y usa todo lo que tengas para descubrir cómo usan tu aplicación.</li>
                    <li>Crear animaciones funcionales. Animaciones que no solo tienen una estética sino que pueden mejorar la experiencia del usuario.</li>
                    <li>Diviértete y entretiene a tus usuarios. Lo que el usuario siente cuando usa la aplicación es la razón por la que la sigue usando. Si el usuario disfruta de la experiencia y la encuentra agradable, vuelve.</li>
                    <li>No seas molesto. Demasiadas animaciones tienen el efecto contrario en los usuarios. Los usuarios molestos hacen que se mantengan alejados de su aplicación.</li>
                    <li>Utilizar un lenguaje humano y no técnico. Una copia divertida e irónica puede hacerte olvidar por un momento lo frustrante que puede ser una página en blanco dentro de la aplicación.</li>
                </ol>
            </p>
        </section>
        <Challenge time="30" :id="17" :tasks="challenge17_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #17 </Heading>
            </template>
            Crea microinteracciones para "{{projectName}}".
            <template v-slot:tools>
                <ResourceCard
                    title="Lottie"
                    description="Libreria y recursos"
                    type="tool"
                    :src="imageLottie"
                    href="https://lottiefiles.com/"
                />
                <ResourceCard
                    title="Figma"
                    description="Componente funcional"
                    type="tool"
                    :src="imageFigma"
                    href="https://figma.com/"
                />
                <ResourceCard
                    title="Framer"
                    description="Componente interactivo"
                    :src="imageFramer"
                    href="https://www.framer.com/"
                />
                <ResourceCard
                    title="VS Code"
                    description="Componente implementado"
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
