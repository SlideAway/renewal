import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from "antd";
import styled from "styled-components";

const CustomSpin = styled(Spin)`
    text-align: center;
`

const HsSpinner = ({loading, children}) => {
    return (
        <CustomSpin spinning={loading} tip='loading...' size='large'>
            {children}
        </CustomSpin>
    );
};

HsSpinner.propTypes = {
    
};

export default HsSpinner;