export const LAST_GUIDE_ID = 20;
export const substages = {
    1: 'Empatizar',
    2: 'Definir',
    3: 'Idear',
    4: 'Prototipar I',
    5: 'Prototipar II',
    6: 'Probar'
};

export const guides = {
    '1,2,3,4': {
        start: 1,
        last: 4,
        substage: {
            id: 1,
            name: substages[1]
        },
        stage: 1,
        pages: 4
    },
    '5,6,7,8,9': {
        start: 5,
        last: 9,
        substage: {
            id: 2,
            name: substages[2]
        },
        stage: 1,
        pages: 5
    },
    '10,11,12,13': {
        start: 10,
        last: 13,
        substage: {
            id: 3,
            name: substages[3]
        },
        stage: 2,
        pages: 4
    },
    '14,15': {
        start: 14,
        last: 15,
        substage: {
            id: 4,
            name: substages[4]
        },
        stage: 2,
        pages: 2
    },
    '16,17,18': {
        start: 16,
        last: 18,
        substage: {
            id: 5,
            name: substages[5]
        },
        stage: 3,
        pages: 3
    },
    '19,20': {
        start: 19,
        last: 20,
        substage: {
            id: 6,
            name: substages[6]
        },
        stage: 4,
        pages: 2
    }
};

export const GUIDES = {
    1: 'Entrevistas a Usuarios',
    2: 'Análisis Heurístico',
    3: 'Mapa de Empatía',
    4: 'UX Benchmarking',
    5: 'User Journey Map',
    6: 'Card Sorting',
    7: 'Mapa del Sitio',
    8: 'UX Writing',
    9: 'Wireframe',
    10: 'Flujo de Usuario',
    11: 'Moodboards',
    12: 'Lluvia de Ideas',
    13: 'Mockup',
    14: 'Sistema de Diseño'
};

export const GUIDES_SPEECH = {
    1: 'Entrevistas a Usuarios',
    2: 'Análisis Heurístico',
    3: 'Mapa de Empatía',
    4: 'UX Benchmarking',
    5: 'User Journey Map',
    6: `Card Sorting. Definición. Parte de hacer que un sitio sea fácil de usar es organizar la información para que los visitantes del sitio puedan encontrar lo que buscan sin mucho esfuerzo. Con demasiada frecuencia, el contenido se estructura en función de lo que tiene sentido para la empresa, no para los visitantes. Card Sorting (clasificación de tarjetas) es una técnica de investigación de UX para descubrir cómo las personas entienden y clasifican la información. Esta técnica se usa cuando un equipo quiere agrupar y etiquetar la información del sitio web de una manera que tenga sentido para el público objetivo. La clasificación de tarjetas crea una base para una arquitectura de información (IA) robusta, y una IA sólida permite la creación de un sistema de navegación que coincida con las expectativas de los usuarios. ¿Cuándo usar el Card Sorting?# La clasificación de tarjetas es útil en dos casos: Cuando se quiere descubrir cómo las personas entienden y agrupan diferentes conceptos. Desea revelar el modelo mental del usuario, y esta comprensión lo ayudará a diseñar mejores productos para ellos. Cuando desea mejorar el diseño existente o crear un nuevo diseño, su objetivo es comprender cómo los usuarios categorizan la información y hacer que la interfaz de usuario sea predecible para ellos. Ventajas y Desventajas# Ventajas# Es simple y económico ejecutar sesiones de clasificación de tarjetas. Rápido para realizar investigaciones y obtener resultados de los usuarios, especialmente si las sesiones se realizan de forma remota. Proporciona una buena perspectiva sobre los usuarios y cómo esperarían que se organizara la información. Desventajas# Los resultados pueden variar y es posible que no haya un patrón real en los datos. El análisis de los resultados puede llevar mucho tiempo dependiendo de la complejidad de los datos. La clasificación de tarjetas no tiene en cuenta las tareas y los objetivos de los usuarios, por lo que si la investigación se utiliza sin tener esto en cuenta, podría terminar con una estructura que el usuario no pueda utilizar para completar sus tareas en el sitio. Tipos de Card Sorting# Hay tres técnicas de UX de Card Sorting entre las que puede elegir: abierta, cerrada e híbrida. Abierta# A cada participante se le entrega una pila de tarjetas que se completan previamente con temas y luego se les pide que agrupen esas tarjetas de la forma que deseen. Después de eso, el participante debe crear etiquetas para los grupos que eligió. Los participantes no tienen ninguna restricción para nombrar. Este tipo de clasificación es excelente cuando desea diseñar un nuevo sitio web o mejorar el existente. Al analizar los resultados de la clasificación de tarjetas, es fácil ver si la estructura del sitio web que tiene en este momento coincide con la forma en que las personas organizarían la misma información. image_reference Open Card Sort. Fuente: interaction-design.org Cerrada# Los investigadores crean etiquetas para categorías y les piden a los participantes que clasifiquen las tarjetas en categorías predefinidas. Todo lo que los participantes deben hacer es relacionar el contenido con las categorías existentes. Este tipo de clasificación de tarjetas no revela cómo los usuarios conceptualizan los temas, pero lo ayuda a comprender qué tan bien una estructura de categoría existente admite el contenido. La clasificación de tarjetas cerradas funciona mejor para priorizar y clasificar funciones. Por ejemplo, puede aplicarlo para filtros de búsqueda en la aplicación de comercio electrónico. Los usuarios pueden distribuir todos los filtros de búsqueda que tiene en los grupos 'Obligatorio', 'Opcional' o 'Uso frecuente' a 'Nunca lo uso'. image_reference Closed Card Sort. Fuente: interaction-design.org Híbrida# Como sugiere el nombre, este tipo de clasificación de tarjetas donde los participantes clasifican las tarjetas en categorías predefinidas pero también pueden crear sus propias categorías. La clasificación de tarjeta híbrida funciona mejor cuando los investigadores desean generar ideas para agrupar información y saben que les faltan algunas categorías en su estructura de categorías actual. Pueden obtener información sobre las categorías que faltan, y esta información puede informar las decisiones de diseño. ¿Que herramientas usar para hacer Card Sorting?# Para realizar una ordenación de tarjetas, necesita dos cosas: usuarios reales y tarjetas. Para las tarjetas, puede usar tarjetas físicas reales (pedazos de papel) o una de varias herramientas de software de clasificación de tarjetas en línea como Miro si va acompañarlo de una entrevista una guia presencial o también Optimal Workshop si desea una herramienta mas automatizada.`,
    7: 'Mapa del Sitio',
    8: 'UX Writing',
    9: 'Wireframe',
    10: 'Flujo de Usuario',
    11: 'Moodboards',
    12: 'Lluvia de Ideas',
    13: 'Mockup',
    14: 'Sistema de Diseño'
};

export default guides;
