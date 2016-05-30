import { createAction } from 'redux-actions';

export const SELECT = 'OBLECT_EDITOR_SELECT';
export const select = createAction(SELECT);

export const MODE = 'OBJECT_EDITOR_MODE';
export const mode = createAction(MODE);
