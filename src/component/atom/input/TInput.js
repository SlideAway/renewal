import React from 'react';
import {CInput} from "@coreui/react";
import {Controller} from "react-hook-form";

const TInput = (props) => {
    return (
        <>
            <Controller
                {...props}
                as={<CInput/>}
            />
        </>
    );
};

export default TInput;
