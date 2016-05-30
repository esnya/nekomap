import { createAction } from 'redux-actions';

export const SET_HEIGHT = 'TERRAIN_SET_HEIGHT';
export const setHeight = createAction(SET_HEIGHT, (x, z, height) => ({ x, z, height }));
