<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Heading from '@/components/Heading.vue';
import Blockquote from '@/components/Blockquote.vue';
import imageOne from '@/assets/images/guide-4/image_1.png'
import imageTwo from '@/assets/images/guide-4/image_2.png'
import Reference from '@/components/Reference.vue';

const question1 = {
    question: '¿Cuándo hacer el benchmarking?',
    answer: 1,
    alternatives: [
        'Antes de la fase definir o después de la fase de pruebas.',
        'Antes de las pruebas o después de empatizar.',
        'Después de definir o antes de las pruebas.'
    ]
};

const question2 = {
    question: 'Si estoy trabajando en un producto nuevo ¿Contra que puedo hacer el benchmarking?',
    answer: 3,
    alternatives: [
        'Con un producto estándar en la industria.',
        'Con un producto similar de mi empresa.',
        'Con un producto que me sea familiar y sepa sus características.'
    ]
};
</script>
<template>
    <GuideTitle>
        UX Benchmarking
        <template v-slot:timeRead>8</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                Nos referimos a la evaluación comparativa como una práctica
                porque, idealmente, una vez que comienza la evaluación
                comparativa, puede realizar un seguimiento de su progreso a lo
                largo del tiempo, una y otra vez, rediseño tras rediseño: es un
                proceso continuo.
            </p>
            <p>
                Esencialmente, la evaluación comparativa implica recopilar 
                datos cuantitativos que describen la experiencia. Por ejemplo,
                podríamos recopilar cualquiera de las siguientes métricas de UX:
            </p>
            <p>
                <ul>
                    <li>Tiempo promedio para hacer una compra.</li>
                    <li>Número de clics en un botón ”Enviar”.</li>
                    <li>Tasa de éxito para completar una solicitud.</li>
                    <li>Calificación promedio de facilidad de uso para crear una cuenta.</li>
                    <li>Tasa de retención de ocho semanas para una aplicación (porcentaje de usuarios que siguen usando la aplicación después de ocho semanas).</li>
                </ul>
            </p>
            <Blockquote>Puede recopilar esas métricas de UX utilizando potencialmente cualquier metodología cuantitativa; pero los análisis, las encuestas y las pruebas de usabilidad cuantitativas son los tres métodos que a menudo funcionan mejor para la evaluación comparativa.</Blockquote>
            <p>Una vez que tienes esos números, tienes que compararlos con algo. Un solo número no tiene sentido, ya que no tienes idea de si es bueno o malo. Con la evaluación comparativa, puede comparar sus métricas de UX con cuatro posibles puntos de referencia diferentes:</p>
            <p>Por ejemplo:</p>
            <p><strong>Una versión anterior del producto o servicio:</strong> En 2019, el tiempo promedio para realizar una compra fue de 58 segundos. Después de nuestro reciente rediseño, el tiempo promedio para realizar una compra ahora es de 43 segundos.</p>
            <p><strong>Un competidor:</strong> Nuestra tasa de éxito para completar la solicitud es del 86%, mientras que la de nuestros competidores es del 62%.</p>
            <p><strong>Un estándar de la industria:</strong> La calificación promedio de facilidad de uso para crear una cuenta en el sitio web de nuestro hotel es 5.3/7. La calificación promedio de facilidad de uso para esa tarea en un estudio de los 6 principales sitios web de hoteles fue 6.5/7.</p>
            <p><strong>Un objetivo determinado por las partes interesadas:</strong> Nuestra tasa de retención de ocho semanas es del 8%, pero nuestro objetivo es al menos el 15%.</p>
            <Blockquote>Al empezar puede que no tenga versiones anteriores de su producto/servicio por lo que es bueno comparar con un competidor o estándar de la industria.</Blockquote>
        </section>
        <Heading type="h1" >¿Cuándo hacer benchmarking?</Heading>
        <section>
            <p>
                El benchmarking puede ocurrir al final de un ciclo de diseño (por ejemplo, después de la fase de pruebas) y antes de que comience el próximo ciclo (por ejemplo, antes de la fase definir).
            </p>
            <Reference
                :image="imageOne"
                description="Benchmark en el ciclo de diseño. Fuente: www.nngroup.com" />
        </section>
        <Heading type="h1" >¿Cómo aplicar benchmarking?</Heading>
        <section>
            <p>
                Para realizar un estudio de UX Benchmarking de extremo a extremo, primero decida qué va a medir y qué método de investigación utilizará para recopilar esas métricas.
            </p>
            <Heading type="h2" >Elije que medir</Heading>
            <p>
                Céntrese en las métricas clave que mejor reflejen la calidad de la experiencia del usuario que le interesa evaluar. Podría considerar las siguientes preguntas:
            </p>
            <p>
                <ul>
                    <li>¿En qué producto te centrarás? (sitio web, aplicación, etc.)</li>
                    <li>¿A qué grupo de usuarios se dirigirá?</li>
                    <li>¿Qué tareas o funciones desea medir?</li>
                </ul>
            </p>
            <p>
                
            </p>
            <p><strong>Tareas:</strong> Averigüe las principales tareas que los usuarios completan en su producto. Si su organización no tiene tareas principales existentes, puede comenzar documentando (la mayoría) de las tareas en el producto/servicio. Luego, priorice la lista de tareas y seleccione aproximadamente de 5 a 10 que sean mas importantes para su usuario.</p>
            <p>Por ejemplo:</p>
            <p>
                <ul>
                    <li>Para una aplicación de altavoz inteligente una posible tarea seria “configuración de un nuevo altavoz inteligente”.</li>
                    <li>Para un sitio web de comercio electrónico una posible tarea seria “realizar una compra”.</li>
                    <li>Para un sitio web de banca móvil una posible tarea seria “actualización de la información de contacto”.</li>
                    <li>Para un sitio web de agencia B2B una posible tarea seria “Envío de un formulario de cliente potenciales”.</li>
                </ul>
            </p>
            <p>
                <strong>Métrica: </strong> Ahora que se ha centrado en un conjunto de tareas, ¿cómo puede medirlas? El marco HEART(Happiness, Engagement, Adoption, Retention, Task effectiveness and efficiency) de Google proporciona una descripción general concisa de los diferentes tipos de métricas que puede recopilar y realizar un seguimiento. La siguiente tabla es una adaptación del marco HEART:
            </p>
            <Reference
                :image="imageTwo"
                description="not found" />
            <Heading type="h2" >Decida cómo medir</Heading>
            <p>
                Cuando se trata de determinar la metodología para recopilar sus métricas, debe considerar el compromiso de tiempo que requiere el método de investigación, el costo de dicho método, la habilidad de los investigadores involucrados y las herramientas de investigación disponibles para usted.
            </p>
            <p>
                Hay 3 métodos de investigación que funcionan bien en UX Benchmarking: pruebas de usabilidad cuantitativas, análisis y datos de encuestas.
            </p>
            <p><strong>Pruebas cuantitativas de usabilidad:</strong> Los participantes realizan las tareas principales en un sistema y los investigadores recopilan métricas que miden el desempeño de los usuarios en esas tareas.</p>
            <p><strong>Análisis:</strong> Los datos de uso del sistema se recopilan automáticamente.</p>
            <p><strong>Encuestas:</strong> Los usuarios responden preguntas para informar sobre su comportamiento, antecedentes u opiniones.</p>
            <Heading type="h2" >Recopile la primera medición: Establezca la línea de base</Heading>
            <p>
                Ahora que ha determinado qué métricas recopilar y cómo recopilarlas, es hora de recopilar sus métricas de referencia.
            </p>
            <p>
                A medida que recopila su primer conjunto de medidas, considere los factores externos que pueden afectar sus datos y, cuando sea posible, planifique en torno a ellos. Por ejemplo, si tiene un sitio web de comercio electrónico que utiliza análisis para recopilar métricas de ventas para la evaluación comparativa, desconfíe de factores como campañas de marketing extensas o influencias económicas a gran escala que pueden alterar sus métricas y dificultar la correlación del cambio de diseño con los resultados.
            </p>
            <Heading type="h2" >Rediseñar el producto</Heading>
            <p>
                Este proceso se explica dentro de la siguiente sección a detalle (definir, idear y prototipar) por lo que esta metodología lo acompañara desde aquí hasta el final de todo el proceso.
            </p>
            <Heading type="h2" >Recopilar medidas adicionales</Heading>
            <p>
                Después de lanzar su rediseño, mida su diseño nuevamente. No existe una regla estricta sobre cuánto tiempo esperar después de que se lanza un diseño para volver a medir. Si está realizando un seguimiento de los análisis, existe el beneficio adicional de la medición continua. Sin embargo, para la recopilación de datos basada en tareas, como encuestas y pruebas de usabilidad cuantitativas, deberá determinar el momento adecuado para recopilar los datos.
            </p>
            <p>
                Los usuarios a menudo odian el cambio , así que dales un poco de tiempo para adaptarse al rediseño antes de medirlo. La cantidad de tiempo varía según la frecuencia con la que los usuarios acceden a su producto. Para los productos a los que se accede diariamente, tal vez 2 o 3 semanas sea tiempo suficiente. Para un producto al que los usuarios acceden una o dos veces por semana, 4 o 5 semanas antes de medir es mejor.
            </p>
            <Heading type="h2" >Interprete los Hallazgos</Heading>
            <p>
                Ahora que ha recopilado al menos dos puntos de datos, es hora de interpretar sus hallazgos. No debe tomar sus métricas al pie de la letra, ya que la muestra utilizada para su estudio probablemente sea mucho más pequeña que la población total de sus usuarios.
            </p>
            <p>
                La interpretación de sus métricas es muy contextual para su producto y las métricas que ha elegido recopilar.
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
