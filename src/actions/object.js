import { createAction } from 'redux-actions';

export const CREATE = 'OBJECT_CREATE';
export const create = createAction(CREATE);

export const REMOVE = 'OBJECT_REMOVE';
export const remove = createAction();

export const TRANSLATE = 'OBJECT_TRANSLATE';
export const translate = createAction(TRANSLATE, (id, t) => ({ id, translate: t }));

export const ROTATE = 'OBJECT_ROTATE';
export const rotate = createAction(ROTATE, (id, angle) => ({ id, angle }));

export const SCALE = 'OBJECT_SCALE';
export const scale = createAction(SCALE, (id, s) => ({ id, scale: s }));
