import React from 'react';
import PropTypes from 'prop-types';
import {Dialog} from "@blueprintjs/core";
import HsDialogBody from "./HsDialogBody";
import HsDialogFooter from "./HsDialogFooter";

const HsDialog = ({show, setShow, title, bodyContent, footerContent}) => {

    return (
        <Dialog
            title={title}
            isOpen={show}
            canOutsideClickClose={false}
            onClose={() => setShow(false)}
        >
            <HsDialogBody content={bodyContent}/>
            <HsDialogFooter content={footerContent} setShow={setShow} />
        </Dialog>
    );
};

HsDialog.defaultProps = {
    title:'',
    bodyContent:<></>,
    footerContent:<></>
}

HsDialog.propTypes = {
    show:PropTypes.bool.isRequired,
    setShow:PropTypes.func.isRequired,
    title:PropTypes.string,
    bodyContent:PropTypes.element,
    footerContent:PropTypes.element
};

export default HsDialog;