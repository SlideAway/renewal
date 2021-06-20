import React from 'react';
import {Controller} from "react-hook-form";
import {Input} from "antd";

const HsInput = (props) => {
    return (
        <>
            <Controller
                {...props}
                defaultValue=''
                render={(innerProps) => (
                    <Input
                        {...props}
                        {...innerProps}
                    />
                )}
            />
        </>
    );
};

export default HsInput;
