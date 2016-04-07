/* REACT AND NODE LIBRARIES */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/* APPS AND MODULES */
import App from './modules/App.jsx';

/* STANDALONE COMPONENTS */
import MainContent from './components/Products.jsx';
import { Error404 } from './components/Errors.jsx';
import Login from './modules/Login.jsx';
import SignUp from './modules/SignUp.jsx';

/* UTILITIES */
import requireAuth from './utils/requireAuth.jsx';

/* Turn on the API's. Keep them out of the namespace */
(function() {
    require('./webApi/WebApi.jsx');
    require('./_development/AddVariablesToWindow.jsx');
})();

/* DEVELOPMENT TOOLS */
import {Home, Users, Charts, Gallery } from './_development/PlaceHolders.jsx';

var router = (
    <Router history={ browserHistory } >
        <Route path="/" component={ App } onEnter={ requireAuth }>
            <IndexRoute component={Home} />
            <Route path="/products" component={ MainContent } />
            <Route path="/users" component={Users} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/sign_up" component={SignUp} />
        <Route path="*" component={ Error404 } status="404" />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(router, document.getElementById('main'))
});
