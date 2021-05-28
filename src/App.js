import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Containers
const TheLayout = React.lazy(() => import('./component/layout/TheLayout'));

// Pages
const Login = React.lazy(() => import('./pages/common/Login'));

function App() {


    return (
        <>
            <BrowserRouter>
                <React.Suspense  fallback={}>
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
