import React from 'react';
import {Card} from "antd";

const TCard = (props) => {
    return (
        <Card {...props}>
            {props.children}
        </Card>
    );
};

export default TCard;
