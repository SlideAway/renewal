import React from 'react';
import PropTypes from 'prop-types';
import {Input} from "antd";
import {Controller} from "react-hook-form";

const TPassword = (props) => {
    return (
        <Controller
            {...props}
            defaultValue=''
            render={(innerProps) => (
                <Input.Password
                    {...props}
                    {...innerProps}
                />
            )}
        />
    );
};

TPassword.propTypes = {

};

export default TPassword;
