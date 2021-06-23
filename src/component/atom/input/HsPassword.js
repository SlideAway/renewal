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
            rules={{
                ...props.rules,
                pattern:{
                    value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                    message:'비밀번호는 대, 소문자, 숫자, 특수문자를 포함하여 최소 8글자이어야 합니다. '
                }}}
            defaultValue=''
            render={(innerProps) => (
                <Tooltip  placement="top" visible={focus && capslock} trigger='focus' title={capslock ?  'CapsLock이 켜져있습니다. ':'' }>
                <Input.Password
                    {...props}
                    {...innerProps}
                    placeholder='대, 소문자, 숫자, 특수문자를 포함 8글자 이상. '
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
