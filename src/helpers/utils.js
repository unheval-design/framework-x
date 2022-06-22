import { guides } from '@/helpers/stagesData.js';

export const ID = () => '_' + Math.random().toString(36).substr(2, 9);
export const isBool = (value) => value === 'true' || value === 'false';
export const getGuide = (guideId = 0) => {
    let guide = {};
    Object.keys(guides).forEach((key) => {
        const ids = key.split(',');
        if (ids.includes(guideId.toString())) {
            guide = guides[key];
        }
    });

    return guide;
};

export const isCheckpoint = (guideId) => {
    return Object.values(guides)
        .map((n) => n.last)
        .includes(guideId);
};

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
