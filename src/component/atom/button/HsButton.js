import React from 'react';
import {Button} from "antd";
import Icons from "../../../assets/icons/Icons";
import PropTypes from 'prop-types';

const HsButton = (props) => {
    const {icon, children, size, type} = props

    return (
        <Button {...props} type={type} size={size} icon={<></>}>
            <Icons name={icon}/>
            {children}
        </Button>
    );
};


HsButton.propTypes = {
    icon:PropTypes.string,
    size:PropTypes.oneOf(['large', 'default', 'small']),
    type:PropTypes.oneOf(['primary', 'default', 'danger', 'text'])
};

HsButton.defaultProps = {
    icon:'',
    size:'default',
    type:'primary'
}

export default HsButton;
