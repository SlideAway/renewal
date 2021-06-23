import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";
import HsButton from "../button/HsButton";
import {Space} from "antd";

const HsDialogFooter = (props) => {
    const {setShow, children} = props;
    return (
        <div className={Classes.DIALOG_FOOTER}>
            <Space>
                {children}
                <HsButton onClick={() => setShow(false)} type='danger'>닫기</HsButton>
            </Space>
        </div>
    );
};

HsDialogFooter.defaultProps = {
    children: <></>
}

HsDialogFooter.propTypes = {
    children: PropTypes.element,
    setShow: PropTypes.func.isRequired
};

export default HsDialogFooter;