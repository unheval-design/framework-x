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

export const guidesTableContent = {
    1: [
        ['Definición'],
        ['¿Cuándo usar la entrevista a usuario?'],
        [
            'Métodos de Entrevista',
            'Abiertas',
            'Estructuradas',
            'Semi-estructuradas'
        ],
        [
            'Preparación de la entrevista',
            'Estableciendo tus objetivos',
            'Encontrar Participantes',
            'Estructura de la entrevista'
        ],
        ['Evaluación']
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
