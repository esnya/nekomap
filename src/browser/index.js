import store from './store';
import * as Camera from '../actions/camera';

console.log('stub start');

store.dispatch(Camera.zoom(2));

console.log('stub done');
