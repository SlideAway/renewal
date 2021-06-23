import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";
import HsButton from "../button/HsButton";
import {Space} from "antd";

const HsDialogFooter = ({setShow}, props) => {
    const {children} = props;
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
    content: <></>
}

HsDialogFooter.propTypes = {
    content: PropTypes.element,
    setShow: PropTypes.func.isRequired
};

export default HsDialogFooter;