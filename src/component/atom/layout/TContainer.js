import React from 'react';
import {Layout} from "antd";


const TContainer = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>

    );
};

export default TContainer;
