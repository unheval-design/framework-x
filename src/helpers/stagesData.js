export const LAST_GUIDE_ID = 10;
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
    }
};

export default guides;
