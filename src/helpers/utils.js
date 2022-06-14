export const ID = () => '_' + Math.random().toString(36).substr(2, 9);
export const isBool = (value) => value === 'true' || value === 'false';
