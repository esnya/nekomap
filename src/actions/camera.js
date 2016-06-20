import { createAction } from 'redux-actions';

export const ROTATE = 'CAMERA_ROTATE';
export const rotate = createAction(ROTATE, 'angle');

export const TRANSLATE = 'CAMERA_TRANSLATE';
export const translate = createAction(TRANSLATE, 'position');

export const ZOOM = 'CAMERA_ZOOM';
export const zoom = createAction(ZOOM, 'zoom');
