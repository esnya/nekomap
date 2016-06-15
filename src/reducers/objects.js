import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions';
import * as Actions from '../actions/object';

const update =
    (state, { payload }) =>
        state.map((item) => (item.get('id') === payload.id ? item.merge(fromJS(payload)) : item));

export default handleActions({
    [Actions.CREATE]: (state, { payload }) => state.push(fromJS(payload)),
    [Actions.REMOVE]: (state, { payload }) => state.filter((item) => item.get('id') !== payload),
    [Actions.ROTATE]: update,
    [Actions.TRANSLATE]: update,
    [Actions.SCALE]: update,
}, new List());
