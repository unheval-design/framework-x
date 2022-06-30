<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import imageOne from '@/assets/images/guide-16/image_1.gif';
import imageFigma from '@/assets/images/brands/figma.png';
import imageXd from '@/assets/images/brands/xd.png';

const question1 = {
    question:
        '¿Para qué hacemos el prototipado?',
    answer: 1,
    alternatives: [
        'Para saber la estructura y posición de los elementos en la vista.',
        'Para ver como interactuan las diferentes vistas y elementos en conjunto.',
        'Para mostrar el diseño con contenido real sobre el producto.'
    ]
};

const question2 = {
    question: '¿En qué se diferencia el prototipo del mockup?',
    answer: 3,
    alternatives: [
        'El prototipo tiene interacciones y animaciones mientras que el mockup no.',
        'El prototipo representa visualmente al producto, mientas que el mockup solo muestra como es la estructura de dicho producto.',
        'El prototipo es la implementación inicial de un producto mientras que el mockup es el diseño mas fiel del producto.'
    ]
};
</script>

<template>
    <GuideTitle>
        Prototipo
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                Un prototipo suele ser una representación de alta fidelidad del producto final que pretende simular la interacción del usuario. A diferencia de diseños anteriores (wireframes y mockups), se puede hacer clic en un prototipo y, por lo tanto, permite que el usuario experimente el contenido y las interacciones en la interfaz. De hecho, un prototipo es muy parecido al producto final en sí.
            </p>
            <Reference
                :image="imageOne"
                description="Prototipo para Core Dashboard. Author: Anton Tkachev."
            />
        </section>
        <Heading type="h1">Ventajas del prototipado</Heading>
        <section>
            <p>
                Uno de los mayores beneficios de los prototipos es, sin duda, la posibilidad de detectar de forma temprana los posibles problemas de diseño y fabricación. Además, prototipar también nos puede ayudar a estimar las necesidades y los materiales que necesitaremos en un futuro, así como el tiempo de fabricación y el personal. 
            </p>
            <p>
                Prototipar es perfecto si lo que quieres es:
            </p>
            <p>
                <ul>
                    <li>El descubrimiento temprano de los problemas de diseño.</li>
                    <li>Estimación de los costes de producción, el tiempo de fabricación y los requisitos de los materiales.</li>
                    <li>Seleccionar la maquinaria necesaria para la producción.</li>
                    <li>Pruebas para determinar el ajuste y la durabilidad.</li>
                    <li>Recibir un feedback de los clientes y usuarios finales.</li>
                    <li>Identificar las mejoras.</li>
                    <li>Establecer la función y el diseño final.</li>
                    <li>Captación de fondos e inversores.</li>
                </ul>
            </p>
        </section>
        <Heading type="h1">Herramientas para hacer prototipado</Heading>
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
                permite diseñar y crear prototipos, así como, recopilar comentarios o notas sobre los proyectos. Esta es la primera herramienta de diseño de interfaz basada en el navegador, lo que facilita a los equipos la creación de software.
            </p>
            <p>
                <ResourceLink type="tool">
                    Adobe XD
                    <template v-slot:popup>
                        <ResourceCard
                            title="Adobe XD"
                            description="Plataforma para prototipar"
                            type="tool"
                            :src="imageXd"
                            />
                    </template>
                </ResourceLink>
                Entre las últimas incorporaciones de Creative Cloud de Adobe encontramos Adobe XD, una herramienta destinada a la creación de prototipos para hacerse con el mercado Sketch.
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
