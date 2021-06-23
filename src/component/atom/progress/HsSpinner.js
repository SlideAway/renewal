import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from "antd";
import styled from "styled-components";

const CustomSpin = styled(Spin)`
    text-align: center;
`

const HsSpinner = (props) => {
    const {loading, children} = props;
    return (
        <CustomSpin {...props} spinning={loading} tip='loading...' size='large'>
            {children}
        </CustomSpin>
    );
};

HsSpinner.defaultProps = {
    loading:false
}

HsSpinner.propTypes = {
    loading:PropTypes.bool
};

export default HsSpinner;