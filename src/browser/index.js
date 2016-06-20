import store from './store';
import * as Camera from '../actions/camera';
import * as Obj from '../actions/object';
import '../components';

console.log('stub start');

store.dispatch(Camera.zoom(2));
store.dispatch(Obj.create({ type: 'CUBE' }));

console.log('stub done');
