<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Blockquote from '@/components/Blockquote.vue';
import Reference from '@/components/Reference.vue';
import TestCard from '@/components/TestCard.vue';
import Heading from '@/components/Heading.vue';
import imageOne from '@/assets/images/guide-2/image_1.png'

const question1 = {
    question: '¿Cuando dedo hacer el análisis heurístico?',
    answer: 1,
    alternatives: ['Si es un producto nuevo, lo debo realizar al principio.', 'Siempre debo hacerlo al principio.', 'Si es un producto existente, lo debo realizar al principio.']
}

const question2 = {
    question: '¿Cuantos evaluadores podrían se recomiendan para encontrar el 80% de los problemas de usabilidad en una interfaz?',
    answer: 3,
    alternatives: ['10 evaluadores', 'entre 5 y 8 evaluadores', 'entre 8 y 12 evaluadores']
}
</script>

<template>
    <GuideTitle>
        Análisis Heurístico
        <template v-slot:timeRead>4</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                Un análisis heurístico se utiliza para identificar problemas
                comunes de usabilidad de un producto para que los problemas
                puedan resolverse, y así mejorar la satisfacción del usuario y
                su experiencia, y aumentar las posibilidades de éxito de un
                producto digital en general.
            </p>
            <p>
                <i>
                    “La evaluación heurística implica que un pequeño grupo de
                    evaluadores examine la interfaz y juzgue su cumplimiento con
                    los principios de usabilidad reconocidos (la heurística)”. —
                    Jakob Nielsen
                </i>
            </p>
            <Blockquote>
                La razón principal para realizar un análisis heurístico es
                mejorar la usabilidad y eficiencia de un producto digital.
            </Blockquote>
        </section>
        <Heading type="h1" >¿Cuándo hacer el análisis heurístico?</Heading>
        <section>
            <p>
                Se puede realizar en cualquier etapa avanzada del proceso del
                proceso de diseño. El criterio a utilizar seria el siguiente:
            </p>
            <p>
                <ul>
                    <li>Producto Nuevo: Se suele realizar después de hacer wireframes y prototipos.</li>
                    <li>Sobre un producto existente: Se suele hacer al principio en la etapa de análisis, para encontrar los problemas de usabilidad en los que se centrara el proyecto.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Selección de expertos</Heading>
        <section>
            <Heading type="h2" >Perfil del Experto</Heading>
            <p>
                Un experto en evaluación heurística es idealmente un experto en pruebas de usabilidad. Por lo general, provienen de las disciplinas de factores humanos, diseño de interacción (IXD), HCI(interacción hombre-computadora) y/o Diseño UX, con antecedentes complementarios en disciplinas como la psicología, la informática, las ciencias de la información y el comercio.
            </p>
            <Heading type="h2" >Tamaño de muestra</Heading>
            <p>
                Es útil tener en cuenta que a pesar de que un solo experimentado profesional del UX es generalmente experto en identificar los problemas de usabilidad más críticos, un grupo de evaluadores es generalmente la mejor opción.
            </p>
            <p>
                Entre 5 y 8 individuos es el punto dulce: deben ser capaces de señalar más del 80% de problemas de usabilidad. Sin embargo el uso de más de 10 evaluadores heurísticos no producirá mejores resultados.
            </p>
            <Reference :image="imageOne" description="Imagen de referencia. Author: Toptal.com."/>
            <Blockquote>A medida que aumenta el número de evaluadores, aumenta la proporción de problemas de usabilidad identificados. Pero después de 10 evaluadores, las ganancias potenciales son insignificantes.</Blockquote>
        </section>
        <Heading type="h1" >Ventajas y Desventajas</Heading>
        <section>
            <Heading type="h2" >Ventajas</Heading>
            <p>
                <ul>
                    <li>Descubre muchos problemas de usabilidad y mejora significativamente el UX de un producto.</li>
                    <li>Más barato y más rápido que las pruebas de usabilidad completas que requieren la contratación de participantes, la coordinación, el equipo, la ejecución de la prueba, grabación, análisis, etc.</li>
                    <li>La heurística permite a los evaluadores a enfocarse en problemas específicos.</li>
                    <li>No lleva consigo los problemas éticos y prácticos relacionados con los métodos de inspección que implican a usuarios reales.</li>
                    <li>Evaluar diseños utilizando un conjunto de heurísticas puede ayudar a identificar problemas de usabilidad con flujos de usuario específicos y determinar el impacto en la experiencia general del usuario.</li>
                </ul>
            </p>
            <Heading type="h2" >Desventajas</Heading>
            <p>
                <ul>
                    <li>Los expertos en usabilidad son a menudo difíciles de encontrar y pueden ser caros.</li>
                    <li>El valor de las cuestiones descubiertas por los evaluadores está limitado por su nivel de habilidad.</li>
                    <li>A veces, un análisis heurístico puede desencadenar falsas alarmas: Los problemas que no necesariamente tendrían un efecto negativo en el UX general si se deja solo son a veces marcados como fijos.</li>
                    <li>Si los evaluadores no forman parte del diseño, pueden desconocer cualquier limitación técnica en el diseño.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" >Evaluación</Heading>
        <section>
            <p>
                Valida tu aprendizaje
            </p>
            <aside class="tests_grid">
                <TestCard :question="question1"/>
                <TestCard :question="question2"/>
            </aside>
        </section>
    </GuideBody>
</template>
<style></style>
