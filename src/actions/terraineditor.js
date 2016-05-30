import { createAction } from 'redux-actions';

export const SELECT = 'TERRAIN_EDITOR_SELECT';
export const select = createAction(SELECT, (x, z) => ({ x, z }));
