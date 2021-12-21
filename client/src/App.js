import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PropertiesList } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/properties" exact component={PropertiesList} />
            </Switch>
        </Router> 
    )
}

export default App
