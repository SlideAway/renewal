import React from 'react';
import PropTypes from 'prop-types';
import {Dialog} from "@blueprintjs/core";
import HsSpinner from "../progress/HsSpinner";

const HsDialog = (props) => {
    const {show, setShow, title, children, loading} = props;
    return (
        <Dialog
            title={title}
            isOpen={show}
            canOutsideClickClose={false}
            onClose={() => setShow(false)}
        >
            <HsSpinner loading={loading}>
                {children}
            </HsSpinner>
        </Dialog>
    );
};

HsDialog.defaultProps = {
    title: '',
    loading: false
}

HsDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    title: PropTypes.string,
    loading: PropTypes.bool
};

export default HsDialog;