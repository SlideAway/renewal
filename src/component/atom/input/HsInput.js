import React from 'react';
import {Controller} from "react-hook-form";
import {Input} from "antd";
import PropTypes from 'prop-types';
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

HsInput.defaultProps = {
    disabled:false,
    rules:{}
}

HsInput.propTypes = {
    id:PropTypes.string.isRequired,
    control:PropTypes.object.isRequired,
    disabled:PropTypes.bool,
    rules:PropTypes.object
};

export default HsInput;