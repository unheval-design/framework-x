<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-15/image_1.png';
import imageTwo from '@/assets/images/guide-15/image_2.png';
import imageThree from '@/assets/images/guide-15/image_3.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageBl from '@/assets/images/brands/bl.png';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Para qué sirven los sistemas de diseño?',
        alternatives: [
            { answer: true, description: 'Estandarizar conceptos, componentes y patrones que serán reutilizados.' },
            { answer: false, description: 'Comunicar los componentes que usamos en un determinado proyecto.' },
            { answer: false, description: 'Ayudar a nuestros usuarios a reconocer nuestras interfaces y facilitar su uso.' }
        ]
    },
    {
        id: 2,
        question: '¿Qué son las bibliotecas de patrones?',
        alternatives: [
            { answer: true, description: 'Todos los componentes que seran reutilizados.' },
            { answer: false, description: 'Agrupaciones de componentes y elementos de la interfaz.' },
            { answer: false, description: 'Elementos de la interfaz que se han repetido al menos una vez.' }
        ]
    }
]);

const challenge15_tasks = [
    'Identificar los componentes del Reto #14',
    'Crear la guía de estilos',
    'Crear la biblioteca de componentes',
    'Crear la biblioteca de patrones'
];
</script>

<template>
    <GuideTitle>
        Sistema de Diseño
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Un sistema de diseño es un conjunto completo de estándares destinados a gestionar el diseño a escala utilizando componentes y patrones reutilizables.
            </p>
        </section>
        <Heading type="h1">¿Por qué utilizar un sistema de diseño?</Heading>
        <section>
            <p>
                Los sistemas de diseño, cuando se implementan bien, pueden brindar muchos beneficios a un equipo de diseño:
            </p>
            <p>
                <ul>
                    <li>
                        <strong>El trabajo de diseño (y desarrollo) se puede crear y replicar rápidamente y a escala.</strong>
                        <br>
                        El beneficio principal de los sistemas de diseño es su capacidad para replicar diseños rápidamente mediante el uso de componentes y elementos de interfaz de usuario prefabricados. Los equipos pueden continuar usando los mismos elementos una y otra vez, lo que reduce la necesidad de reinventar la rueda y, por lo tanto, corre el riesgo de inconsistencias no deseadas.
                    </li>
                    <li>
                        <strong>Alivia la tensión en los recursos de diseño para centrarse en problemas más grandes y complejos.</strong>
                        <br>
                        Dado que los elementos de la interfaz de usuario más simples ya se crean y son reutilizables, los recursos de diseño pueden centrarse menos en modificar la apariencia visual y más en problemas más complejos (como la priorización de la información, la optimización del flujo de trabajo y la gestión de viajes).
                    </li>
                    <li>
                        <strong>Crea un lenguaje unificado dentro y entre equipos multifuncionales.</strong>
                        <br>
                        Especialmente cuando las responsabilidades de diseño cambian o cuando los equipos se dispersan geográficamente, un lenguaje unificado reduce el tiempo de diseño o desarrollo desperdiciado debido a errores de comunicación. Por ejemplo, la funcionalidad o apariencia de un menú desplegable  no se debatirá, ya que ese término está reservado para un elemento específicamente definido dentro del sistema de diseño.
                    </li>
                    <li>
                        <strong>Crea coherencia visual entre productos, canales y departamentos (potencialmente aislados).</strong>
                        <br>
                        Particularmente cuando los equipos trabajan en silos, donde cada producto o canal opera independientemente de los demás, la ausencia de un sistema de diseño en toda la organización puede generar una apariencia visual inconsistente y experiencias que parecen fragmentadas o sin relación con la marca. Los sistemas de diseño proporcionan una fuente única de componentes, patrones y estilos y unifican experiencias inconexas para que sean visualmente coherentes y parezcan ser parte del mismo ecosistema.
                    </li>
                    <li>
                        <strong>Puede servir como herramienta educativa y referencia para diseñadores de nivel junior y colaboradores de contenido.</strong>
                        <br>
                        Las pautas de uso y las guías de estilo escritas explícitamente ayudan a incorporar a los colaboradores individuales que son nuevos en el diseño de la interfaz de usuario o la creación de contenido y también sirven como recordatorio para el resto de los colaboradores.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1">Elementos de un sistema de diseño</Heading>
        <section>
            <Heading type="h2">Guía de estilo</Heading>
            <p>
                Las guías de estilo contienen pautas de implementación específicas, referencias visuales y principios de diseño para crear interfaces u otros productos de diseño. Las guías de estilo más comunes tienden a centrarse en la marca (colores, tipografía, marcas comerciales, logotipos y medios impresos), pero las guías de estilo también ofrecen orientación sobre el contenido (como el tono de voz y las recomendaciones de idioma) y el diseño visual y de interacción.
            </p>
            <Reference
                :image="imageOne"
                description="Desk Metrics style guide Author: Mateusz Dembek" />
            <Heading type="h2">Biblioteca de componentes</Heading>
            <p>
                Las bibliotecas de componentes (también conocidas como bibliotecas de diseño) son lo que muchas personas asocian con los sistemas de diseño: estas completas bibliotecas albergan elementos de interfaz de usuario predeterminados y reutilizables y sirven como una ventanilla única para que diseñadores y desarrolladores aprendan e implementen elementos de interfaz de usuario específicos. 
            </p>
            <p>
                Además de ejemplos visuales de componentes, incluyen:
            </p>
            <p>
                <ul>
                    <li><strong>Nombre del componente</strong>: un nombre de componente de interfaz de usuario único y específico, para evitar problemas de comunicación entre diseñadores y desarrolladores.</li>
                    <li><strong>Descripción</strong>: una explicación clara de qué es este elemento y cómo se usa normalmente.</li>
                    <li><strong>Atributos</strong>: variables o ajustes que se pueden hacer para personalizar o adaptar el componente para necesidades específicas (es decir, color, tamaño, forma, copia).</li>
                    <li><strong>Estado</strong>: valores predeterminados recomendados y los cambios posteriores en la apariencia, como por ejemplo cuando un componente esta habilitado o deshabilitado.</li>
                    <li><strong>Fragmentos de código</strong>: el extracto de código real para el elemento (algunos sistemas de diseño van tan lejos como para compartir múltiples ejemplos y ofrecer un entorno para probar diferentes personalizaciones de componentes).</li>
                    <li><strong>Marcos front-end y back-end</strong>: para implementar la biblioteca (si corresponde), para evitar una depuración dolorosa e innecesaria.</li>
                </ul>
            </p>
            <Reference
                :image="imageTwo"
                description="El sistema de diseño Material Design presenta una biblioteca de componentes que incluye una descripción detallada del componente y pautas de implementación. Fuente: m3.material.io" />
            <Heading type="h2">Biblioteca de patrones</Heading>
            <p>
                A veces, los términos “biblioteca de componentes” y “biblioteca de patrones” se usan como sinónimos; sin embargo, existe una distinción entre estos dos tipos de bibliotecas.  Las bibliotecas de componentes especifican elementos de interfaz de usuario individuales, mientras que las bibliotecas de patrones presentan colecciones de agrupaciones o diseños de elementos de interfaz de usuario. Al igual que los componentes, los patrones están destinados a ser reutilizados y adaptados.
            </p>
            <Reference
                :image="imageThree"
                description="Patrones de diseño del sistema de diseño de Atlassian. Fuente: atlassian.design/patterns" />
        </section>
        <Challenge time="1" :id="15" :tasks="challenge15_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #15 </Heading>
            </template>
            Crea el Sistema de Diseño la pagina principal de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageFigma"
                />
                <ResourceCard
                    title="Ejemplos"
                    description="Herramienta para organizar ideas"
                    type="download"
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
