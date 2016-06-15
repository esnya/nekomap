import { createAction } from 'redux-actions';

export const CREATE = 'OBJECT_CREATE';
export const create = createAction(CREATE, 'object');

export const REMOVE = 'OBJECT_REMOVE';
export const remove = createAction(REMOVE, 'id');

export const TRANSLATE = 'OBJECT_TRANSLATE';
export const translate = createAction(TRANSLATE, (id, position) => ({ id, position }));

export const ROTATE = 'OBJECT_ROTATE';
export const rotate = createAction(ROTATE, (id, angle) => ({ id, angle }));

export const SCALE = 'OBJECT_SCALE';
// eslint-disable-next-line no-shadow
export const scale = createAction(SCALE, (id, scale) => ({ id, scale }));
