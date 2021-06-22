import React from 'react';
import {Button} from "antd";
import Icons from "../../../assets/icons/Icons";
import PropTypes from 'prop-types';

const HsButton = (props) => {
    const {icon, children, size, type, loading, title, shape} = props

    return (
        <Button {...props} type={type} shape={shape} title={title} loading={loading} size={size} icon={<Icons name={icon}/>}>
            {children}
        </Button>
    );
};


HsButton.propTypes = {
    icon:PropTypes.string,
    title:PropTypes.string,
    size:PropTypes.oneOf(['large', 'default', 'small']),
    type:PropTypes.oneOf(['primary', 'default', 'danger', 'text']),
    shape:PropTypes.oneOf(['circle', 'round']),
    loading:PropTypes.bool,
};

HsButton.defaultProps = {
    icon:'',
    title:'',
    size:'default',
    type:'default',
    loading:false
}

export default HsButton;
