import React from 'react';
import {Card} from "antd";

const HsCard = (props) => {
    return (
        <Card {...props}>
            {props.children}
        </Card>
    );
};

export default HsCard;
