import { handleActions } from 'redux-actions';
import THREE from 'three';
import * as Actions from '../actions/camera';
import Camera from '../graphics/Camera';

const chandler = (handler) => (camera, { payload }) => {
    handler(camera, payload);

    camera.updateProjectionMatrix();

    return camera;
};

export default handleActions({
    [Actions.ROTATE]: chandler((camera, angle) => camera.rotateY(THREE.Math.degToRad(angle))),

    // eslint-disable-next-line no-param-reassign
    [Actions.TRANSLATE]: chandler((camera, position) => (camera.position.copy(position))),

    // eslint-disable-next-line no-param-reassign
    [Actions.ZOOM]: chandler((camera, zoom) => (camera.zoom = zoom)),
}, new Camera());
