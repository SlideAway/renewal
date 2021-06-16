import React from 'react';
import styled from 'styled-components'
import {Button} from "antd";

const StyledTButton = styled(Button) ({
    backgroundColor:'#261c86',
    color:'white'
})

const TButton = (props) => {

    return (
        <StyledTButton {...props}>
            {props.children}
        </StyledTButton>
    );
};

export default TButton;
