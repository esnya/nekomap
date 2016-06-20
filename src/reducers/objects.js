import { handleActions } from 'redux-actions';
import THREE from 'three';
import Obj from '../graphics/object';
import * as Actions from '../actions/object';

const byId = (handler) => (objects, { payload }) => {
    const object = objects.getObjectByName(payload.id);

    if (object) handler(objects, object, payload);

    return objects;
};

export default handleActions({
    [Actions.CREATE]: (objects, { payload }) => {
        objects.add(new Obj(payload));
        return objects;
    },
    [Actions.REMOVE]: byId((objects, object) => objects.remove(object)),
    [Actions.ROTATE]:
        byId((objects, object, { angle }) => object.rotateY(THREE.Math.degToRad(angle))),
    [Actions.TRANSLATE]:
        byId((objects, object, { position }) => object.position.fromArray(position)),
    [Actions.SCALE]: byId((objects, object, { scale }) => object.scale.fromArray(scale)),
}, new THREE.Object3D());
