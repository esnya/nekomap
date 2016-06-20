import React from 'react';
import pureRender from '../enhancers/pureRender';
import Canvas from './Canvas';
import CameraControl from './CameraControl';

const Style = {
    Container: {
        display: 'flex',
    },
    Fixed: {
        flex: '0 0 auto',
    },
    Fill: {
        flex: '1 1 0',
    },
};

const App = () => (
    <div style={Style.Container}>
        <div style={Style.Fixed}>
            <CameraControl />
        </div>
        <div style={Style.Fill}>
            <Canvas />
        </div>
    </div>
);
export default pureRender(App);
