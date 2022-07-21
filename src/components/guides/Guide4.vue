<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import Heading from '@/components/Heading.vue';
import Challenge from '@/components/Challenge.vue';
import TipCard from '@/components/TipCard.vue';
import imageMiro from '@/assets/images/brands/miro.png';
import imageOne from '@/assets/images/guide-4/image_1.png';
import Reference from '@/components/Reference.vue';
import { ref } from '@vue/reactivity';
import { inject } from '@vue/runtime-core';

const projectName = inject('projectName')
const questions = ref([
    {
        id: 1,
        question: '¿Por que hacemos el user journey map?',
        answer: 2,
        alternatives: [
            { id: 1, description: 'Por que necesitamos entender si los procesos o etapas de un proceso están bien optimizados.'},
            { id: 2, description: 'Por que queremos descubrir la experiencia del usuario a lo largo de una serie de interacciones.'},
            { id: 3, description: 'Por que queremos detectar si las tareas son completadas y el grado de satisfacción del usuario.'}
        ]
    },
    {
        id: 2,
        question: '¿Qué son las oportunidades en un user journey map?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Información que describe cómo se puede optimizar la experiencia del usuario.'},
            { id: 2, description: 'Rutas que tiene el usuario para completar su recorrido.'},
            { id: 3, description: 'Experiencias favorables del usuario en el recorrido.'}
        ]
    }
]);

const challenge4_tasks = [
    'Definir el actor',
    'Definir el escenario y las espectativas',
    'Definir las fases del viaje',
    'Identificar las acciones, pensamientos y emociones',
    'Identificar las oportunidades'
];
</script>
<template>
    <GuideTitle>
        User Journey Map
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                El “Journey Map” es una herramienta proveniente del Design
                Thinking y define las distintas actividades que desarrolla un
                usuario en el uso de un producto o servicio. Con el paso del
                tiempo se descubrió que también puede responder a cómo
                interactúan los usuarios con marcas o servicios.
            </p>
            <p>
                Dentro del proceso del Design Thinking, es una herramienta muy
                eficaz para diseñar una solución, o para detectar puntos
                conflictivos de un producto o servicio existentes que pudieran
                requerir una mejora, y fue definida de esta manera por Philip
                Kotler en 2013.
            </p>
            <Reference
                :image="imageOne"
                description="User Journey Map. Fuente: fromdoppler.com"
            />
        </section>
        <Heading type="h1" >¿Por qué usar User Journey Map?</Heading>
        <section>
            <p>
                El User Journer Map es un proceso que brinda una visión
                holística de la experiencia del cliente al descubrir momentos
                tanto de frustración como de placer a lo largo de una serie de
                interacciones. Realizado con éxito, revela oportunidades para
                abordar los puntos débiles de los clientes, aliviar la
                fragmentación y, en última instancia, crear una mejor
                experiencia para sus usuarios.
            </p>
            <p>
                El proceso de creación de un mapa fuerza la conversación y un
                modelo mental alineado para todo el equipo. Los mapas también
                pueden convertirse en la base para la toma de decisiones a
                medida que el equipo avanza.
            </p>
        </section>
        <Heading type="h1" >Elementos del User Journey Map</Heading>
        <section>
            <p>
                El mapa está compuesto por filas (secciones fijas) y columnas
                (el número de columnas varía según el proyecto). Te
                sugerimos definir las etapas con el tiempo de duración, de ese
                modo podrás saber cuántas columnas necesitas.
            </p>
            <p>
                Los mapas de viaje vienen en todas las formas y
                tamaños. Independientemente de cómo se vean, los mapas de viaje
                tienen los siguientes 5 elementos clave en común:
            </p>
            <Heading type="h2" >Actor</Heading>
            <p>
                Es la persona o usuario que experimenta el viaje. Los actores
                generalmente se alinean con personas y sus acciones en el mapa
                se basan en datos.
            </p>
            <p>Por ejemplo en la página web de una universidad los actores pueden ser:</p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <ul>
                        <li>Desarrollador</li>
                        <li>Diseñador</li>
                    </ul>
                </TipCard>
                <TipCard type="do">
                    <ul>
                        <li>Estudiante</li>
                        <li>Docente</li>
                    </ul>
                </TipCard>
            </aside>
            <Heading type="h2" >Escenario + Expectativas</Heading>
            <p>
                El escenario describe la situación que aborda el User Journey
                Map y está asociado con la meta o necesidad de un actor y sus
                expectativas específicas. Por ejemplo, un escenario podría ser
                cambiar de planes móviles para ahorrar dinero, y las
                expectativas incluyen encontrar fácilmente toda la información
                necesaria para tomar una decisión.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <strong>Escenario:</strong> Prestamo de libro de la biblioteca.
                    <br>
                    <strong>Espectativas:</strong> Que me otorguen el prestamo rápidamente.
                </TipCard>
                <TipCard type="do">
                    <strong>Escenario:</strong> Solicitar prestamo de libro en la página web de la bibliotena central.
                    <br>
                    <strong>Espectativas:</strong> Encontrar facilmente el libro que quiero prestarme.
                </TipCard>
            </aside>
            <Blockquote>
                Los escenarios pueden ser reales (para productos y servicios
                existentes) o anticipados, para productos que aún se encuentran
                en la etapa de diseño.
            </Blockquote>
            <Heading type="h2" >Fases del viaje</Heading>
            <p>
                Las fases del viaje son las diferentes etapas de alto nivel del
                viaje. Proporcionan organización para el resto de la información
                del User Journey Map (acciones, pensamientos y emociones). Las
                etapas variarán de un escenario a otro; cada organización
                normalmente tendrá datos que le ayuden a determinar cuáles son
                estas fases para un escenario determinado. 
            </p>
            <p>Aquí hay unos ejemplos:</p>
            <p>
                <ul>
                    <li>Para un escenario de comercio electrónico (como comprar parlantes Bluetooth), las fases pueden ser descubrir, probar, comprar, usar, buscar soporte.</li>
                    <li>Para compras grandes (o de lujo) (como conducir una prueba y comprar un automóvil), las fases pueden ser compromiso, educación, investigación, evaluación, justificación.</li>
                    <li>Para un escenario de negocio a negocio (como el despliegue de una herramienta interna), las fases podrían ser compra, adopción, retención, expansión, promoción.</li>
                </ul>
            </p>
            <Heading type="h2" >Acciones, pensamientos y emociones</Heading>
            <p>
                Estos son comportamientos, pensamientos y sentimientos que el actor tiene a lo largo del viaje y que se mapean dentro de cada una de las fases del viaje.
            </p>
            <p>Las acciones: son los comportamientos reales y los pasos tomados por los usuarios.</p>
            <p>Los pensamientos: corresponden a las preguntas, motivaciones y necesidades de información de los usuarios en diferentes etapas de viaje.</p>
            <p>Las emociones: Se trazan como una sola línea a lo largo de las fases del viaje, indicando literalmente los "altibajos" emocionales de la experiencia.</p>
            <Heading type="h2" >Oportunidades</Heading>
            <p>
                Las oportunidades son información que se obtiene del mapeo; hablan de cómo se puede optimizar la experiencia del usuario. Las perspectivas y las oportunidades ayudan al equipo a extraer conocimiento del mapa:
            </p>
            <p>
                <ul>
                    <li>¿Qué hay que hacer con este conocimiento?</li>
                    <li>¿Quién es dueño de qué cambio?</li>
                    <li>¿Dónde están las mayores oportunidades?</li>
                    <li>¿Cómo vamos a medir las mejoras que implementamos?</li>
                </ul>
            </p>
        </section>
        <Challenge time="30" :id="4" :tasks="challenge4_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #4 </Heading>
            </template>
           Realizar el User Journey Map de "{{projectName}}".
            <template v-slot:tools>
                <ResourceCard
                    title="Miro"
                    description="Analisis visual"
                    type="tool"
                    :src="imageMiro"
                    href="https://miro.com/es/"
                />
                <ResourceCard
                    title="Plantilla"
                    description="Journey Map"
                    type="download"
                    href="https://miro.com/es/plantillas/plantilla-mapa-experiencia-del-cliente/"
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
