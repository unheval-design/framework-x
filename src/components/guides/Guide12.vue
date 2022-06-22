<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import Blockquote from '@/components/Blockquote.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-12/image_1.png';
import imageMiro from '@/assets/images/brands/miro.png';
import imageMural from '@/assets/images/brands/mural.png';
import imageMeet from '@/assets/images/brands/meet.png';
import imageZoom from '@/assets/images/brands/zoom.png';

const question1 = {
    question:
        '¿Para qué hacemos una lluvia de ideas?',
    answer: 1,
    alternatives: [
        'Generar mayor participación de nuestro equipo de trabajo.',
        'Conocer diferentes formas de pensamiento de nuestro equipo.',
        'Generar ideas innovadoras que resuelvan problemas.'
    ]
};

const question2 = {
    question: '¿En qué técnica partimos por definir malas ideas?',
    answer: 3,
    alternatives: ['Mapa Mental.', 'Lluvia de ideas inverso.', 'En ninguna de las técnicas.']
};
</script>

<template>
    <GuideTitle>
        Lluvia de Ideas (Brainstorming)
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                La lluvia de ideas es un método que utilizan los equipos de
                diseño para generar ideas para resolver problemas de diseño
                claramente definidos. En condiciones controladas y un entorno de
                pensamiento libre, los equipos abordan un problema por medios
                tales como preguntas de "¿Cómo podríamos?". Producen una amplia
                gama de ideas y establecen vínculos entre ellas para encontrar
                posibles soluciones.
            </p>
            <Blockquote>
                La lluvia de ideas alienta a las personas a generar pensamientos
                e ideas que, al principio, pueden parecer un poco locas. Algunas
                de estas ideas se pueden convertir en soluciones originales y
                creativas para un problema.
            </Blockquote>
        </section>
        <Heading type="h1">¿Cuándo hacer lluvia de ideas?</Heading>
        <section>
            <p>
                Por lo general lo usarás en la fase de Ideación. Es en ese
                momento cuando debes generar el mayor número de ideas posibles.
                Y, posteriormente, elegir aquellas que el grupo considere que
                son más adecuadas para dar respuesta y generar propuestas
                conceptuales de diseño.
            </p>
        </section>
        <Heading type="h1">Principales reglas al hacer lluvia de ideas</Heading>
        <section>
            <p>
                <strong>Suspender el juicio</strong>
            </p>
            <p>
                Durante el proceso de generación de ideas, no hay que realizar ninguna valoración o crítica sobre estas. Solo se apuntan las ideas, la evaluación se realiza después.
            </p>
            <p>
                <strong>Pensar libremente</strong>
            </p>
            <p>
                Las ideas más prácticas muchas veces nacen de otras ideas que, en su mayoría, son inviables. Por ello, es muy importante para una sesión de lluvia de ideas efectiva, que los usuarios piensen libremente y tengan ideas imposibles.
            </p>
            <p>
                <strong>La cantidad es importante</strong>
            </p>
            <p>
                Al hacer lluvia de ideas se busca generar una gran cantidad de ideas, para luego escoger la mejor de todas ellas.
            </p>
            <p>
                <strong>Efecto multiplicador</strong>
            </p>
            <p>
                Los participantes en las lluvias de ideas, no solo contribuyen con sus pensamientos, sino que también puede sugerir mejoras o combinar las ideas que tienen los demás. Así, las ideas que tienen unos usuarios sirven de estímulo para los otros participantes.
            </p>
        </section>
        <Heading type="h1">¿Cómo hacer una lluvia de ideas?</Heading>
        <section>
            <Heading type="h2">Paso 1: Formar un equipo de trabajo</Heading>
            <p>
                Como es una técnica grupal, es necesario formar un grupo de trabajo. La recomendación es que no sea superior a 10 personas. Los roles que pueden tener son las siguientes:
            </p>
            <p>
                <ul>
                    <li><strong>Moderador</strong>: Es la persona encargada de guiar la sesión, resuleve dudas, modera y dinamiza para que sea efectiva y cumpla el objetivo marcado.</li>
                    <li><strong>Secretario</strong>: Es la persona encargada de solventar cualquier problema o necesidad que pueda darse en la sesión. Además, es la persona que apunta todas las ideas que van surgiendo durante la sesión de Brainstorming. Según el número de participantes que haya en la sesión, el secretario, participa o no en la sesión.</li>
                    <li><strong>Participantes</strong>: Son todas aquellas personas que intervienen en el brainstorming para encontrar y proponer soluciones al problema propuesto.</li>
                </ul>
            </p>
            <Heading type="h2">Paso 2: Definir el lugar y tiempo para la sesión</Heading>
            <p>
                <strong>El lugar</strong>
            </p>
            <p>
                Antes de empezar con la lluvia de ideas es importante contar con un espacio adecuado para ello. Lo mejor es hacerlo en un ambiente relajado y no contaminado.
            </p>
            <p>
                <strong>El tiempo y el momento</strong>
            </p>
            <p>
                Es recomendable que la duración de la sesión no sea superior a 1 hora, aunque no hay un límite establecido y lo mejor es ser flexible.
            </p>
            <p>
                Tan importante como el tiempo es el momento. Hay personas que prefieren aprovechar los primeros momentos del día porque se encuentran más creativas, otras prefieren desconectar o romper la rutina con otras actividades.
            </p>
            <Heading type="h2">Paso 3: Definir el problema</Heading>
            <p>
                Antes de empezar, es fundamental aclarar cuál es el tema a tratar para evitar desviarse del camino y generar ideas orientadas a la resolución del problema. Se podría empezar formulando preguntas como estas:
            </p>
            <p>
                <ul>
                    <li>¿Cómo podríamos mejorar la calidad de…?</li>
                    <li>¿Cómo podríamos evitar que…?</li>
                    <li>¿Qué podríamos hacer para…?</li>
                </ul>
            </p>
            <Blockquote>Una técnica que podria usarse en este paso podria ser la Técnica de los 5 Whys. Consiste en preguntar 5 veces seguidas el por qué de un situación, acción o cosa con el fin de entender en profundidad la causa o motivación última del proceso.</Blockquote>
            <Heading type="h2">Paso 4: Desarrollo de la sesión de lluvia de ideas</Heading>
            <p>
                En una sesión de lluvia de ideas se trata de conseguir el mayor número posible de ideas, sin importar la calidad (al principio).
            </p>
            <p>
                También podrias usar una de las
                <ResourceLink type="download">
                    técnicas de brainstorming
                    <template v-slot:popup>
                        <ResourceCard
                            type="download"
                            title="técnicas_brainstorming.pdf"
                            description="Formato para lluvia de ideas"
                        />
                    </template>
                </ResourceLink>,
                la que mejor se adapte al equipo y a los objetivos que se desean conseguir.
            </p>
            <Reference
                :image="imageOne"
                description="Una sesión de brainstorming. Fuente: interaction-design.org"
            />
            <Heading type="h2">Paso 5: Seleccionar las mejores ideas.</Heading>
            <p>
                Es el momento de votar por las ideas que mejor solucionen el problema. Lo mejor es empezar valorando las ideas de forma independiente para después seleccionar las mejor valoradas. Puedes utilizar una escala del 0 al 5 para valorar cada idea.
            </p>
            <p>
                Es recomendable terminar con las 2 o 3 ideas que mejor ayuden a solucionar el problema.
            </p>
            <Heading type="h2">Paso 6: Tomar decisiones.</Heading>
            <p>
                Llega el momento de la verdad y hay que decidir cuál es la solución que mejor se adapta a las necesidades que quieres cubrir.
            </p>
        </section>
        <Heading type="h1">Técnicas para hacer lluvia de ideas</Heading>
        <section>
            <Heading type="h2">Técnica de Mapa Mental</Heading>
            <p>✏️ <strong>Materiales</strong>: Lápiz o lapicero y papel.</p>
            <p>⏰ <strong>Duración</strong>: 20 minutos.</p>
            <p>
                Pasos:
            </p>
            <p>
                <ol>
                    <li>Definir el problema a los integrantes del grupo.</li>
                    <li>Escribir el problema en el centro de un folio y dibujar ramas a partir del problema.</li>
                    <li>Por turnos, aportar ideas o pensamientos para solucionar el problema.</li>
                    <li>Anotar una idea por rama, se pueden añadir aportaciones que surjan sobre las ideas para mejorarlas.</li>
                    <li>Reflexionar y valorar cada idea para intentar llegar a un consenso sobre las soluciones más adecuadas. Estas pueden ser el resultado de la combinación de varias ideas o del perfeccionamiento de una de ellas.</li>
                </ol>
            </p>
            <Heading type="h2">Lluvia de ideas Inverso</Heading>
            <p>✏️ <strong>Materiales</strong>: Lápiz o lapicero y papel.</p>
            <p>⏰ <strong>Duración</strong>: 20 minutos.</p>
            <p>
                Pasos:
            </p>
            <p>
                <ol>
                    <li>Generar ideas nuevas dando la vuelta totalmente al objetivo, es decir, en vez de buscar buenas ideas para solucionar el problema, se propondrán malas ideas para empeorar la situación. De esta forma es más sencillo ver qué es lo que no funciona.</li>
                    <li>Anotar todas las malas ideas (da igual lo locas que parezcan).</li>
                    <li>Pensar en soluciones para esas ideas opuestas. Es decir, preguntar qué se puede hacer para mejorar esas malas ideas.</li>
                    <li>Anotar las soluciones para esas malas ideas.</li>
                    <li>Reflexionar sobre la sesión para decidir el camino que puede llevar a resolver realmente el problema.</li>
                </ol>
            </p>
            <Blockquote>Con esta técnica conseguirás, partiendo de malas ideas, encontrar las debilidades para después poder generar ideas útiles.</Blockquote>
        </section>
        <Heading type="h1"
            >¿Qué herramientas usar para hacer lluvia de ideas?</Heading
        >
        <section>
            <p>La lluvia de ideas ha sido siempre una técnica presencial, por lo que los herramientas son lapices, papeles y pizarras principalmente. Sin embargo, cuando las circunstancias lo exigen, también puede llevarse a cabo de forma remota.</p>
            <p>Son varias las plataformas colaborativas que permiten a los participantes trabajar de forma simultánea. Las dos más conocidas son 
                <ResourceLink type="tool">
                    Mural
                    <template v-slot:popup>
                        <ResourceCard
                            title="Mural"
                            description="Herramienta para organizar notas"
                            type="tool"
                            :src="imageMural"
                            />
                    </template>
                </ResourceLink>
                y
                <ResourceLink type="tool">
                    Miro
                    <template v-slot:popup>
                        <ResourceCard
                            title="Miro"
                            description="Herramienta para organizar notas"
                            type="tool"
                            :src="imageMiro"
                            />
                    </template>
                </ResourceLink>.
            </p>
            <p>Además, es recomendable que mantengas abierta una vía de comunicación a través de plataformas de reunión, como
                <ResourceLink type="tool">
                    Meet
                    <template v-slot:popup>
                        <ResourceCard
                            title="Meet"
                            description="Herramienta para videollamadas"
                            type="tool"
                            :src="imageMeet"
                            />
                    </template>
                </ResourceLink>
                o
                <ResourceLink type="tool">
                    Zoom
                    <template v-slot:popup>
                        <ResourceCard
                            title="Zoom"
                            description="Herramienta para videollamadas"
                            type="tool"
                            :src="imageZoom"
                            />
                    </template>
                </ResourceLink>.
                De esta forma, facilitador y participantes se pueden comunicar de forma fluida.
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
