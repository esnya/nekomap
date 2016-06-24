import React, { Component, PropTypes } from 'react';
import connect from '../connectors/canvas';
import pureRender from '../enhancers/pureRender';
import Renderer from '../graphics/Renderer';
import Scene from '../graphics/Scene';
import Terrain from '../graphics/Terrain';

const Style = {
    width: '100%',
    height: '100%',
};

class Canvas extends Component {
    static get propTypes() {
        return {
            camera: PropTypes.object.isRequired,
            objects: PropTypes.object.isRequired,
        };
    }

    componentDidMount() {
        const { camera, objects } = this.props;

        const renderer = new Renderer(this.container);

        const adjustSize = () => {
            camera.aspect = renderer.adjustSize(this.container);
            camera.updateProjectionMatrix();
        };
        this.container.addEventListener('resize', adjustSize);
        adjustSize();

        const scene = new Scene();

        const terrain = new Terrain();
        scene.add(terrain);

        scene.add(objects);

        this.isAlive = true;
        const render = () => {
            if (!this.isAlive) return;

            scene.add(objects);

            requestAnimationFrame(render);
            renderer.render(scene, camera);
        };
        render();
    }

    componentWillUnmount() {
        this.isAlive = false;
    }

    render() {
        return <div ref={(c) => (this.container = c)} style={Style} />;
    }
}
export default connect(pureRender(Canvas));
