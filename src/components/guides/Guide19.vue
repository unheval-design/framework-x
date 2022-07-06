<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-19/image_1.png';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿En qué consisten las puebas A/B?',
        alternatives: [
            { answer: true, description: 'En probar dos o mas versiones de nuestro producto con dos grupos de usuarios.' },
            { answer: false, description: 'En probar dos veces nuestro producto con dos grupos de usuarios diferentes.' },
            { answer: false, description: 'En probar dos productos diferentes para encontrar mejoras y errores entre estos.' }
        ]
    },
    {
        id: 2,
        question: '¿Cuándo necesitamos usar la prueba de los cinco segundos?',
        alternatives: [
            { answer: true, description: 'Si necesito saber si los usarios entienden la finalidad del producto en un tiempo muy corto.' },
            { answer: false, description: 'Cuando quiero saber si mis usuarios pueden cumplir una tarea importante en cinco segundos.' },
            { answer: false, description: 'Si necesito comprobar la optimizacion y velocidad con la que cargan los elementos en mi interfaz.' }
        ]
    }
]);
</script>

<template>
    <GuideTitle>
        Pruebas UX
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Las pruebas de usabilidad son una herramienta poderosa para
                evaluar la funcionalidad de un sitio web y asegurarse de que las
                personas puedan navegarlo de manera eficiente. En esta sección,
                exploramos diferentes métodos de prueba de usabilidad, cuándo
                debe usarlos y por qué.
            </p>
        </section>
        <Heading type="h1">Pruebas A/B</Heading>
        <section>
            <p>
                Es un método de investigación que nos permite conocer si
                determinados cambios en un producto digital surten efectos en
                nuestros usuarios.
            </p>
            <p>
                El funcionamiento de este test consiste en dividir el tráfico
                que recibe la página y derivar una parte a la variante A y el
                resto a la variante B.
            </p>
            <p>
                De esta manera una parte de los usuarios usaran la interfaz que
                usan de forma habitual (A) y la otra parte probarán una version
                modificada de la interfaz (B). Asi podremos saber qué variante
                funciona mejor: si aquella “normal/habitual” o la que tiene la
                modificación concreta.
            </p>
            <p>
                Existen diferentes tipos de pruebas o test entre los más
                destacados se encuentran los siguientes:
            </p>
            <Heading type="h2">Prueba A/B/n</Heading>
            <p>
                Es un experimento aleatorio que utiliza dos o más variantes de
                la misma página web. Siempre se utiliza la variante original
                (A). Las variantes de la B a la n contienen uno o más de un
                elemento que se han modificado partiendo de la versión original.
            </p>
            <p>
                Este tipo de prueba suele ser el más utilizado. Se suele
                utilizar por ejemplo cuando queremos cambiar el color o el copy
                de un botón y medir cuántos clics consigue cada una de las
                variantes.
            </p>
            <Heading type="h2">Test multivariante</Heading>
            <p>
                Este tipo de test se realiza cuando se modifican varios
                elementos en una misma página web de forma simultánea para
                comprobar que composición es la más efectiva y arroja un mejor
                resultado.
            </p>
            <p>
                Este tipo de test mide el impacto de cada uno de los elementos
                que se han modificado y como han afectado al objetivo que se ha
                definido previamente.
            </p>
            <Heading type="h2">Prueba de redirección</Heading>
            <p>
                En este tipo de prueba se utilizan URL diferentes para cada
                versión que ayudan a testar dos páginas web independientes entre
                sí. Se utiliza frecuentemente para cuando se realiza un rediseño
                y tanto la estructura como el diseño UI es completamente nuevo
                con respecto a la versión original.
            </p>
        </section>
        <Heading type="h1">Prueba de cinco segundos</Heading>
        <section>
            <p>
                La prueba de cinco segundos es una forma de prueba de usabilidad
                que le permite medir qué tan bien un diseño comunica rápidamente
                un mensaje. Este tipo de prueba proporciona comentarios tanto
                cuantitativos como cualitativos que le ayudan a optimizar un
                diseño.
            </p>
            <p>
                La imagen que pruebe puede ser un sitio web, un diseño de
                aplicación, un prototipo, un logotipo o una copia, cualquier
                cosa que necesite comunicar un mensaje.
            </p>
            <Heading type="h2">Preguntas comunes</Heading>
            <p>
                Si bien hay muchos usos para la prueba de cinco segundos, los temas más comunes son:
            </p>
            <p>
                <ul>
                    <li>¿La gente entiende el producto o servicio?</li>
                    <li>¿Sienten las personas que recibirán un beneficio de la página?</li>
                    <li>¿Puede la gente recordar el nombre de la empresa o del producto?</li>
                </ul>
            </p>
            <p>
                Estas preguntas son importantes, porque si una página comunica rápida y fácilmente toda esta información, es más probable que capte a la audiencia adecuada. Este es un factor clave a la hora de diseñar mejoras enfocadas a aumentar la conversión y el engagement.
            </p>
            <Heading type="h2">¿Cómo interpretar los resultados?</Heading>
            <p>
                Una de las mejores cosas de las pruebas de cinco segundos es que analizar los resultados es una tarea sencilla. En general, puede simplemente clasificar los resultados en un grupo de participantes que "lo entendieron" y otro que no.
            </p>
            <p>
                Si más del 80% de los participantes están en el primer grupo, entonces tienes un diseño exitoso en tus manos. Si este número es mucho más bajo, es probable que se necesiten algunos cambios.
            </p>
            <p>
                Es fundamental mirar los comentarios de texto libre de ambos grupos. A veces, las opiniones de los participantes que no entendieron el punto convergerán en ideas o temas similares. Esta es una clara indicación de que hay una pista falsa en su diseño que está desconcertando a la gente.
            </p>
        </section>
        <Heading type="h1">Prueba del primer click</Heading>
        <section>
            <p>
                La prueba del primer clic es un método para medir la usabilidad de un sitio web, una aplicación o un diseño al descubrir qué tan fácil es completar una tarea determinada.
            </p>
            <p>
                El objetivo de la prueba del primer click es verificar que el primer click que un usuario hace en una interfaz para realizar una tarea determinada es claro y fácil.
            </p>
            <Heading type="h2">¿Cómo funciona?</Heading>
            <p>
                En una prueba de primer click, al participante se le asigna una tarea (por ejemplo, "¿Dónde haría clic para comprar este producto?") y luego se le muestra una imagen de una interfaz, en la que debe hacer clic para completar la tarea.
            </p>
            <p>
                Se registra la posición de su click, junto con el tiempo que tardaron en hacer click. También se pueden recopilar más comentarios al final de la prueba pidiéndole al usuario que explique por qué hizo clic donde lo hizo.
            </p>
            <Heading type="h2">Beneficios clave</Heading>
            <p>
                Visualizar exactamente dónde hacen click las personas brinda una gran perspectiva del diseño. Los clicks que ocurren en lugares inesperados pueden resaltar partes confusas de una interfaz y son útiles para informar futuras opciones de diseño.
            </p>
        </section>
        <Heading type="h1">Mapa de calor</Heading>
        <section>
            <p>
                Un mapa de calor es una visualización de datos que muestra cómo los usuarios del sitio web hacen clic, se desplazan y se mueven en la página. La parte "caliente" del nombre proviene de la escala de colores: el rojo representa las áreas populares (calientes) de la página y el azul las áreas menos populares (frías).
            </p>
            <Reference
                :image="imageOne"
                description="Mapas de calor. Fuente: hotjar.com"
            />
            <p>
                Puede recopilar datos de mapas de calor en cualquier página del sitio web en dispositivos de escritorio y móviles, y visualizarlos de diferentes maneras:
            </p>
            <p>
                <ul>
                    <li>Haga clic en mapas: resalta dónde los usuarios hacen clic con el mouse (o toque en dispositivos móviles)</li>
                    <li>Mapas de desplazamiento: resalta dónde se desplazan los usuarios en una página</li>
                    <li>Mapas de movimiento: resalta el movimiento del mouse del usuario (sin hacer clic)</li>
                </ul>
            </p>
        </section>
        <Heading type="h1">Evaluación</Heading>
        <section>
            <p>Valida tu aprendizaje</p>
            <Evaluation :questions="questions" />
        </section>
    </GuideBody>
</template>

<style></style>
