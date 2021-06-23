import React from 'react';
import {Row} from "antd";
import PropTypes from 'prop-types';

const HsRow = (props) => {
    return (
        <Row {...props}>
            {props.children}
        </Row>
    );
};

HsRow.propTypes = {
    align:PropTypes.oneOf(['top', 'middle', 'bottom']),
    gutter:PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    justify:PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
    wrap:PropTypes.bool
};

export default HsRow;
