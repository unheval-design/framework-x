<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
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
import imageXcode from '@/assets/images/brands/xcode.png';
import imageAndroid from '@/assets/images/brands/android.png';

const question1 = {
    question: '¿Para qué hacemos diseño de interacciones?',
    answer: 1,
    alternatives: [
        'Para que el proceso de usar nuestro producto sea mas entretenido para los usuarios.',
        'Para mejorar las funcionalidades de los elementos de la interfaz.',
        'Para mejorar la comunicación que existe entre la interfaz y el usuario.'
    ]
};

const question2 = {
    question: '¿En qué consiste la retroalimentación en las microinteracciones?',
    answer: 3,
    alternatives: [
        'Es la mejora que el usuario puede aportar acerca de una interacción realizada.',
        'Es la opinión que tiene el usuario luego de ejecutar una tarea o acción en la interfaz.',
        'La respuesta que ve el usuario luego de ejecutar un disparador o realizar una acción.'
    ]
};
</script>

<template>
    <GuideTitle>
        Diseño de Interacción(IxD)
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                El diseño de interacción, a menudo abreviado como IxD, es la
                práctica de diseñar productos y servicios digitales
                interactivos. John Kolko, autor de Thoughts on Interaction
                Design, da la siguiente definición de diseño de interacción: “El
                diseño de interacción es la creación de un diálogo entre una
                persona y un producto, sistema o servicio. Este diálogo es tanto
                de naturaleza física como emocional y se manifiesta en la
                interacción entre la forma, la función y la tecnología tal como
                se experimenta a lo largo del tiempo”.
            </p>
            <p>
                Por tanto, en este punto necesitamos fusionar la interfaz que
                diseñamos con la experiencia de usuario para mejorar la
                comunicacion que existe entre nuestro producto y el usuario.
            </p>
            <Reference
                :image="imageOne"
                description="UI vs IxD vs UX. Fuente: formiux.com"
            />
        </section>
        <Heading type="h1">¿Cuáles son los beneficios de IxD?</Heading>
        <section>
            <p>
                Los mayores beneficios de invertir en Diseño de Interacción
                están en los atributos que aporta al proyecto. En otras
                palabras, un diseñador de interacción garantiza un proyecto
                hermoso, fácil de usar, útil y efectivo.
            </p>
            <p>
                Además, la adopción de IxD en un proyecto da como resultado la
                mejor comunicación posible entre la interfaz, la usabilidad y la
                idea del producto, lo que aumenta las posibilidades de que los
                usuarios se involucren.
            </p>
        </section>
        <Heading type="h1">Dimensiones del IxD</Heading>
        <section>
            <p>
                Las cinco dimensiones del diseño de interacción son un modelo
                útil para comprender lo que implica el diseño de
                interacción. Gillian Crampton Smith, académica de diseño de
                interacción, introdujo por primera vez el concepto de cuatro
                dimensiones de un lenguaje de diseño de interacción. Kevin
                Silver luego amplió su modelo con la quinta dimensión.
            </p>
            <p>
                <strong>1D: Palabras.</strong>
                Las palabras deben de ser sencillas de entender y de permitir la
                interacción. Deben comunicar información a los usuarios sin
                abrumarlos con demasiados detalles.
            </p>
            <p>
                <strong>2D: Representaciones visuales.</strong>
                Cada gráfico, ilustración, diagrama, icono, foto, etc. debe de
                ser usada con cautela, pero sobre todo debe de tener un
                fundamento. Evita el uso como decoración.
            </p>
            <p>
                <strong>3D: Objetos físicos o espacio.</strong>
                Con lo que interactúa el usuario en el mundo real. Estos pueden
                ser objetos físicos de hardware como un mouse, apuntador,
                teclado, joystick, que son utilizados como herramientas de
                mando.
            </p>
            <p>
                <strong>4D: Tiempo.</strong>
                Se refiere a la duración que el usuario pasa interactuando con
                las palabras, representaciones visuales y el espacio.
            </p>
            <p>
                <strong>5D: Comportamiento.</strong>
                En la que se incluyen las emociones y reacciones que tiene el
                usuario al operar, presentar, utilizar o realizar una acción en
                el sistema.
            </p>
        </section>
        <Heading type="h1">Principios de diseño de interacción</Heading>
        <section>
            <p>
                Los 6 principios fundamentales de interacción, descritos por Don Norman. Son los siguientes:
            </p>
            <p>
                <ol>
                    <li>Visibilidad</li>
                    <li>Feedback</li>
                    <li>Restricciones</li>
                    <li>Mapeamiento</li>
                    <li>Consistencia</li>
                    <li>Affordance y significantes</li>
                </ol>
            </p>
            <p>
                Ya analizamos las interacciones en general, pero estas interacciones estan presentes principalmente en elementos pequeños o individuales que forman parte de nuestro diseño, y estos tienen pequeñas interacciones, denominadas microinteracciones, que son el foco principal cuando trabajamos en Diseño de Interaccion (IxD).
            </p>
        </section>
        <Heading type="h1">Microinteracciones</Heading>
        <section>
            <p>
                Las microinteracciones proporcionan una experiencia al usuario más comprensible y visual, son aquellos elementos sutiles de diseño que transmiten el estado de un producto digital. Su propósito principal es proporcionar una respuesta visual, una retroalimentación instantánea creando así, un momento agradable y sorprendente para el usuario.
            </p>
            <Heading type="h2">Partes de una microinteracción</Heading>
            <p>
                Según Dan Saffer, diseñador de productos sénior del personal de Twitter y autor de "Microinteractions: Designing with Details” hay cuatro partes de una microinteracción.
            </p>
            <p>
                <strong>1. Disparador</strong>
                <br>
                También llamado Trigger por su definición en ingles, define qué elemento o acción va a poner en marcha la microinteracción, ésta puede ser accionada por el usuario o por el sistema. Uno de los más famosos disparadores es el famoso “Me gusta” de Facebook.
            </p>
            <Reference
                :image="imageTwo"
                description="Iconos animados de llamar a la acción. Author: Margarita Ivanchikova"
            />
            <p>
                <strong>2. Reglas</strong>
                <br>
                La regla define las variantes que deben suceder para que la microinteracción se accione. La regla generalmente no se visualiza al usuario, en un formulario por ejemplo, las reglas son las que definen cuales son los elementos básicos de llenado para que éste sea completado de forma correcta. Por ejemplo, en el input de contraseña, la regla sería introducir la password correcta.
            </p>
            <Reference
                :image="imageThree"
                description="Microinteracciones en un data input. Author: Gustavo Gómez"
            />
            <p>
                <strong>Retroalimentación</strong>
                <br>
                Mejor conocido como Feedback, es la respuesta que el usuario ve cuándo es accionado el disparador, aunque puede llegar a ser imperceptible es lo que se acciona como respuesta a algo. En el formulario sería la respuesta de llenado correcto o incorrecto antes o después de ser enviado.
            </p>
            <Reference
                :image="imageFour"
                description="Animación de correcto e incorrecto en un input de contraseña. Author: Aaron Iker"
            />
            <p>
                <strong>Bucles y Modos</strong>
                <br>
                Los bucles y modos definen las metarreglas de la microinteracción y cómo cambia la microinteracción cuando se usa repetidamente. Por ejemplo, en el comercio electrónico, un botón "Cómpralo ahora" podría cambiar a "Comprar otro" cuando el usuario haya comprado el artículo anteriormente.
            </p>
            <Reference
                small 
                :image="imageFive"
                description="Animación de un boton de favorito. Author: Aaron Iker"
            />
            <Heading type="h2">Herramientas para crear micro interacciones</Heading>
            <p>
                Existen muchas herramientas, pero no todos saben qué funciona mejor para tareas específicas de microinteracción. Aquí están recomendaciones basadas en experiencias personales diseñando estos elementos.
            </p>
            <p>
                Si estas familiarizado con el código:
            </p>
            <p>
               Mobile:
                <ResourceLink type="tool">
                    Xcode
                    <template v-slot:popup>
                        <ResourceCard
                            title="Xcode"
                            description="Herramienta para apps IOS"
                            type="tool"
                            :src="imageXcode"
                            />
                    </template>
                </ResourceLink>,
                <ResourceLink type="tool">
                    Android studio
                    <template v-slot:popup>
                        <ResourceCard
                            title="Android studio"
                            description="Herramienta para apps Android"
                            type="tool"
                            :src="imageAndroid"
                            />
                    </template>
                </ResourceLink>.
                Mobile or Web:
                <ResourceLink type="tool">
                    Framer
                    <template v-slot:popup>
                        <ResourceCard
                            title="Framer"
                            description="Herramienta para prototipos"
                            type="tool"
                            :src="imageAndroid"
                            />
                    </template>
                </ResourceLink>.
                Web: CSS animation
            </p>
            <p>
                Si deseas crear transiciones entre pantallas:
                <ResourceLink type="tool">
                    Figma
                    <template v-slot:popup>
                        <ResourceCard
                            title="Figma"
                            description="Herramienta para prototipos"
                            type="tool"
                            :src="imageFigma"
                            />
                    </template>
                </ResourceLink>,
                <ResourceLink type="tool">
                    Framer
                    <template v-slot:popup>
                        <ResourceCard
                            title="Framer"
                            description="Herramienta para prototipos"
                            type="tool"
                            :src="imageFramer"
                            />
                    </template>
                </ResourceLink>.
            </p>
            <p>
                Si deseas crear interacciones mas detalladas: Principle, origami Studio y Protopie
            </p>
            <p>
                Si deseas crear interacciones con avanzado detalle de animación: After Effects + Lottie
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
