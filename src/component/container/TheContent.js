import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from "react-router-dom";
import routes from "../../routes";
import {Layout} from "antd";
import styled from "styled-components";
const {Content} = Layout

const CustomContent = styled(Content)`
    margin:24px 16px 0;
    //padding:24px;
    min-height:360px;
`

const TheContent = () => {
    return (
        <CustomContent className='site-layout-background'>
                <Switch>
                    {routes && routes.map((route, idx) => (
                        route.component && (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props}/>
                                )}
                            />
                        )
                    ))}
                </Switch>
        </CustomContent>
    );
};

TheContent.propTypes = {

};

export default TheContent;
