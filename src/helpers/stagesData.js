export const LAST_GUIDE_ID = 9;
export const substages = {
    1: 'Empatizar',
    2: 'Definir',
    3: 'Idear',
    4: 'Prototipar',
    5: 'Probar'
};
export const guides = {
    '1,2,3,4,5': {
        start: 1,
        last: 5,
        substage: {
            id: 1,
            name: substages[1]
        },
        stage: 1,
        pages: 5
    },
    '6,7,8,9': {
        start: 6,
        last: 10,
        pages: 4,
        substage: {
            id: 2,
            name: substages[2]
        },
        stage: 1
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
        ['Definición'],
        ['¿Cuándo hacer el análisis herístico?'],
        ['Selección de expertos', 'Perfil del experto', 'Tamaño de muestra '],
        ['Ventajas y Desventajas', 'Ventajas', 'Desventajas'],
        ['Evaluación']
    ]
};

export default guides;
