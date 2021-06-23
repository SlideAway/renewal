import React from 'react';
import {Col} from "antd";


const HsCol = (props) => {
    return (
        <Col {...props}>
            {props.children}
        </Col>
    );
};

export default HsCol;
