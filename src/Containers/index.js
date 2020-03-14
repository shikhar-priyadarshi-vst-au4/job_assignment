import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configStore }   from '../Store/index'

import App from './App';

export default class Root extends Component {
    render ( ){
        return (
            < Provider store={ configStore() } >
               < App />
            </ Provider >
        )
    }
}