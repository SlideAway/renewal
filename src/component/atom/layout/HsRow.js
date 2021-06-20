import React from 'react';
import {Row} from "antd";

const HsRow = (props) => {
    return (
        <Row {...props}>
            {props.children}
        </Row>
    );
};

HsRow.propTypes = {

};

export default HsRow;
