<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import imageOne from '@/assets/images/guide-10/image_1.png';
import imageTwo from '@/assets/images/guide-10/image_2.png';
import imageThree from '@/assets/images/guide-10/image_3.png';
import Blockquote from '@/components/Blockquote.vue';
import Heading from '@/components/Heading.vue';

const question1 = {
    question:
        '¿Por qué hacemos UX Writing?',
    answer: 1,
    alternatives: [
        'Ayudar al usuario mientras realiza una tarea con textos cortos, efectivos y agradables.',
        'Ayudar al usuario a completar una tarea con consejos claros y efectivos.',
        'Ayudar al usuario a entender nuestro objetivo como empresa o servicio.'
    ]
};

const question2 = {
    question:
        '¿Por qué es importante el voz y tono de la marca?',
    answer: 3,
    alternatives: [
        'Es la forma con la que los usuarios te conocen y conectan con la identidad de la empresa.',
        'Determina la calidad de tus servicios y al publico que se orienta.',
        'Es la forma en la que empatizas con el usuario para transmitir experiencias positivas.'
    ]
};
</script>
<template>
    <GuideTitle>
        UX Writing
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1" id="guide_8_title_1">Definición</Heading>
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
            <Blockquote>
                UX Writing se aplica en textos pequeños, suelen ser secciones
                donde queremos que el usuario actúe.
            </Blockquote>
        </section>
        <Heading type="h1" id="guide_8_title_2"
            >¿Cuándo se debe incorporar el UX Writing?</Heading
        >
        <section>
            <p>
                Es importante que antes de empezar a diseñar las pantallas o
                elegir los componentes de interacción, se defina lo que se va a
                contar.
            </p>
            <p>
                Idealmente, los UX Writers deben estar desde el inicio,
                trabajando de la mano con los stakeholders, diseñadores y
                desarrolladores, para delimitar la historia que se quiere contar
                a través del producto y escribir los contenidos de todas las
                piezas.
            </p>
        </section>
        <Heading type="h1" id="guide_8_title_3"
            >Aspectos a tener en cuenta</Heading
        >
        <section>
            <Heading type="h2" id="guide_8_title_4">El usuario</Heading>
            <p>
                Debemos conocer bien al usuario y entender sus emociones, sus
                necesidades e intereses para darle lo que busca, pero no solo
                basta con conocerlo bien, debemos saber guiarlo por la interfaz
                para que su experiencia sea positiva.
            </p>
            <Heading type="h2" id="guide_8_title_5"
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
            <Heading type="h2" id="guide_8_title_6">Los objetivos</Heading>
            <p>
                La redacción UX está muy relacionada con los objetivos que tiene
                la marca. Si tu intención es vender un servicio/producto nuevo,
                la mayoría de llamadas a la acción llevarán a este. Si lo que
                buscas es aumentar tu lista de suscriptores, el UX writer sabrá
                guiar al usuario hacia ese objetivo de manera intuitiva.
            </p>
            <Heading type="h2" id="guide_8_title_6"
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
        <Heading type="h1" id="guide_8_title_7"
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
        <Heading type="h1" id="guide_8_title_11">Evaluación</Heading>
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
