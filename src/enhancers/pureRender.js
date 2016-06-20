import React, { Component } from 'react';

export default function pureRender(WrappedComponent) {
    const propTypes = WrappedComponent.propTypes || {};
    const propKeys = propTypes && Object.keys(propTypes);

    return class PureRenderWrapper extends Component {
        static get propTypes() {
            return propTypes;
        }

        souldComponentUpdate(nextProps) {
            return propKeys && propKeys.some((key) => this.props[key] !== nextProps[key]);
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
