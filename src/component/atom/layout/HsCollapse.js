import React from 'react';
import PropTypes from 'prop-types';
import {Collapse} from "@blueprintjs/core";
import styled from "styled-components";

const StyledCollapse = styled(Collapse)`
    width:100%;
`

const HsCollapse = props => {
    const {children, isOpen} = props;
    return (
        <StyledCollapse isOpen={isOpen}>
            {children}
        </StyledCollapse>
    );
};

HsCollapse.propTypes = {
    isOpen:PropTypes.bool.isRequired,

};

export default HsCollapse;