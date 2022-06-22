<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageFigma from '@/assets/images/brands/figma.png';
import imagePs from '@/assets/images/brands/ps.png';
import imageNiice from '@/assets/images/brands/niice.png';
import imageSavee from '@/assets/images/brands/savee.png';
import imageOne from '@/assets/images/guide-11/image_1.png';
import imageTwo from '@/assets/images/guide-11/image_2.png';
import imageThree from '@/assets/images/guide-11/image_3.gif';
import imageFour from '@/assets/images/guide-11/image_4.png';
import imageFive from '@/assets/images/guide-11/image_5.png';
import imageSix from '@/assets/images/guide-11/image_6.png';

const question1 = {
    question: '¿Para qué usamos los moodboard?',
    answer: 1,
    alternatives: [
        'Organizar información, que siva de inspiración en el proceso de diseño.',
        'Definir como seran los componentes a diseñar.',
        'Organizar elementos que sirvan para comparar con nuestro diseño actual.'
    ]
};

const question2 = {
    question: '¿Cuál es la ventaja de usar un moodboard digital?',
    answer: 3,
    alternatives: [
        'Pueden contener enormes especios de trabajo para recolectar mucha información.',
        'Por que ayudan a que el proceso de recoleccion sea mas rápida.',
        'Pueden contener mayor numero de personas trabajando al mismo tiempo.'
    ]
};
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
                Estos paneles se utilizan para conectar ideas de forma
                abstracta, unificando la visión de las partes interesadas, los
                usuarios y el equipo de diseño. Funcionan como un depósito de
                activos centralizado y el equipo puede acceder a ellos en
                cualquier momento. Los Moodboards son útiles para:
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
            <p>
                <strong>Moodboard Digital</strong>
            </p>
            <p>
                Pueden aprovechar su entorno nativo y agregar una inmensa
                cantidad de información que se vuelve accesible de una manera
                mucho más práctica. Este tipo de tablero favorece a los equipos
                remotos y al catálogo de medios, como videos y animaciones.
            </p>
        </section>
        <Heading type="h1">¿Qué incluye un moodboard?</Heading>
        <section>
            <p>
                Puede incluir cualquier referencia, pero lo más importante es la
                correlación y el equilibrio entre todos los elementos que
                componen el mood board. Algunos elementos comunes son:
            </p>
            <Heading type="h2">Colores</Heading>
            <p>
                Registra los colores de la marca o de la competencia, prueba
                nuevas paletas relacionadas con las emociones que deseas
                explorar dentro de nuevos conceptos.
            </p>
            <Reference
                :image="imageOne"
                description="Paletas de colores en tendencia. Fuente: coolors.co"
            />
            <Heading type="h2">Imágenes</Heading>
            <p>
                hay muchas opciones de imágenes. Es posible explorar fotografías
                que traduzcan los conceptos deseados o incluso construir una
                galería de logotipos, íconos e ilustraciones para futuras
                referencias.
            </p>
            <Reference
                :image="imageTwo"
                description="Imágenes sobre universidad. Fuente: unsplash.com"
            />
            <Heading type="h2">Animaciones</Heading>
            <p>
                Las animaciones, que se registran fácilmente en paneles de
                estado de ánimo digitales, contienen elementos emocionales que
                conforman una experiencia completa, como referencias de curvas
                sencillas, barras de progreso, íconos de carga animados,
                interacciones en el desplazamiento o microinteracciones.
            </p>
            <Reference
                :image="imageThree"
                description="An Impressive UI /UX portfolio. Author: Daniel Tan’s"
            />
            <Heading type="h2">Fuentes</Heading>
            <p>
                Busque familias tipográficas que puedan ayudarlo a componer sus
                caminos visuales, reforzando o contrastando las ideas presentes
                en el pizarrón.
            </p>
            <Reference
                :image="imageFour"
                description="10 Sans-Serifs humanistas más populares. Fuente: typewolf.com"
            />
            <Heading type="h2">Texturas y patrones</Heading>
            <p>
                Estas son excelentes formas de evocar recuerdos afectivos y
                pueden indicar indirectamente conceptos establecidos.
            </p>
            <Reference
                :image="imageFive"
                description="Patrones de circulos punteados. Author: Zebra Finch."
            />
            <Heading type="h2">Textos</Heading>
            <p>
                Organice sus notas, ideas, palabras clave o citas, junto con
                otros elementos del tablero, para enfatizar sus ideas.
            </p>
            <Reference
                :image="imageSix"
                description="Moodboard con textos. Author: Thyra de Graaf."
            />
        </section>
        <Heading type="h1">¿Cómo hacer un Moodboard?</Heading>
        <section>
            <p>
                Siga estos pasos clave para crear paneles de ideas efectivos y
                centrados en el usuario:
            </p>
            <p>
                <strong>Entiende tu propósito</strong>
            </p>
            <p>
                Antes de comenzar a recolectar las piezas del rompecabezas,
                elige el camino principal. Cree una declaración clara que
                explique qué emoción debe activarse en una persona cuando
                contacta su solución:
            </p>
            <p>
                <i
                    >“Cuando Edith instala nuestra aplicación, debe estar
                    motivada para comenzar a hacer ejercicio”.</i
                >
            </p>
            <p>
                <strong>Encuentra tu tono</strong>
            </p>
            <p>
                Establecer el tono de la marca ayuda a preparar un moodboard
                efectivo. Un ejercicio simple es elegir algunas palabras clave
                que representen la visión del equipo. Las palabras de tono se
                pueden registrar en el propio tablero para que siempre estén
                accesibles para todos.
            </p>
            <p>
                <strong>Reunir datos sobre el tema</strong>
            </p>
            <p>
                Investigue un poco más sobre el tema antes de empezar a buscar
                referencias visuales. Recopile notas tomadas durante las
                reuniones, datos de encuestas de usuarios y entrevistas con
                clientes para tratar de extraer información para el proyecto.
            </p>
            <p>
                <strong>Define tus valores</strong>
            </p>
            <p>
                Al comenzar con un moodboard, establezca valores claros desde el
                principio, como por ejemplo: moderno, divertido, infantil,
                colorido o deportivo. Para facilitar el proceso de selección de
                referencias, define tres o cuatro adjetivos para tu tablero.
            </p>
            <p>
                <strong>Piensa en grande, luego en pequeño</strong>
            </p>
            <p>
                Comience por definir grandes grupos dentro del tema principal y
                profundice en cada uno, lo que organizará el proceso de
                descubrimiento.
            </p>
            <p>
                <strong>Ser selectivo</strong>
            </p>
            <p>
                No ponga simplemente algo en su moodboard. Elija solo lo que
                marcará la diferencia en la dirección del proyecto. Si tienes
                dudas sobre piezas muy similares, elige solo una que represente
                esa idea.
            </p>
            <p>
                <strong>Organice visualmente sus referencias</strong>
            </p>
            <p>
                Utiliza el tamaño de cada elemento para resaltar su importancia
                en la composición. Las fotos más grandes y las frases más
                grandes funcionan naturalmente como puntos destacados durante
                este caos organizado.
            </p>
        </section>
        <Heading type="h1"
            >¿Que herramientas usar para hacer un Moodboard?</Heading
        >
        <section>
            <p>
                Hay muchas técnicas para crear moodboards, es importante
                comprender cuál se adapta mejor a su proyecto y equipo
                creativo. En proyectos de diseño web o aplicaciones, se
                recomienda una pizarra digital para recopilar referencias de
                animaciones, microinteracciones y tipografía; sin embargo, tener
                una pizarra física en la oficina puede ser un recordatorio
                constante para todos los que la ven.
            </p>
            <p>
                Estas son algunas excelentes opciones para hacer moodboards
                digitales:
            </p>
            <p>
                <ResourceLink type="tool">
                    Niice
                    <template v-slot:popup>
                        <ResourceCard
                            title="Niice"
                            description="Herramienta para inspiración"
                            type="tool"
                            :src="imageNiice"
                        />
                    </template> </ResourceLink
                >: Esta es una de las soluciones más completas para crear
                moodboards. Permite varios niveles de personalización, incluido
                el soporte para incrustaciones de video y modelos 3D, así como
                una extensión conveniente para navegadores que facilita la
                inclusión de cualquier elemento en sus tableros.
            </p>
            <p>
                <ResourceLink type="tool">
                    Savee
                    <template v-slot:popup>
                        <ResourceCard
                            title="Savee"
                            description="Herramienta para inspiración"
                            type="tool"
                            :src="imageSavee"
                        />
                    </template> </ResourceLink
                >: Esto va directo al grano para que pueda crear y compartir
                moodboards sin complicaciones. También tiene opciones de
                sincronización con Dropbox, con impresión optimizada e
                importación de imágenes de Instagram y Pinterest.
            </p>
            <p>
                <ResourceLink type="tool">
                    Figma
                    <template v-slot:popup>
                        <ResourceCard
                            title="Figma"
                            description="Herramienta para prototipado"
                            type="tool"
                            :src="imageFigma"
                        />
                    </template> </ResourceLink
                >: Esta es una buena opción si necesita crear una experiencia
                personalizada sin plantillas predefinidas. Si desea ir un paso
                más allá, puede crear tableros interactivos y flujos
                personalizados.
            </p>
            <p>
                <ResourceLink type="tool">
                    Photoshop
                    <template v-slot:popup>
                        <ResourceCard
                            title="Photoshop"
                            description="Herramienta para fotografia"
                            type="tool"
                            :src="imagePs"
                        />
                    </template> </ResourceLink
                >: Si desea tener un control creativo total, esta es la
                herramienta más poderosa y versátil para crear un tablero.
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
