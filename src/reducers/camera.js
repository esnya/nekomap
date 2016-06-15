/* eslint no-param-reassign: 'off' */

import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import * as Actions from '../actions/camera';

export default handleActions({
    [Actions.ROTATE]:
        (state, { payload }) =>
            state.update('rotation', (v) => v.set('y', payload)),
    [Actions.TRANSLATE]:
        (state, { payload }) =>
            state.update(
                'position',
                (v) => v.set('x', payload.x).set('z', payload.z)
            ),
    [Actions.ZOOM]: (state, { payload }) => state.set('zoom', payload),
}, fromJS({
    rotation: { x: 0, y: 0, z: 0 },
    position: { x: 0, y: 0, z: 0 },
    zoom: 1,
}));
