import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input, Tooltip} from "antd";
import {Controller} from "react-hook-form";

const HsPassword = (props) => {
    const [capslock, setCapslock] = useState(false);
    const [focus, setFocus] = useState(false);

    window.addEventListener('keydown', (e) => setCapslock(e.getModifierState("CapsLock")))

    return (
        <Controller
            {...props}

            defaultValue=''
            render={(innerProps) => (
                <Tooltip  placement="top" visible={focus && capslock} trigger='focus' title={capslock ?  'CapsLock이 켜져있습니다. ':'' }>
                <Input.Password
                    {...props}
                    {...innerProps}
                    onFocus={() => setFocus(true)}
                    onBlur={(e) => {
                        setFocus(false);
                        innerProps.onBlur(e);
                    }}
                />
                </Tooltip>
            )}
        />
    );
};

HsPassword.propTypes = {

};

export default HsPassword;
