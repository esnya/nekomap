import React, { PropTypes } from 'react';
import connect from '../connectors/cameraControl';
import pureRender from '../enhancers/pureRender';

const Style = {
    textAlign: 'center',
};

const CameraControl = (props) => {
    const {
        onRotate,
        onTranslate,
        onZoom,
    } = props;

    return (
        <div style={Style}>
            <div>
                <button onClick={() => onTranslate([0, 0, -1])}>↑</button>
            </div>
            <div>
                <button onClick={() => onTranslate([-1, 0, 0])}>←</button>
                📹
                <button onClick={() => onTranslate([1, 0, 0])}>→</button>
            </div>
            <div>
                <button onClick={() => onTranslate([0, 0, 1])}>↓</button>
            </div>
            <div>
                <button disabled onClick={() => onRotate(-5)}>↻</button>
                <button disabled onClick={() => onRotate(5)}>↺</button>
                <button onClick={() => onZoom(1)}>🔍+</button>
                <button onClick={() => onZoom(-1)}>🔍-</button>
            </div>
        </div>
    );
};
CameraControl.propTypes = {
    onRotate: PropTypes.func.isRequired,
    onTranslate: PropTypes.func.isRequired,
    onZoom: PropTypes.func.isRequired,
};
export default connect(pureRender(CameraControl));
