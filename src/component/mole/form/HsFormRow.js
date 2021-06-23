import React from 'react';
import PropTypes from 'prop-types';
import HsFormCol from "./HsFormCol";

const HsFormRow = ({items, control, errors}) => {
    return (
        <>
            {items.map(item => (
                <HsFormCol item={item} control={control} errors={errors}/>
            ))}
        </>
    );
};

HsFormRow.propTypes = {
    items:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    control:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};

export default HsFormRow;