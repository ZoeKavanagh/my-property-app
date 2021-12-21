import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PropertiesList, PropertyCreate } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/properties" exact component={PropertiesList} />
                <Route path="/property" exact component={PropertyCreate} />
            </Switch>
        </Router> 
    )
}

export default App
