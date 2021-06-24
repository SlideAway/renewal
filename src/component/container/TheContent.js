import React, {useContext} from 'react';
import {Route, Switch} from "react-router-dom";
import routes from "../../routes";
import {Layout} from "antd";
import styled from "styled-components";
import ContentContext, {ContentProvider} from "../../utils/contexts/ContentContext";

const {Content} = Layout

const CustomContent = styled(Content)`
  margin: 24px 16px 0;
  padding: 24px;
  height: 100%;
  color:#f0f2f5;
`

const TheContent = () => {
    return (
        <ContentProvider>
            <CustomContent>
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
        </ContentProvider>
    );
};


export default TheContent;
