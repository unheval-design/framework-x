export const LAST_GUIDE_ID = 9;
export const substages = {
    1: 'Empatizar',
    2: 'Definir',
    3: 'Idear',
    4: 'Prototipar',
    5: 'Probar'
};
export const guides = {
    '1,2,3,4,5,6': {
        start: 1,
        last: 6,
        substage: {
            id: 1,
            name: substages[1]
        },
        stage: 1,
        pages: 6
    },
    '7,8,9,10': {
        start: 7,
        last: 10,
        substage: {
            id: 2,
            name: substages[2]
        },
        stage: 1,
        pages: 4
    }
};

export const guideTableContent = {
    1: [
        [{ name: 'Definición', href: 'guide_1_title_1' }],
        [
            {
                name: '¿Cuándo usar la entrevista a usuario?',
                href: 'guide_1_title_2'
            }
        ],
        [
            { name: 'Métodos de Entrevista', href: 'guide_1_title_3' },
            { name: 'Abiertas', href: 'guide_1_title_4' },
            { name: 'Estructuradas', href: 'guide_1_title_5' },
            { name: 'Semi-estructuradas', href: 'guide_1_title_6' }
        ],
        [
            { name: 'Preparación de la entrevista', href: 'guide_1_title_7' },
            { name: 'Estableciendo tus objetivos', href: 'guide_1_title_8' },
            { name: 'Encontrar Participantes', href: 'guide_1_title_9' },
            { name: 'Estructura de la entrevista', href: 'guide_1_title_10' }
        ],
        [{ name: 'Evaluación', href: 'guide_1_title_11' }]
    ],
    2: [
        [{ name: 'Definición', href: 'guide_2_title_1' }],
        [
            {
                name: '¿Cuándo hacer el análisis herístico?',
                href: 'guide_2_title_2'
            }
        ],
        [
            { name: 'Selección de expertos', href: 'guide_2_title_3' },
            { name: 'Perfil del experto', href: 'guide_2_title_4' },
            { name: 'Tamaño de muestra', href: 'guide_2_title_5' }
        ],
        [
            { name: 'Ventajas y Desventajas', href: 'guide_2_title_6' },
            { name: 'Ventajas', href: 'guide_2_title_7' },
            { name: 'Desventajas', href: 'guide_2_title_8' }
        ],
        [{ name: 'Evaluación', href: 'guide_2_title_9' }]
    ],
    3: [
        [{ name: 'Definición', href: 'guide_3_title_1' }],
        [
            {
                name: '¿Cuándo usar el mapa de empatía?',
                href: 'guide_3_title_2'
            }
        ],
        [
            {
                name: 'Elementos de una mapa de empatía',
                href: 'guide_3_title_3'
            },
            { name: '¿Qué ve?', href: 'guide_3_title_4' },
            { name: '¿Qué dice y qué hace?', href: 'guide_3_title_5' },
            { name: '¿Qué oye?', href: 'guide_3_title_6' },
            { name: '¿Qué piensa y qué siente?', href: 'guide_3_title_7' },
            {
                name: '¿Cuáles son los esfuerzos que realiza?',
                href: 'guide_3_title_8'
            },
            {
                name: '¿Cuáles son los resultados/beneficios que espera obtener?',
                href: 'guide_3_title_9'
            }
        ],
        [
            {
                name: '¿Cómo aplicar el mapa de empatía',
                href: 'guide_3_title_10'
            }
        ],
        [{ name: 'Evaluación', href: 'guide_3_title_11' }]
    ],
    4: [
        [{ name: 'Definición', href: 'guide_4_title_1' }],
        [
            {
                name: '¿Por qué usar User Journey Map?',
                href: 'guide_4_title_2'
            }
        ],
        [
            {
                name: 'Elemento del User Journey Map',
                href: 'guide_4_title_3'
            },
            { name: 'Actor', href: 'guide_4_title_4' },
            { name: 'Escenario + Expectativas', href: 'guide_4_title_5' },
            { name: 'Fases del viaje?', href: 'guide_4_title_6' },
            {
                name: 'Acciones, pensamientos y emociones',
                href: 'guide_4_title_7'
            },
            {
                name: 'Oportunidades',
                href: 'guide_4_title_8'
            }
        ],
        [{ name: 'Evaluación', href: 'guide_4_title_9' }]
    ],
    5: [
        [{ name: 'Definición', href: 'guide_5_title_1' }],
        [
            {
                name: '¿Cuándo usar el Card Sorting?',
                href: 'guide_5_title_2'
            }
        ],
        [
            {
                name: 'Ventajas y Desventajas',
                href: 'guide_5_title_3'
            },
            { name: 'Ventajas', href: 'guide_5_title_4' },
            { name: 'Desventajas', href: 'guide_5_title_5' }
        ],
        [
            {
                name: 'Tipos de Card Sorting',
                href: 'guide_5_title_6'
            },
            { name: 'Abierta', href: 'guide_5_title_7' },
            { name: 'Cerrada', href: 'guide_5_title_8' },
            { name: 'Híbrida', href: 'guide_5_title_9' }
        ],
        [
            {
                name: '¿Que herramientas usar para hacer Card Sorting?',
                href: 'guide_5_title_10'
            }
        ],
        [{ name: 'Evaluación', href: 'guide_5_title_11' }]
    ],
    6: [
        [{ name: 'Definición', href: 'guide_6_title_1' }],
        [
            {
                name: '¿Cuándo hacer el mapa del sitio?',
                href: 'guide_6_title_2'
            }
        ],
        [
            {
                name: 'Tipos de mapas de sitio',
                href: 'guide_6_title_3'
            },
            { name: 'Mapa del sitio plano', href: 'guide_6_title_4' },
            { name: 'Mapa del sitio profundo', href: 'guide_6_title_5' }
        ],
        [
            {
                name: '¿Cómo crear el mapa del sitio?',
                href: 'guide_6_title_6'
            },
            { name: 'Reuniendo el contenido', href: 'guide_6_title_7' },
            { name: 'Creación del mapa del sitio', href: 'guide_6_title_8' }
        ],
        [{ name: 'Evaluación', href: 'guide_6_title_9' }]
    ],
    7: [
        [{ name: 'Definición', href: 'guide_7_title_1' }],
        [
            {
                name: '¿Por qué usamos flujos de usuario?',
                href: 'guide_7_title_2'
            },
            { name: 'Crear una interfaz intuitiva', href: 'guide_7_title_3' },
            {
                name: 'Evaluar las interfaces existentes',
                href: 'guide_7_title_4'
            },
            {
                name: 'Presentar su producto a clientes o colegas',
                href: 'guide_7_title_5'
            }
        ],
        [
            {
                name: '¿Cuándo hacer los flujos de usuario?',
                href: 'guide_7_title_6'
            }
        ],
        [
            {
                name: 'Tipos de diagramas de Flujo de Usuario',
                href: 'guide_7_title_7'
            },
            { name: 'Flujos de Tareas', href: 'guide_7_title_8' },
            { name: 'Wireflows', href: 'guide_7_title_9' },
            { name: 'Flujos de Usuario', href: 'guide_7_title_10' }
        ],
        [{ name: 'Evaluación', href: 'guide_7_title_11' }]
    ]
};

export default guides;
