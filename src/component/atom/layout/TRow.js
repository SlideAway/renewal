import React from 'react';
import {Row} from "antd";

const TRow = (props) => {
    return (
        <Row {...props}>
            {props.children}
        </Row>
    );
};

TRow.propTypes = {

};

export default TRow;
