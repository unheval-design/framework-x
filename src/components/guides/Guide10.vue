<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-10/image_1.png'
import imageTwo from '@/assets/images/guide-10/image_2.png'
import imageThree from '@/assets/images/guide-10/image_3.png'
import Blockquote from '@/components/Blockquote.vue';
import Heading from '@/components/Heading.vue';

const question1 = {
    question: '¿Por qué los flujos de usuario ayudan a hacer una interfaz intuitiva para el usuario?',
    answer: 1,
    alternatives: [
        'Por que esta validado por los mismos usuarios para ser facil y rapido de navegar.',
        'Por que fue diseñado por profesionales UX.',
        'Por que estandarizan la forma en que cualquier usuario navega en una interfaz.'
    ]
};

const question2 = {
    question: 'Si deseo representar una tarea que no presenta complejidad de escenarios o rutas, podria usar:',
    answer: 3,
    alternatives: [
        'Flujo de tareas.',
        'Wireflows.',
        'Flujo de usuario.'
    ]
};
</script>
<template>
    <GuideTitle>
        Flujo de Usuario
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                Un flujo de usuario es un diagrama que muestra de un vistazo la ruta que tomará su usuario a través de su aplicación o sitio web para lograr un objetivo determinado. Puede crear flujos de usuarios en cualquier etapa de la fase de diseño y esto ayudará a determinar la arquitectura de la información.
            </p>
            <Blockquote>
                El diagrama de flujo comienza con el punto de entrada del consumidor al producto, como una pantalla de incorporación o una página de inicio, y termina con la acción o resultado final, como comprar un producto o registrarse para obtener una cuenta.
            </Blockquote>
            <p>
                Aquí hay algunas preguntas básicas que debe tener en cuenta para crear un flujo de usuarios sólido:
            </p>
            <p>
                <ul>
                    <li>¿Qué está tratando de lograr el usuario?</li>
                    <li>¿Qué es importante para el usuario y qué le dará confianza para continuar?</li>
                    <li>¿Qué información adicional necesitará el usuario para realizar la tarea?</li>
                    <li>¿Cuáles son las dudas o barreras del usuario para realizar la tarea?</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >¿Por qué usamos flujos de usuario?</Heading>
        <section>
            <p>Estudiar el flujo de usuarios de un sitio web o una aplicación puede resultar útil, ya sea que esté diseñando un producto nuevo o renovando uno antiguo. Son muy útiles si necesita:</p>
            <Heading type="h2" >Crear una interfaz intuitiva</Heading>
            <p>Una flujo que pueda estar validado por los mismos usuarios aumentara la probabilidad de uso o consumo del servicio. Otro beneficio es mejorar la facilidad de movimiento a través de su plataforma, asegurándose de que el tiempo del usuario no se desperdicie buscando qué hacer a continuación. Los flujos de usuarios representan estos posibles patrones de una manera que facilita a los diseñadores evaluar la eficiencia de la interfaz que están creando.</p>
            <Heading type="h2" >Evaluar las interfaces existentes</Heading>
            <p>Para los productos que ya están en uso, los diagramas de flujo de usuarios ayudan a determinar qué funciona, qué no y qué áreas necesitan mejoras. Ayuda a identificar por qué los usuarios pueden estar estancados en un punto determinado y qué puede hacer para solucionarlo. ¿Fluye una pantalla en la siguiente? ¿Tiene sentido el patrón de las pantallas? Mapear el movimiento dentro de una interfaz en forma de modelo le ayuda a ver qué opciones tiene el usuario en cada página y si las rutas disponibles ayudan al usuario a realizar una tarea de forma innata y sin perder tiempo.</p>
            <Heading type="h2" >Presentar su producto a clientes o colegas</Heading>
            <p>Los flujos de usuarios también sirven para comunicar fácilmente el funcionamiento del producto a las partes interesadas y brindan una vista general de cómo se pretende que la interfaz que ha creado funcione de la forma más eficiente.</p>
            <p>Ayudan a su equipo de diseño a visualizar cómo se moverán los usuarios a través del producto lo que permite un ambiente de trabajo más productivo y gratificante.</p>
        </section>
        <Heading type="h1" >¿Cuándo hacer los flujos de usuario?</Heading>
        <section>
            <p>Los flujos de usuario se sintetizan temprano, durante las etapas de planificación de su diseño, después de que se haya realizado la investigación del usuario. Los diagramas de flujo también se pueden hacer para las interfaces existentes para mejorar la experiencia del usuario o aclarar cualquier problema que los usuarios tengan con la interfaz.</p>
            <p>Una vez que haya recopilado sus datos de las pruebas de usuario, los flujos de usuario ayudan a determinar cuántas pantallas se necesitan, en qué orden deben aparecer y qué componentes deben estar presentes.</p>       
            <Blockquote>Presentar un diagrama de flujo detallado puede ayudar a validar sus decisiones de diseño a sus colegas. Sin embargo, los diseños se revisan constantemente y los flujos de usuarios pueden revisarse y editarse si la investigación adicional lo considera necesario.</Blockquote>
        </section>
        <Heading type="h1" >Tipos de diagramas de Flujo de Usuario</Heading>
        <section>
            <p>Los flujos de UX se pueden usar para todo tipo de interfaz y diseño web, pero ciertos tipos de diagramas de flujo son más valiosos que otros según lo que estés creando. Aquí describimos algunas de las variaciones de flujo de usuario y cuándo usarlas.</p> 
            <Heading type="h2" >Flujos de Tareas</Heading>
            <p>Se centran en cómo los usuarios viajan a través de la plataforma mientras realizan una tarea específica. Por lo general, muestran solo una ruta y no incluyen múltiples ramas o rutas como lo haría un flujo de usuario tradicional. Estos se utilizan mejor cuando la tarea que se analiza se realiza de manera similar por todos los usuarios.</p>
            <Blockquote>Cuando se utilizan flujos de tareas, se supone que todos los usuarios compartirán un punto de partida común y no tendrán variabilidad en la forma en que se lleva a cabo la tarea.</Blockquote>
            <Reference
                :image="imageOne"
                description="Task Flow. Fuente: careerfoundry.com" />
            <Heading type="h2" >Wireflows</Heading>
            <p>Son una combinación de wireframes y diagramas de flujo. Utilizan el diseño de pantallas individuales como elementos dentro del diagrama. </p>
            <p>Los Wireflows son especialmente buenos cuando se crean pantallas móviles. El tamaño relativamente pequeño de las pantallas móviles se usa fácilmente para reemplazar las formas más abstractas de los diagramas de flujo.</p>
            <Blockquote>Los wireframes por sí solos ayudan a transmitir el diseño en cada página individual, pero carecen de la capacidad de comunicar el flujo de página a página de las interfaces muy dinámicas.</Blockquote>
            <Reference
                :image="imageTwo"
                description="Wireflow. Fuente: careerfoundry.com" />
            <Heading type="h2" >Flujos de Usuario</Heading>
            <p>Los flujos de usuarios se centran en la forma en que su público objetivo interactuará con el producto. Hacen hincapié en que es posible que no todos los usuarios realicen tareas de la misma manera y que viajen por diferentes caminos. Por lo general, se adjuntan a una persona específica y un punto de entrada. Por lo tanto, al usar este tipo de diagrama de flujo, es posible que tenga muchos escenarios diferentes que comiencen en diferentes lugares. Sin embargo, la tarea o logro principal suele ser siempre el mismo.</p>
            <Reference
                :image="imageThree"
                description="User Flow. Fuente: careerfoundry.com" />
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
