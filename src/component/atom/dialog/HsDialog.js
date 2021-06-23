import React from 'react';
import PropTypes from 'prop-types';
import {Dialog} from "@blueprintjs/core";

const HsDialog = (props) => {
    const {show, setShow, title, children} = props;
    return (
        <Dialog
            title={title}
            isOpen={show}
            canOutsideClickClose={false}
            onClose={() => setShow(false)}
        >
            {children}
        </Dialog>
    );
};

HsDialog.defaultProps = {
    title:'',
}

HsDialog.propTypes = {
    show:PropTypes.bool.isRequired,
    setShow:PropTypes.func.isRequired,
    title:PropTypes.string,
};

export default HsDialog;