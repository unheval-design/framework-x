<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TipCard from '@/components/TipCard.vue';
import Blockquote from '@/components/Blockquote.vue';
import Chip from '@/components/Chip.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';

</script>

<template>
    <GuideTitle>
        Entrevistas a Usuarios
        <template v-slot:timeRead>5</template>
    </GuideTitle>
    <GuideBody>
        <h1 id="guide_1_title_1">Definición</h1>
        <section>
            <p>
                Las entrevistas con usuarios, son un método cualitativo donde un
                entrevistador le hace preguntas a un usuario, el cual debe ser
                el usuario final. El objetivo es conocerlo mejor y saber sus
                impresiones para entender sus comportamientos y dificultades al
                usar un producto.
            </p>
            <p>
                Uno de los puntos importantes al hacer una entrevista con
                usuarios es que “jamás, pedimos al usuario que nos diga lo que
                quiere”. Lo que se hace es preguntar como es su experiencia hoy
                en día en un determinado producto o servicio.
            </p>
            <p>Los pasos clave de proceso de entrevistas con usuarios son:</p>
            <p>
                <ul>
                    <li>
                        Estudiar profundamente a las personas, idealmente en su
                        contexto.
                    </li>
                    <li>
                        Explorar no solo sus comportamientos sino también el
                        significado detrás de esos comportamientos.
                    </li>
                    <li>
                        Dar sentido a los datos usando inferencia, interpretación,
                        análisis y síntesis.
                    </li>
                    <li>
                        Usar esos conocimientos para apuntar hacia un diseño,
                        servicio, producto u otra solución.
                    </li>
                </ul>
            </p>
        </section>
        <h1 id="guide_1_title_2">¿Cuándo usar la entrevista a usuario?</h1>
        <section>
            <p>
                Se las utiliza como método de recolección de datos en la fase inicial de un proyecto, para posteriormente crear Mapas de Empatía y Journey Map.
            </p>
            <p>
                La entrevista no es el enfoque adecuado para todos los problemas. Debido a que favorece la profundidad sobre el tamaño de la muestra, no es una fuente de datos estadísticamente significativos. Al ser semiestructurada, cada entrevista será única, lo que dificultará contar objetivamente los puntos de datos de toda la muestra.
            </p>
            <p>
                Las entrevistas no son buenas para predecir el comportamiento futuro, especialmente la intención de compra futura o descubrir las expectativas de precios.
            </p>
        </section>
        <h1 id="guide_1_title_3">Métodos de Entrevista</h1>
        <section>
            <p>
                Existen 3 tipos de entrevistas categorizadas por el grado de flexibilidad en el abordaje de los temas:
            </p>
            <h2 id="guide_1_title_4">Abiertas</h2>
            <p>
                Permiten al usuario comentar su experiencia sin ningún tipo de limitaciones en su respuesta.
            </p>
            <aside class="tips_grid">
                <TipCard type="do">
                    ¿Cómo es tu experiencia usando el intranet?
                </TipCard>
                <TipCard type="dont">
                    ¿Tu experiencia con el intranet es buena?
                </TipCard>
            </aside>
            <p>
                Puede usarse en fases conceptuales de un proyecto, cuando no tenemos preguntas concretas sino temas generales que queremos explorar. No es muy habitual su uso, pero puede tener sentido cuando estamos tratando de validar o desarrollar una idea inicial de producto.
            </p>
            <h2 id="guide_1_title_5">Estructuradas</h2>
            <p>
                Las preguntas ya están definidas y se utilizan preguntas cerradas.
            </p>
            <aside class="tips_grid">
                <TipCard type="do">
                    ¿Tu experiencia con los pagos en línea es buena o mala?
                </TipCard>
                <TipCard type="dont">
                    ¿Que experiencias tienes pagando en línea?
                </TipCard>
            </aside>
            <p>
                No suele usarse en fases exploratorias de un proyecto, ya que es complicado definir las preguntas que nos interesa responder si aun no comprendemos el problema. No debe confundirse con una encuesta, ya que en una entrevista estructurada el usuario puede responder libremente e incluso plantear otras cuestiones no previstas, mientras que en una encuesta las opciones de respuesta están cerradas.
            </p>
            <h2 id="guide_1_title_6">Semi-estructuradas</h2>
            <p>
                Una entrevista semi-estructurada combina preguntas cerradas con abiertas y permite recoger información sistemática con un margen para explorar nuevos temas surgidos durante la entrevista.
            </p>
            <Blockquote>
                Si queremos descubrir nuevas necesidades o problemas de los usuarios, optaremos por un metodo mas abierto, mientras que si lo que pretendemos es comprender mejr un tema cocreto que ya hemos identificado y estudiado previamente, optaremos por un enfoque más estructurado.
            </Blockquote>
        </section>
        <h1 id="guide_1_title_7">Preparación de la entrevista</h1>
        <section>
            <h2 id="guide_1_title_8">Estableciendo tus objetivos</h2>
            <p>
                Aclarar los objetivos, lo que espera obtener de la investigación, es un aspecto extremadamente desafiante de muchos compromisos.
            </p>
            <p>
                Para ayudarnos a plantear los objetivos podrías responder las siguientes preguntas:
            </p>
            <p>
                <ol>
                    <li>¿Qué quieres conocer sobre tus usuarios? o ¿Qué hipótesis quieres confirmar con datos concretos?</li>
                    <li>¿Cómo podrás usar esa información para mejorar el diseño de tu producto?</li>
                </ol>
            </p>
            <p>
                Podrias apoyarte de
                <ResourceLink type="tool">
                    Google Keeps
                    <template v-slot:popup>
                        <ResourceCard
                            title="Google Keeps"
                            description="Herramienta para organizar ideas"
                            type="tool"
                            src="https://androidtr.es/wp-content/uploads/2020/11/google-keep.jpg.webp"
                            />
                    </template>
                </ResourceLink>
                para ir apuntando los objetivos que vayas descubriendo.</p>
            <p>
                Las respuestas han de ser siempre concretas y precisas, ya que las respuestas generales harán que se pierda el objetivo fácilmente o no se puedan alcanzar.
            </p>
            <aside class="tips_grid">
                <TipCard type="do">
                    Conocer cómo interactuan con dispositivos móviles, las personas que entran a la página principal de la UNHEVAL.
                </TipCard>
                <TipCard type="dont">
                    Encontrar todos los errores de responsividad de la pagina web de la UNHEVAL.
                </TipCard>
            </aside>
            <h2 id="guide_1_title_9">Encontrar Participantes</h2>
            <p>
                Encontrar participantes es una parte crucial de la preparación para el trabajo de campo, sin embargo, algunos equipos lo tratan de manera muy casual, confiando en amigos y familiares, o atrapando a los participantes en la calle o en la tienda, lo que se conoce como intercepción.
            </p>
            <p>
                Lo mejor es crear varios perfiles en función de criterios tanto demográficos (género, edad lugar de residencia) como de comportamiento (sistema operativo, actividades, tipo de uso) y plasmarlo en un documento. Este documento se denomina (Screener de captación de usuarios).
            </p>
            <p>
                Screener de captación de usuarios: Es un documento-guia en el que se describen una serie de características que deben cumplir los usuarios para participar en una prueba de investigación. Puedes usar esta
                <ResourceLink type="download">
                    plantilla de screener
                    <template v-slot:popup>
                        <ResourceCard
                            type="download"
                            title="Plantilla.pdf"
                            description="Formato basico para entrevistas"
                        />
                    </template>
                </ResourceLink>
                para empezar a definir tus participantes.
            </p>
            <h2 id="guide_1_title_10">Estructura de la entrevista</h2>
            <p>
                Un buen guion permitirá recoger la información que se necesita sin distracciones.
            </p>
            <p>
                Una estructura básica podría tener la siguiente estructura:
            </p>
            <p>
                <ul>
                    <li>
                        Introducción
                       <ul>
                            <li>
                                Presentación del entrevistador
                            </li>
                            <li>
                                Finalidad
                            </li>
                            <li>
                                Autorización para grabaciones
                            </li>
                       </ul>
                    </li>
                    <li>
                        Preguntas introductorias para establecer confianza
                    </li>
                    <li>
                        Preguntas especificas
                    </li>
                    <li>
                        Cierre de entrevista
                    </li>
                </ul>
            </p>
        </section>
        <h1 id="guide_1_title_11">Evaluación</h1>
        <section>
            <p>
                Valida tu aprendizaje
            </p>
        </section>
    </GuideBody>
</template>
<style lang="scss"></style>
