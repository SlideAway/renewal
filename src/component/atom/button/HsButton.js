import React from 'react';
import {Button} from "antd";
import Icons from "../../../assets/icons/Icons";
import PropTypes from 'prop-types';

const HsButton = (props) => {
    const {icon, children, size, type, loading} = props

    return (
        <Button {...props} type={type} loading={loading} size={size} icon={<Icons name={icon}/>}>
            {children}
        </Button>
    );
};


HsButton.propTypes = {
    icon:PropTypes.string,
    size:PropTypes.oneOf(['large', 'default', 'small']),
    type:PropTypes.oneOf(['primary', 'default', 'danger', 'text']),
    loading:PropTypes.bool
};

HsButton.defaultProps = {
    icon:'',
    size:'default',
    type:'primary',
    loading:false
}

export default HsButton;
