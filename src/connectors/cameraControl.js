import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import THREE from 'three';
import * as Actions from '../actions/camera';

export default connect(
    ({ camera }) => ({ camera }),
    (dispatch) => bindActionCreators(Actions, dispatch),
    ({ camera }, { rotate, translate, zoom }, own) => ({
        ...own,
        onRotate: rotate,
        onZoom: (z) => zoom(camera.zoom * (1.0 + z * 0.1)),
        onTranslate: (v) => translate(camera.position.add(new THREE.Vector3(...v))),
    })
);
