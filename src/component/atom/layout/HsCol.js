import React from 'react';
import {Col} from "antd";
import styled from "styled-components";

const CustomCol = styled(Col)`
  padding-right: 5px;
  padding-left: 5px;
`

const HsCol = (props) => {
    return (
        <CustomCol {...props}>
            {props.children}
        </CustomCol>
    );
};

export default HsCol;
