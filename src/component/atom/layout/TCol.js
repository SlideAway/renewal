import React from 'react';
import {CCol} from "@coreui/react";

const TCol = (props) => {
    return (
        <CCol>
            {props.children}
        </CCol>
    );
};

export default TCol;
