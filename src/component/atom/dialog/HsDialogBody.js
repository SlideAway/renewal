import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";

const HsDialogBody = (props) => {
    const {children} = props;
    return (
        <div className={Classes.DIALOG_BODY}>
            {children}
        </div>
    );
};

HsDialogBody.defaultProps = {
    content:<></>
}

HsDialogBody.propTypes = {
    content:PropTypes.element
};

export default HsDialogBody;