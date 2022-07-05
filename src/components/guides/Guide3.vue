<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Heading from '@/components/Heading.vue';
import Evaluation from '@/components/Evaluation.vue';
import TipCard from '@/components/TipCard.vue';
import Challenge from '@/components/Challenge.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageMiro from '@/assets/images/brands/miro.png';
import imageOne from '@/assets/images/guide-3/image_1.png';
import Reference from '@/components/Reference.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Por que hacemos el mapa de empatía?',
        alternatives: [
            {
                answer: true,
                description:
                    'Nos permite recoger requerimientos para nuestro proyecto.'
            },
            {
                answer: false,
                description:
                    'Porque nos permite organizar la información de los clientes de una empresa.'
            },
            {
                answer: false,
                description:
                    'Cuando deseamos comprender al cliente/usuario y su contexto.'
            }
        ]
    },
    {
        id: 2,
        question: '¿Por qué es recomendable hacer el mapa de empatía en grupo?',
        alternatives: [
            {
                answer: true,
                description:
                    'Los diferente puntos de vista ayudaran a validar el perfil del cliente desde diferentes perspectivas.'
            },
            {
                answer: false,
                description:
                    'Para cumplir la meta de completarlo en 30 minutos.'
            },
            {
                answer: false,
                description:
                    'Por que se debe hacer por un equipo multidisciplinario.'
            }
        ]
    }
]);

const challenge2_tasks = [
    'Definir el usuario',
    'Identificar 2 ¿Qué ve?',
    'Identificar 2 ¿Qué dice y qué hace?',
    'Identificar 2 ¿Qué oye?',
    'Identificar 2 ¿Qué piensa y qué siente?',
    'Identificar 1 ¿Cuáles son los esfuerzos que realiza?',
    'Identificar 1 ¿Cuáles son los resultados/beneficios que espera obtener?'
];
</script>
<template>
    <GuideTitle>
        Mapa de Empatía
        <template v-slot:timeRead>3</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Es una herramienta para la síntesis de información sobre el
                cliente/usuario a través de visualización de lo que dice, hace,
                piensa y siente. El objetivo es ponerse en el lugar del cliente
                y plasmar su experiencia en una hoja de papel o en formato
                digital.
            </p>
            <p>
                Esto lo hace posible organizar los datos de la fase de Inmersión
                de tal manera como para proporcionar una comprensión de las
                situaciones que surgen del contexto, comportamiento,
                preocupaciones e incluso las aspiraciones del usuario (u otros
                agentes sujetos a examen).
            </p>
            <Reference
                :image="imageOne"
                description="Plantilla mapa de empatía. Fuente: rdstation.com"
            />
        </section>
        <Heading type="h1">¿Cuándo usar el mapa de empatía?</Heading>
        <section>
            <p>
                Cuando hay mucha información de campo y hay necesidad de
                organizar para generar una mejor comprensión del público
                objetivo con el fin de desarrollar una mayor empatía.
            </p>
        </section>
        <Heading type="h1">Elementos de un mapa de empatía</Heading>
        <section>
            <p>
                Un mapa de empatía esta segmentado en 6 partes o elementos que
                describen al cliente/usuario, estas son:
            </p>
            <Heading type="h2">¿Qué ve?</Heading>
            <p>
                Analiza el entorno cotidiano del cliente/usuario. Qué es lo que
                suele mirar en redes sociales, television, en donde vive,
                trabaja o estudia. Tenemos que conocer el contexto social de la
                persona.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    Ve a personas usar internet para revisar sus notas
                </TipCard>
                <TipCard type="do">
                    Ve a sus amigos revisar sus notas en el intranet de la
                    UNHEVAL
                </TipCard>
            </aside>
            <Heading type="h2">¿Qué dice y qué hace?</Heading>
            <p>
                Habrá que observar la coherencia que existe entre lo que el
                cliente habla o muestra y las acciones que lo respaldan. Examina
                de cerca su comportamiento para conocer qué tipo de cliente es,
                teniendo en cuenta sus ocupaciones, pasatiempos e intereses.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont"> Se informa como ver sus notas </TipCard>
                <TipCard type="do">
                    Pregunta a sus amigos como ingresar a ver las notas en el
                    intranet de la UNHEVAL
                </TipCard>
            </aside>
            <Heading type="h2">¿Qué oye?</Heading>
            <p>
                Implica toda la información que llega al cliente, ya sean
                conversaciones con sus amigos o familiares, la estación de radio
                o los podcast que escucha, las figuras públicas a las que sigue
                y otras comunicaciones que puedan generar opiniones o reseñas de
                las marcas.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    Escucha que no se puede entrar a ver las notas en el
                    intranet
                </TipCard>
                <TipCard type="do">
                    Escucha que algunos de sus amigos no pudieron ingresar a ver
                    sus notas en el intranet de la UNHEVAL
                </TipCard>
            </aside>
            <Heading type="h2">¿Qué piensa y qué siente?</Heading>
            <p>
                Aquí se plantea la situación general en la que se encuentra el
                cliente/usuario, involucra sus aspectos demográficos, económicos
                y psicológicos para indagar en lo que realmente le importa,
                cuáles son sus principales preocupaciones, sus inquietudes, sus
                sueños y sus aspiraciones. A partir de ello también se determina
                cómo es que siente o percibe a la marca.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont"> Se siente desorientado </TipCard>
                <TipCard type="do">
                    Se siente un poco desorientado de como debe de usar el
                    intranet de la UNHEVAL
                </TipCard>
            </aside>
            <Heading type="h2">¿Cuáles son los esfuerzos que realiza?</Heading>
            <p>
                Esta parte representa los obstáculos a los que se enfrenta el
                cliente/usuario en su vida, junto con las dudas, preocupaciones
                y frustraciones que experimenta.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    Le cuesta entrar a ver sus notas
                </TipCard>
                <TipCard type="do">
                    Le cuesta encontrar el enlace para ver sus notas
                </TipCard>
            </aside>
            <Heading type="h2">
                ¿Cuáles son los resultados/beneficios que espera obtener?
            </Heading>
            <p>
                Describe las posibilidades de satisfacción que puede lograr un
                cliente/usuario una vez que supera sus obstáculos.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    Tener una mejor pagina le permitira ver mas rapido sus notas
                    en el intranet
                </TipCard>
                <TipCard type="do">
                    Tener una interfaz mas limpia y usable le ayudaria a ver sus
                    notas en el intranet con mayor facilidad
                </TipCard>
            </aside>
        </section>
        <Heading type="h1">¿Cómo aplicar el mapa de empatía?</Heading>
        <section>
            <p>
                La construcción de los mapas de empatía es un ejercicio rápido
                que no suele superar los 30 minutos y se recomienda hacerlo en
                grupo, por ser mas dinámico, entretenido y porque los diferentes
                puntos de vista ayudaran a que el mapa sea mas fiable, pero
                también es susceptible de llevarla a la práctica
                individualmente.
            </p>
            <p>
                Generalmente se suele poner la plantilla en una pizarra grande a
                la vista de todo el grupo y mediante post-it se van escribiendo
                las respuestas hasta contestar todos los bloques de preguntas.
            </p>
            <p>
                Finalmente, se sacan conclusiones de acuerdo a la información
                que se ha descrito del cliente/usuario.
            </p>
        </section>
        <Heading type="h1">Reto #2</Heading>
        <Challenge time="1" :id="2" :tasks="challenge2_tasks">
            Crea un mapa de empatía a partir de los objetivos y tipo de perfil
            del usuario, planteados en el reto #1.
            <template v-slot:tools>
                <ResourceLink name="Miro" type="tool">
                    <ResourceCard
                        title="Miro"
                        description="Herramienta para organizar ideas"
                        type="tool"
                        :src="imageMiro"
                    />
                </ResourceLink>
                <ResourceLink name="Plantilla" type="download">
                    <ResourceCard
                        title="Plantilla"
                        description="Herramienta para organizar ideas"
                        type="download"
                    />
                </ResourceLink>
                <ResourceLink name="Ejemplos" type="download">
                    <ResourceCard
                        title="Ejemplos"
                        description="Herramienta para organizar ideas"
                        type="download"
                    />
                </ResourceLink>
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
