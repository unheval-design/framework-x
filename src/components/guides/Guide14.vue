<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-14/image_1.png';
import imageTwo from '@/assets/images/guide-14/image_2.png';
import imageThree from '@/assets/images/guide-14/image_3.png';
import imageFigma from '@/assets/images/brands/figma.png';
import imageBl from '@/assets/images/brands/bl.png';

const question1 = {
    question:
        '¿Para qué sirven los sistemas de diseño?',
    answer: 1,
    alternatives: [
        'Estandarizar conceptos, componentes y patrones que serán reutilizados.',
        'Comunicar los componentes que usamos en un determinado proyecto.',
        'Ayudar a nuestros usuarios a reconocer nuestras interfaces y facilitar su uso.'
    ]
};

const question2 = {
    question: '¿Qué son las bibliotecas de patrones?',
    answer: 3,
    alternatives: [
        'Todos los componentes que seran reutilizados.',
        'Agrupaciones de componentes y elementos de la interfaz.',
        'Elementos de la interfaz que se han repetido al menos una vez.'
    ]
};
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
        <Heading type="h1">¿Por qué no utilizar un sistema de diseño?</Heading>
        <section>
            <p>
                Existen algunos obstáculos y limitaciones potenciales que pueden impedir que un equipo de diseño utilice un sistema de diseño:
            </p>
            <p>
                <ul>
                    <li>
                        <strong>Crear y mantener un sistema de diseño es una actividad que requiere mucho tiempo y requiere un equipo dedicado.</strong>
                        <br>
                        Los sistemas de diseño, desafortunadamente, no son una solución única. En el mejor de los casos, están en constante evolución a medida que los equipos recopilan comentarios de quienes los usan.
                    </li>
                    <li>
                        <strong>Se necesita tiempo para enseñar a otros cómo utilizar el sistema de diseño.</strong>
                        <br>
                        Cualquier sistema de diseño, incluso si se adaptó de uno existente, necesita instrucciones de uso; de lo contrario, existe el riesgo de que se aplique de manera inconsistente o incorrecta en las pantallas o en los equipos.
                    </li>
                    <li>
                        <strong>Puede haber una percepción de que los proyectos son creaciones únicas y estáticas, que generalmente no requieren componentes reutilizables.</strong>
                        <br>
                        Sea cierto o no, esta percepción puede indicar una falta de estrategia unificada en todos los proyectos y una oportunidad perdida para aumentar la eficiencia.
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
                description="La Guía de estilo de contenido de Mailchimp contiene pautas sólidas sobre cómo escribir diferentes tipos de contenido para que se alineen con los valores y el tono de voz de la empresa. Fuente: styleguide.mailchimp.com" />
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
        <Heading type="h1">¿Qué herramientas usar para crear sistemas de diseño?</Heading>
        <section>
            <p>
                <ResourceLink type="tool">
                    Figma
                    <template v-slot:popup>
                        <ResourceCard
                            title="Figma"
                            description="Herramienta para prototipar"
                            type="tool"
                            :src="imageFigma"
                            />
                    </template>
                </ResourceLink>
                es una herramienta colaborativa de diseño UX/UI por lo que todo el equipo tiene acceso a ella, ademas tiene herramientas enfocadas a generar bibliotecas de componentes, puede ser una de sus principales opciones si ya estuvo trabajando con esta herramienta en guías anteriores.
            </p>
            <p>
                <ResourceLink type="tool">
                    Backlight
                    <template v-slot:popup>
                        <ResourceCard
                            title="Backlight"
                            description="Plataforma de sistemas de diseño"
                            type="tool"
                            :src="imageBl"
                            />
                    </template>
                </ResourceLink>
                es una herramienta enfocada 100% a crear sistemas de diseño. Permite a los diseñadores y programadores gestionar componentes, historias y documentación de manera mas unificada.
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
