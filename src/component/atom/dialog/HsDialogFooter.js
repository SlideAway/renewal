import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";
import HsButton from "../button/HsButton";

const HsDialogFooter = ({content, formState, setShow}) => {
    return (
        <div className={Classes.DIALOG_FOOTER}>
            <HsButton onClick={() => setShow(false)}>닫기</HsButton>
            {content}
        </div>
    );
};

HsDialogFooter.defaultProps = {
    content:<></>
}

HsDialogFooter.propTypes = {
    content:PropTypes.element,
    formState:PropTypes.object.isRequired,
    setShow:PropTypes.func.isRequired
};

export default HsDialogFooter;