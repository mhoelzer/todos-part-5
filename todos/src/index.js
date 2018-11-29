import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './Components/App';
import todosReducer from "./Reducers/reducer.js";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as registerServiceWorker from './serviceWorker';
import "todomvc-app-css/index.css";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { ConnectedRouter } from "connected-react-router";

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(connectRouter(history)(todosReducer),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history) // for dispatching history actions
        )
    )
);

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* comp that procides access to connect for any subcomp to be able to access redux store */}
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route render={(props) =>
                    <App pathname={props.location.pathname} />
                }>
                </Route>
            </ConnectedRouter>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
// first param has to be component