<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import imageKeep from '@/assets/images/brands/keep.png';
import Blockquote from '@/components/Blockquote.vue';
import Heading from '@/components/Heading.vue';
import TipCard from '@/components/TipCard.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import Challenge from '@/components/Challenge.vue';
import imageDoOne from '@/assets/images/guide-7/image_do_1.png';
import imageDontOne from '@/assets/images/guide-7/image_dont_1.png';
import imageDoTwo from '@/assets/images/guide-7/image_do_2.png';
import imageDontTwo from '@/assets/images/guide-7/image_dont_2.png';
import imageDoThree from '@/assets/images/guide-7/image_do_3.png';
import imageDontThree from '@/assets/images/guide-7/image_dont_3.png';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Por qué hacemos UX Writing?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Ayudar al usuario mientras realiza una tarea con textos cortos, efectivos y agradables.'},
            { id: 2, description: 'Ayudar al usuario a completar una tarea con consejos claros y efectivos.'},
            { id: 3, description: 'Ayudar al usuario a entender nuestro objetivo como empresa o servicio.'}
        ]
    },
    {
        id: 2,
        question: '¿Por qué es importante el voz y tono de la marca?',
        answer: 1,
        alternatives: [
            { id: 1, description: 'Es la forma con la que los usuarios te conocen y conectan con la identidad de la empresa.'},
            { id: 2, description: 'Determina la calidad de tus servicios y al publico que se orienta.'},
            { id: 3, description: 'Es la forma en la que empatizas con el usuario para transmitir experiencias positivas.'}
        ]
    }
]);

const challenge7_tasks = [
    'Seleccionar un evento',
    'Identificar usuario',
    'Identificar el objetivo',
    'Elegir voz y tono',
    'Mejorar los textos'
];
</script>
<template>
    <GuideTitle>
        UX Writing
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" >Definición</Heading>
        <section>
            <p>
                Si lo definimos de forma literal, UX significa “user experience”
                o “experiencia de usuario” y writing “escritura”; por lo tanto,
                son los textos que guían al usuario mientras interactúa con la
                interfaz de tu página web o app, con el fin de que tenga
                sensaciones positivas y sepa qué hacer en cada momento.
            </p>
            <p>
                Dicho de otro modo, son los textos pequeños que ayudan a que tus
                clientes completen el proceso de compra, suscripción o reserva
                con éxito y sin perderse por el camino, mientras se llevan una
                impresión muy buena de tu marca.
            </p>
        </section>
        <Heading type="h1" 
            >¿Cómo conseguir un UX Writing atractivo y de conversión?</Heading
        >
        <section>
            <p>Asegúrate de verificar estos puntos para saber si estás en el camino correcto:</p>
            <p>
                <ul>
                    <li>¿Es el texto amigable con el usuario?</li>
                    <li>¿Cómo hace sentir a tus usuarios?</li>
                    <li>¿Consideras que comunica exactamente lo que quieres comunicar?</li>
                    <li>¿El texto aporta sentido al flujo?</li>
                    <li>¿Está escrito en forma consistente al resto del textos?</li>
                    <li>¿Tus textos representan el espíritu de la marca o producto?</li>
                    <li>¿Tienen el tono correcto?</li>
                    <li>¿Humanizan la herramienta?</li>
                </ul>
            </p>
            <p>y aquí algunas claves para mejorar tu UX Wrinting:</p>
            <p>
                <ul>
                    <li>Sé breve y eficiente.</li>
                    <li>Usa el menor número de palabras posible manteniendo el significado.</li>
                    <li>Adapta el texto y su longitud a cada tipo de pantalla (responsive).</li>
                    <li>Háblale al tu lector de forma directa.</li>
                    <li>Elimina tecnicismos y palabras difíciles de entender.</li>
                    <li>Evita ser intrusivo.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1" 
            >Aspectos a tener en cuenta</Heading
        >
        <section>
            <Heading type="h2" >El usuario</Heading>
            <p>
                Debemos conocer bien al usuario y entender sus emociones, sus
                necesidades e intereses para darle lo que busca, pero no solo
                basta con conocerlo bien, debemos saber guiarlo por la interfaz
                para que su experiencia sea positiva.
            </p>
            <p>
                Por ejemplo en la busqueda de la pagina principal de la UNHEVAL debes tener en cuenta:
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontTwo">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoTwo">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2" >Los objetivos</Heading>
            <p>
                La redacción UX está muy relacionada con los objetivos que tiene
                la marca. Si tu intención es vender un servicio/producto nuevo,
                la mayoría de llamadas a la acción llevarán a este. Si lo que
                buscas es aumentar tu lista de suscriptores, el UX writer sabrá
                guiar al usuario hacia ese objetivo de manera intuitiva.
            </p>
            <p>
                Por ejemplo en la pagina web de admisión de la UNHEVAL tenemos un botón de llamar a la acción:
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontOne">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoOne">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2" 
                >Voz y tono de la marca</Heading
            >
            <p>
                El tono y la voz son aspectos que se determinan desde el
                principio y que acompañarán a tu marca a lo largo de su
                trayectoria. Será la forma en la que tu público te reconocerá y
                conectará contigo. Por lo tanto, la redacción UX tiene que ir
                acorde con tu identidad.
            </p>
            <p>
                Suele funcionar muy bien utilizar un lenguaje más coloquial y
                cercano, ya que estamos teniendo una conversación con el usuario
                para guiarle en sus decisiones. Puede ser un guiño para crearle
                simpatía. Aún así, si tu identidad de marca es seria y
                profesional, los textos no tienen que aparentar lo contrario.
            </p>
            <p>
                Por ejemplo en la aplicacion web de pagos de la UNHEVAL debemos tomar en cuenta lo siguiente:
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontThree">
                    </template>
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoThree">
                    </template>
                </TipCard>
            </aside>
            <Heading type="h2" 
                >Movimientos previos y posteriores</Heading
            >
            <p>
                Por último es imprescindible entender en qué punto de la
                interfaz nos encontramos, cómo llegó el usuario allí y hacia
                dónde querrá/deberá ir después.
            </p>
            <p>
                Los textos tendrán que ir en sintonía con todo el proceso para
                que, como ya sabes, el usuario no pierda el hilo y se vaya sin
                actuar.
            </p>
        </section>
        <Challenge time="1" :id="7" :tasks="challenge7_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #7 </Heading>
            </template>
            Mejora el UX Writing de un evento de la pagina de eventos de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Keep"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageKeep"
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
            <aside class="tests_grid">
                <Evaluation :questions="questions" />
            </aside>
        </section>
    </GuideBody>
</template>

<style></style>
