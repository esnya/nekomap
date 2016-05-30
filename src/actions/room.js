import { createAction } from 'redux-actions';

export const UPDATE = 'ROOM_UPDATE';
export const update = createAction(UPDATE, (title, size) => ({ title, size }));
