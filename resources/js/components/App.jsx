import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'

class App extends Component {
    render () {
        return (
            <Home />
        )
    }
}


if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
