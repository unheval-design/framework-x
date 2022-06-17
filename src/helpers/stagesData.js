export const LAST_GUIDE_ID = 11;
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
    '6,7,8,9,10': {
        start: 6,
        last: 10,
        substage: {
            id: 2,
            name: substages[2]
        },
        stage: 1,
        pages: 5
    },
    '11,12,13,14,15': {
        start: 11,
        last: 15,
        substage: {
            id: 3,
            name: substages[3]
        },
        stage: 2,
        pages: 5
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
    10: 'Flujo de Usuario'
};

export default guides;
