import { combineReducers } from 'redux';
import camera from './camera';
import objects from './objects';

export default combineReducers({
    camera,
    objects,
});
