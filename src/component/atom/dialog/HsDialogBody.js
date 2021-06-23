import React from 'react';
import PropTypes from 'prop-types';
import {Classes} from "@blueprintjs/core";

const HsDialogBody = ({content}) => {
    return (
        <div className={Classes.DIALOG_BODY}>
            {content}
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