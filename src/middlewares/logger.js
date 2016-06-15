import { Iterable } from 'immutable';
import { mapValues } from 'lodash';
import createLogger from 'redux-logger';

export default createLogger({
    stateTransformer:
        (state) => mapValues(
            state,
            (value) => (Iterable.isIterable(value) ? value.toJS() : value)
        ),
});
