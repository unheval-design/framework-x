<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Heading from '@/components/Heading.vue';
import Blockquote from '@/components/Blockquote.vue';
import Reference from '@/components/Reference.vue';
import Challenge from '@/components/Challenge.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import TipCard from '@/components/TipCard.vue';
import imageMiro from '@/assets/images/brands/miro.png';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Cuándo hacer el benchmarking?',
        alternatives: [
            { answer: true, description: 'Antes de la fase definir o después de la fase de pruebas.'},
            { answer: false, description: 'Antes de las pruebas o después de empatizar.'},
            { answer: false, description: 'Después de definir o antes de las pruebas.'}
        ]
    },
    {
        id: 2,
        question: 'Si estoy trabajando en un producto nuevo ¿Contra que puedo hacer el benchmarking?',
        alternatives: [
            { answer: true, description: 'Con un producto estándar en la industria.' },
            { answer: false, description: 'Con un producto similar de mi empresa.' },
            { answer: false, description: 'Con un producto que me sea familiar y sepa sus características.'}
        ]
    }
]);

const challenge3_tasks = [
    'Definir la competencia',
    'Definir las metricas a evaluar',
    'Contruir un tablero comparativo y desarrolla la evaluacion del benchmarking',
    'Elaborar las conclusiones'
];
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
                El benchmarking es una metodología que permite conocer la posición de un producto en relación a los de su competencia, en un determinado momento. Los resultados obtenidos facilitan el conocimiento de sus fortalezas y debilidades, que deben ser tenidas en cuenta para las instancias de creación de nuestro prototipo.
            </p>
        </section>
        <Heading type="h1" >¿Cómo aplicar benchmarking?</Heading>
        <section>
            <p>
                Para realizar un estudio de UX Benchmarking de extremo a extremo, primero decida qué va a medir y qué método de investigación utilizará para recopilar esas métricas.
            </p>
            <Heading type="h2">1. Define la competencia</Heading>
            <p>
                Identificamos cuáles son las aplicaciones con las que se hara la comparación, deberián tener funcionalidades parecidas a las que deseamos evaluar.
            </p>
            <p>
                Nuestra competencia podria ser: Una versión anterior del producto o servicio, un competidor, un estándar de la industria, un objetivo determinado por las partes interesadas.
            </p>
            <p>
                Si mi producto esta/estará enfocado a delivery de comida, mi competencia podria ser:
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <ul>
                        <li>Uber</li>
                        <li>Rappi</li>
                    </ul>
                </TipCard>
                <TipCard type="do">
                    <ul>
                        <li>Uber Eat</li>
                        <li>Rappi</li>
                    </ul>
                </TipCard>
            </aside>
            <Heading type="h2" >2. Elije que medir</Heading>
            <p>
                <strong>Tareas</strong>
            </p>
            <p>
                Averigue las principales tareas que los usuarios completan en su producto. Por ejemplo:
            </p>
            <p>
                <ul>
                    <li>Para una aplicación de altavoz inteligente una posible tarea seria “configuración de un nuevo altavoz inteligente”.</li>
                    <li>Para un sitio web de comercio electrónico una posible tarea seria “realizar una compra”.</li>
                    <li>Para un sitio web de banca móvil una posible tarea seria “actualización de la información de contacto”.</li>
                    <li>Para un sitio web de agencia B2B una posible tarea seria “Envío de un formulario de cliente potenciales”.</li>
                </ul>
            </p>
            <p>
                <strong>Métrica</strong>
            </p>
            <p>
                Las metricas sencillas mas usadas son:
            </p>
            <p>
                <ul>
                    <li>Navegación: cantidad de pasos necesarios para completar a tarea.</li>
                    <li>Vocabulario: Las palabras utilizadas en los elementos de interacción(botones, títulos) permiten que el usuario pueda llevar adelante la tarea y no presta a confusión.</li>
                    <li>Diseño: Ocupación del espacio en página, distribución de los elementos y tamaño en relación al espacio.</li>
                </ul>
            </p>
            <p>
                Si necesita algo mas complejo podria optar por el marco HEART de Google: Happiness(felicidad), Engagement(compromiso), Adoption(adopción), Retention(retención), Task effectiveness and efficiency(Efectividad y Eficiencia en la Tarea).
            </p>
            <Heading type="h2" >3. Desarrollo del benchmarking</Heading>
            <p>
               A travez de un tablero, debe evaluar por puntuación, cualidades u otro tipo de indicador que le proporcione una comparativa entre las diferentes aplicaciones.
            </p>
            <p>
                A medida que recopila su primer conjunto de medidas, considere los factores externos que pueden afectar sus datos y, cuando sea posible, planifique en torno a ellos. Por ejemplo, si tiene un sitio web de comercio electrónico, desconfíe de factores como campañas de marketing extensas o influencias económicas a gran escala que pueden alterar sus métricas y dificultar la correlación del cambio de diseño con los resultados.
            </p>
            <Heading type="h2" >4. Conclusiones</Heading>
            <p>
                A partir del análisis de las interfaces, elaboraremos conclusiones definiendo las Fortalezas y Debilidades que presentaron cada una de las aplicaciones de la competencia durante el desarrollo de las tareas.
            </p>
        </section>
        <Challenge time="1" :id="3" :tasks="challenge3_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #3 </Heading>
            </template>
            Crea un UX Benchmarking para encontrar la misión y visión institucional de una universidad.
            <template v-slot:tools>
                <ResourceCard
                    title="Miro"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageMiro"
                />
                <ResourceCard
                    title="Ejemplos"
                    description="Herramienta para organizar ideas"
                    type="download"
                />
            </template>
        </Challenge>
        <Heading type="h1" >Evaluación</Heading>
        <section>
            <p>Valida tu aprendizaje</p>
            <Evaluation :questions="questions" />
        </section>
    </GuideBody>
</template>

<style></style>
