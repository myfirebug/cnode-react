/*
 * @Author: hejp
 * @Date:   11:49
 * @Last Modified by:   hejp
 * @Last Modified time: 11:49
 */
import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        flag: false
    }
    static getDerivedStateFromError(error) {
        return { flag: true }
    }

    render() {
        if (this.state.flag) {
            return <h1>Something went wrong.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
