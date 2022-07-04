<script setup>
import GuideTitle from '@/components/GuideTitle.vue';
import GuideBody from '@/components/GuideBody.vue';
import TestCard from '@/components/TestCard.vue';
import Reference from '@/components/Reference.vue';
import Heading from '@/components/Heading.vue';
import ResourceLink from '@/components/ResourceLink.vue';
import ResourceCard from '@/components/ResourceCard.vue';

const question1 = {
    question: '¿Por que hacemos pruebas UI?',
    answer: 1,
    alternatives: [
        'Para detectar problemas de usabilidad de las interfaces.',
        'Comprobar el funcionamiento correcto de los elementos de la interfaz y dispositivos fisicos que se requieren.',
        'Para comprobar si los flujos de usuario importantes de mi aplicación funcionan de manera correcta.'
    ]
};

const question2 = {
    question:
        '¿Qué enfoque de pruebas UI seria el mas apropiado cuando mi objetivo es automatizar pruebas?',
    answer: 3,
    alternatives: [
        'Prueba manual.',
        'Pruebas de grabación y reproducción.',
        'Pruebas basadas en modelos.'
    ]
};
</script>

<template>
    <GuideTitle>
        Pruebas UI
        <template v-slot:timeRead>6</template>
    </GuideTitle>
    <GuideBody>
        <Heading type="h1">Definición</Heading>
        <section>
            <p>
                La prueba de interfaz de usuario(UI) es una técnica para probar
                las características de cualquier software con el que un usuario
                interactuará. Por lo general, esto implica probar los
                componentes visuales para asegurarse de que cumplan con los
                requisitos descritos, tanto en términos de funcionalidad como de
                rendimiento.
            </p>
        </section>
        <Heading type="h1">¿Por qué necesito hacer puedas UI?</Heading>
        <section>
            <p>
                Las pruebas de IU se centran en dos cosas principales. Primero,
                verificar cómo la aplicación maneja las acciones del usuario
                realizadas con el teclado, el mouse y otros dispositivos de
                entrada. En segundo lugar, comprobar si los elementos visuales
                se muestran y funcionan correctamente.
            </p>
            <p>
                Solo haciendo esto, las organizaciones pueden garantizar que las
                aplicaciones cumplan con sus requisitos funcionales y que los
                usuarios finales las adopten con éxito. Por esta razón, las
                pruebas de IU juegan un papel importante antes de que una
                aplicación se lance a producción.
            </p>
        </section>
        <Heading type="h1"
            >Lista de verificación de pruebas de interfaz de usuario: casos de
            prueba esenciales</Heading
        >
        <section>
            <p>
                Los casos de prueba cubren diferentes aspectos de la interfaz de
                usuario, incluidas imágenes, estándares de color, contenido de
                la página, navegación, usabilidad y más. Use esta lista de
                verificación para asegurarse de que sus pruebas de interfaz de
                usuario sean más exhaustivas.
            </p>
            <p>
                <ul>
                    <li>
                        <strong>Errores de tipo de datos:</strong>
                        <br>
                         asegúrese de que solo se puedan ingresar datos válidos para tipos de datos específicos, como moneda y fechas.
                    </li>
                    <li>
                        <strong>Anchos de campo:</strong>
                        <br>
                        si un cuadro de texto determinado permite una cantidad específica de caracteres, aclare en la interfaz de usuario que los datos ingresados no deben exceder el límite de caracteres. Por ejemplo, un campo que permite 50 caracteres en la base de datos de la aplicación no debe permitir que los usuarios ingresen más de 50 caracteres en la interfaz.
                    </li>
                    <li>
                        <strong>Elementos de navegación:</strong>
                        <br>
                        verifique que todos los botones de navegación en la página funcionen correctamente y que redirijan a los usuarios a la página o pantalla correcta.
                    </li>
                    <li>
                        <strong>Barras de progreso:</strong>
                        <br>
                        cuando se muestran pantallas que tardan en generar resultados, se debe usar una barra de progreso para mostrar al usuario que un proceso aún se está ejecutando.
                    </li>
                    <li>
                        <strong>Escritura anticipada:</strong>
                        <br>
                        si su interfaz de usuario utiliza listas desplegables, asegúrese de incluir la escritura anticipada. En un menú desplegable con cientos de elementos, escribir la primera letra debe saltar la lista a los elementos que comienzan con esa letra para que los usuarios no tengan que revisar una lista larga.
                    </li>
                    <li>
                        <strong>Desplazamiento de tablas:</strong>
                        <br>
                        si los datos de sus tablas se extienden a otra página, la función de desplazamiento debería permitir a los usuarios desplazarse por los datos pero mantener todos los encabezados intactos.
                    </li>
                    <li>
                        <strong>Registro de errores:</strong>
                        <br>
                        cuando el sistema experimenta un error fatal, asegúrese de que la aplicación escriba los detalles del error en un visor de eventos o en un archivo de registro para su posterior revisión.
                    </li>
                    <li>
                        <strong>Elementos de menú:</strong>
                        <br>
                        asegúrese de que la aplicación solo muestre elementos de menú válidos que estén disponibles en un estado en particular.
                    </li>
                    <li>
                        <strong>Accesos directos que funcionan:</strong>
                        <br>
                        para las aplicaciones que admiten accesos directos, verifique si funcionan correctamente, sin importar el navegador, la plataforma o el dispositivo que se utilice.
                    </li>
                    <li>
                        <strong>Confirmar botones de acción:</strong>
                        <br>
                        asegúrese de que la interfaz de usuario tenga un botón de confirmación que funcione cada vez que el usuario desee guardar o eliminar un elemento.
                    </li>
                </ul>
            </p>
        </section>
        <Heading type="h1">Enfoques para las pruebas de interfaz de usuario</Heading>
        <section>
            <p>
                Hay tres enfoques principales de prueba de UI, a saber:
            </p>
            <Heading type="h2">Prueba manual</Heading>
            <p>
                En las pruebas manuales, un evaluador humano realiza un conjunto de operaciones para verificar si la aplicación funciona correctamente y si los elementos gráficos se ajustan a los requisitos documentados. Las pruebas manuales tienen desventajas notables, ya que pueden llevar mucho tiempo y la cobertura de la prueba es extremadamente baja. Además, la calidad de las pruebas en este enfoque depende del conocimiento y las capacidades del equipo de pruebas.
            </p>
            <Heading type="h2">Pruebas de grabación y reproducción</Heading>
            <p>
                También conocida como prueba de grabación y reproducción, se ejecuta utilizando herramientas de automatización. La herramienta de prueba de IU automatizada registra todas las tareas, acciones e interacciones con la aplicación. Los pasos registrados luego se reproducen, ejecutan y comparan con el comportamiento esperado. Para realizar más pruebas, la fase de reproducción se puede repetir con varios conjuntos de datos.
            </p>
            <Heading type="h2">Pruebas basadas en modelos</Heading>
            <p>
                En este enfoque de prueba, nos enfocamos en construir modelos gráficos que describen el comportamiento de un sistema. Esto proporciona una comprensión más profunda del sistema, lo que permite al evaluador generar casos de prueba altamente eficientes. En los modelos, determinamos las entradas y salidas del sistema, que a su vez se utilizan para ejecutar las pruebas. Las pruebas basadas en modelos funcionan de la siguiente manera:
            </p>
            <p>
                <ul>
                    <li>Crear un modelo para el sistema</li>
                    <li>Determinar las entradas del sistema</li>
                    <li>Verifique la salida esperada</li>
                    <li>Ejecutar pruebas</li>
                    <li>Verifique y valide la salida del sistema frente a la salida esperada</li>
                </ul>
            </p>
            <p>
                El enfoque basado en modelos es excelente porque permite un mayor nivel de automatización. También cubre un mayor número de estados en el sistema, mejorando así la cobertura de la prueba.
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
