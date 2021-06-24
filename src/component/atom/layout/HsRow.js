import React from 'react';
import {Row} from "antd";
import PropTypes from 'prop-types';
import styled from "styled-components";

const CustomRow = styled(Row)`
    margin-bottom:10px;
`

const HsRow = (props) => {
    return (
        <CustomRow {...props}>
            {props.children}
        </CustomRow>
    );
};

HsRow.propTypes = {
    align:PropTypes.oneOf(['top', 'middle', 'bottom']),
    gutter:PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    justify:PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between']),
    wrap:PropTypes.bool
};

export default HsRow;
