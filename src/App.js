import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './assets/scss/index.css';
import 'antd/dist/antd.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/core/lib/css/blueprint.css';
// Containers
const TheLayout = React.lazy(() => import('./component/container/TheLayout'));

// Pages
const Login = React.lazy(() => import('./pages/common/Login'));

function App() {
    const loading = (<div></div>)


    return (
        <>
            <BrowserRouter>
                <React.Suspense  fallback={loading}>
                    <Switch>
                        <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
                        <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        </>
    )
}

export default App;
