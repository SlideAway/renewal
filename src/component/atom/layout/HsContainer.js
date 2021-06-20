import React from 'react';
import {Layout} from "antd";


const HsContainer = (props) => {
    return (
        <Layout>
            {props.children}
        </Layout>

    );
};

export default HsContainer;
