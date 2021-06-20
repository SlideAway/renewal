import React from 'react';
import {CCol} from "@coreui/react";

const HsCol = (props) => {
    return (
        <CCol>
            {props.children}
        </CCol>
    );
};

export default HsCol;
