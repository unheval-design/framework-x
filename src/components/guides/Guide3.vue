<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';

const question1 = {
    question: '¿Por que hacemos el mapa de empatía?',
    answer: 1,
    alternatives: [
        'Nos permite recoger requerimientos para nuestro proyecto.',
        'Porque nos permite organizar la información de los clientes de una empresa.',
        'Cuando deseamos comprender al cliente/usuario y su contexto.'
    ]
};

const question2 = {
    question: '¿Por qué es recomendable hacer el mapa de empatía en grupo?',
    answer: 3,
    alternatives: [
        'Los diferente puntos de vista ayudaran a validar el perfil del cliente desde diferentes perspectivas.',
        'Para cumplir la meta de completarlo en 30 minutos.',
        'Por que se debe hacer por un equipo multidisciplinario.'
    ]
};
</script>
<template>
    <GuideTitle>
        Mapa de Empatía
        <template v-slot:timeRead>3</template>
    </GuideTitle>
    <GuideBody>
        <h1 id="guide_3_title_1">Definición</h1>
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
        </section>
        <h1 id="guide_3_title_2">¿Cuándo usar el mapa de empatía?</h1>
        <section>
            <p>
                Cuando hay mucha información de campo y hay necesidad de
                organizar para generar una mejor comprensión del público
                objetivo con el fin de desarrollar una mayor empatía.
            </p>
        </section>
        <h1 id="guide_3_title_3">Elementos de un mapa de empatía</h1>
        <section>
            <p>
                Un mapa de empatía esta segmentado en 6 partes o elementos que
                describen al cliente/usuario, estas son:
            </p>
            <h2 id="guide_3_title_4">¿Qué ve?</h2>
            <p>
                Analiza el entorno cotidiano del cliente/usuario. Qué es lo que
                suele mirar en redes sociales, television, en donde vive,
                trabaja o estudia. Tenemos que conocer el contexto social de la
                persona.
            </p>
            <h2 id="guide_3_title_5">¿Qué dice y qué hace?</h2>
            <p>
                Habrá que observar la coherencia que existe entre lo que el
                cliente habla o muestra y las acciones que lo respaldan. Examina
                de cerca su comportamiento para conocer qué tipo de cliente es,
                teniendo en cuenta sus ocupaciones, pasatiempos e intereses.
            </p>
            <h2 id="guide_3_title_6">¿Qué oye?</h2>
            <p>
                Implica toda la información que llega al cliente, ya sean
                conversaciones con sus amigos o familiares, la estación de radio
                o los podcast que escucha, las figuras públicas a las que sigue
                y otras comunicaciones que puedan generar opiniones o reseñas de
                las marcas.
            </p>
            <h2 id="guide_3_title_7">¿Qué piensa y qué siente?</h2>
            <p>
                Aquí se plantea la situación general en la que se encuentra el
                cliente/usuario, involucra sus aspectos demográficos, económicos
                y psicológicos para indagar en lo que realmente le importa,
                cuáles son sus principales preocupaciones, sus inquietudes, sus
                sueños y sus aspiraciones. A partir de ello también se determina
                cómo es que siente o percibe a la marca.
            </p>
            <h2 id="guide_3_title_8">¿Cuáles son los esfuerzos que realiza?</h2>
            <p>
                Esta parte representa los obstáculos a los que se enfrenta el
                cliente/usuario en su vida, junto con las dudas, preocupaciones
                y frustraciones que experimenta.
            </p>
            <h2 id="guide_3_title_9">
                ¿Cuáles son los resultados/beneficios que espera obtener?
            </h2>
            <p>
                Describe las posibilidades de satisfacción que puede lograr un
                cliente/usuario una vez que supera sus obstáculos.
            </p>
        </section>
        <h1 id="guide_3_title_10">¿Cómo aplicar el mapa de empatía?</h1>
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
        <h1 id="guide_3_title_11">Evaluación</h1>
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
