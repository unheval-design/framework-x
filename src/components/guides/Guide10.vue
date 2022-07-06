<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import Evaluation from '@/components/Evaluation.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageFigma from '@/assets/images/brands/figma.png';
import imageOne from '@/assets/images/guide-10/image_1.png';
import imageTwo from '@/assets/images/guide-10/image_2.png';
import imageDoOne from '@/assets/images/guide-10/image_do_1.png';
import imageDontOne from '@/assets/images/guide-10/image_dont_1.png';
import TipCard from '@/components/TipCard.vue';
import Challenge from '@/components/Challenge.vue';
import { ref } from '@vue/reactivity';

const questions = ref([
    {
        id: 1,
        question: '¿Para qué usamos los moodboard?',
        alternatives: [
            {
                answer: false,
                description:
                    'Organizar información, que siva de inspiración en el proceso de diseño.'
            },
            {
                answer: false,
                description: 'Definir como seran los componentes a diseñar.'
            },
            {
                answer: false,
                description:
                    'Organizar elementos que sirvan para comparar con nuestro diseño actual.'
            }
        ]
    },
    {
        id: 2,
        question: '¿Cuál es la ventaja de usar un moodboard digital?',
        alternatives: [
            {
                answer: false,
                description:
                    'Pueden contener enormes especios de trabajo para recolectar mucha información.'
            },
            {
                answer: false,
                description:
                    'Por que ayudan a que el proceso de recoleccion sea mas rápida.'
            },
            {
                answer: false,
                description:
                    'Pueden contener mayor numero de personas trabajando al mismo tiempo.'
            }
        ]
    }
]);

const challenge10_tasks = [
    'Define el propósito',
    'Define el tono y los valores',
    'Llenar el moodboard con recursos',
    'Elegir los recursos mas relevantes',
    'Resaltar los elementos mas relvantes'
];
</script>

<template>
    <GuideTitle>
        Moodboards
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Su traducción literal es mapa de inspiración y aunque su uso
                está muy asociado al ámbito de la decoración de interiores o la
                moda, realmente se utiliza en entornos creativos muy diversos,
                desde el diseño de productos o servicios al audiovisual o el
                diseño gráfico.
            </p>
            <p>
                Un Moodbard es un panel de imágenes recogidas en torno a un
                marco o concepto. Su finalidad es organizar la información de
                forma clara, bien sea para inspirar el lanzamiento de nuevas
                ideas, o para mostrar de forma atractiva imágenes o elementos
                vertebrados por un concepto.
            </p>
        </section>
        <Heading type="h1">¿Por qué usar un moodboard?</Heading>
        <section>
            <p>
                Funcionan como un depósito de activos centralizado y el equipo
                puede acceder a ellos en cualquier momento. Los Moodboards son
                útiles para:
            </p>
            <p>
                <strong>Documentación de investigación</strong>
            </p>
            <p>
                Se pueden tomar varios pasos de investigación en forma de
                paneles de estado de ánimo, como la investigación de evaluación
                comparativa, la definición de personas y la ideación
                de interfaces de usuario.
            </p>
            <p>
                <strong>Exploración y orientación para diseñadores</strong>
            </p>
            <p>
                Al comienzo del proyecto, un moodboard es un espacio donde los
                diseñadores pueden explorar sus ideas libremente, sin
                juzgar. Cuando se concluye un tablero, se convierte en una
                referencia para el equipo a lo largo del proyecto.
            </p>
            <p>
                <strong>Unificando visiones</strong>
            </p>
            <p>
                Una idea es, por definición, abstracta, y esbozar pensamientos
                es una de las funciones más importantes de un tablero digital o
                físico. Diferentes partes interesadas pueden contribuir con sus
                visiones y llegar a un terreno común, haciendo que todos tengan
                más confianza en la dirección del proyecto.
            </p>
        </section>
        <Heading type="h1">Tipos de Moodboard</Heading>
        <section>
            <p>
                Un moodboard puede ser físico o digital, y ambos tienen sus
                valores: los tableros digitales son más rápidos de ensamblar,
                formatear y aceptar referencias digitales nativas, como
                animaciones y GIF. Las pizarras físicas requieren un mayor
                esfuerzo para ser formateadas y pueden exponerse en entornos
                físicos, como en la pared de un espacio de trabajo.
            </p>
            <p>
                <strong>Moodboard Físico</strong>
            </p>
            <p>
                Es posible explorar de manera más completa objetos como
                pinturas, telas, papeles, metales y perfumes, además de
                materiales orgánicos como plantas. Algunos de estos elementos,
                cuando se reproducen digitalmente, pierden partes de su
                significado, como los asociados con el tacto o el olfato.
            </p>
            <Reference
                :image="imageOne"
                description="Mood boards. Fuente: invisionapp.com"
            />
            <p>
                <strong>Moodboard Digital</strong>
            </p>
            <p>
                Pueden aprovechar su entorno nativo y agregar una inmensa
                cantidad de información que se vuelve accesible de una manera
                mucho más práctica. Este tipo de tablero favorece a los equipos
                remotos y al catálogo de medios, como videos y animaciones.
            </p>
            <Reference
                :image="imageTwo"
                description="UI Moodboard Template. Fuente: milanote.com"
            />
        </section>
        <Heading type="h1">¿Qué incluye un moodboard?</Heading>
        <section>
            <p>
                Puede incluir cualquier referencia, algunos elementos comunes
                son:
            </p>
            <p><strong>Colores</strong></p>
            <p>
                Registra los colores de la marca o de la competencia, prueba
                nuevas paletas relacionadas con las emociones que deseas
                explorar dentro de nuevos conceptos.
            </p>
            <p><strong>Imágenes</strong></p>
            <p>
                hay muchas opciones de imágenes. Es posible explorar fotografías
                que traduzcan los conceptos deseados o incluso construir una
                galería de logotipos, íconos e ilustraciones para futuras
                referencias.
            </p>
            <p><strong>Animaciones</strong></p>
            <p>
                Las animaciones, que se registran fácilmente en paneles de
                estado de ánimo digitales, contienen elementos emocionales que
                conforman una experiencia completa, como referencias de curvas
                sencillas, barras de progreso, íconos de carga animados,
                interacciones en el desplazamiento o microinteracciones.
            </p>
            <p><strong>Fuentes</strong></p>
            <p>
                Busque familias tipográficas que puedan ayudarlo a componer sus
                caminos visuales, reforzando o contrastando las ideas presentes
                en el pizarrón.
            </p>
            <p><strong>Texturas y patrones</strong></p>
            <p>
                Estas son excelentes formas de evocar recuerdos afectivos y
                pueden indicar indirectamente conceptos establecidos.
            </p>
            <p><strong>Textos</strong></p>
            <p>
                Organice sus notas, ideas, palabras clave o citas, junto con
                otros elementos del tablero, para enfatizar sus ideas.
            </p>
        </section>
        <Heading type="h1">¿Cómo hacer un Moodboard?</Heading>
        <section>
            <p>
                Siga estos pasos clave para crear paneles de ideas efectivos y
                centrados en el usuario:
            </p>
            <Heading type="h2">Entiende tu propósito</Heading>
            <p>
                Antes de comenzar a recolectar las piezas del rompecabezas,
                elige el camino principal. Cree una declaración clara que
                explique qué emoción debe activarse en una persona cuando
                contacta su solución:
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    “Cuando Edith instala nuestra aplicación, debe ver una
                    interfaz bonita”
                </TipCard>
                <TipCard type="do">
                    “Cuando Edith instala nuestra aplicación, debe estar
                    motivada para comenzar a hacer ejercicio”
                </TipCard>
            </aside>
            <Heading type="h2">Encuentra tu tono</Heading>
            <p>
                Establecer el tono de la marca ayuda a preparar un moodboard
                efectivo. Un ejercicio simple es elegir algunas palabras clave
                que representen la visión del equipo. Las palabras de tono se
                pueden registrar en el propio tablero para que siempre estén
                accesibles para todos.
            </p>
            <Heading type="h2">Reunir datos sobre el tema</Heading>
            <p>
                Investigue un poco más sobre el tema antes de empezar a buscar
                referencias visuales. Recopile notas tomadas durante las
                reuniones, datos de encuestas de usuarios y entrevistas con
                clientes para tratar de extraer información para el proyecto.
            </p>
            <Heading type="h2">Define tus valores</Heading>
            <p>
                Al comenzar con un moodboard, establezca valores claros desde el
                principio, como por ejemplo: moderno, divertido, infantil,
                colorido o deportivo. Para facilitar el proceso de selección de
                referencias, define tres o cuatro adjetivos para tu tablero.
            </p>
            <Heading type="h2">Piensa en grande, luego en pequeño</Heading>
            <p>
                Comience por definir grandes grupos dentro del tema principal y
                profundice en cada uno, lo que organizará el proceso de
                descubrimiento.
            </p>
            <Heading type="h2">Ser selectivo</Heading>
            <p>
                No ponga simplemente algo en su moodboard. Elija solo lo que
                marcará la diferencia en la dirección del proyecto. Si tienes
                dudas sobre piezas muy similares, elige solo una que represente
                esa idea.
            </p>
            <Heading type="h2">Organice visualmente sus referencias</Heading>
            <p>
                Utiliza el tamaño de cada elemento para resaltar su importancia
                en la composición. Las fotos más grandes y las frases más
                grandes funcionan naturalmente como puntos destacados durante
                este caos organizado.
            </p>
            <aside class="tips_grid">
                <TipCard type="dont">
                    <template v-slot:image>
                        <img :src="imageDontOne" />
                    </template>
                    Si los elementos tienen el mismo tamaño o no destacan uno
                    sobre otro, no podremos diferenciar los mas importantes.
                </TipCard>
                <TipCard type="do">
                    <template v-slot:image>
                        <img :src="imageDoOne" />
                    </template>
                    Destacar los elementos por tamaño o color, ya sean fotos
                    colores o tipografia transmitirán facilmente la jerarquia e
                    importancia de estos.
                </TipCard>
            </aside>
        </section>
        <Challenge time="1" :id="10" :tasks="challenge10_tasks">
            <template v-slot:title>
                <Heading type="h1">Reto #10 </Heading>
            </template>
            Elaborar un moodbard con ideas para un rediseño del login del
            intranet de alumnos de la UNHEVAL.
            <template v-slot:tools>
                <ResourceCard
                    title="Figma"
                    description="Herramienta para organizar ideas"
                    type="tool"
                    :src="imageFigma"
                />
                <ResourceCard
                    title="Plantilla"
                    description="Herramienta para organizar ideas"
                    type="download"
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
