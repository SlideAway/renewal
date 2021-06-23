import React from 'react';
import PropTypes from 'prop-types';
import HsFormCol from "./HsFormCol";
import HsRow from "../../atom/layout/HsRow";

const HsFormRow = ({items, control, errors, rowProps}) => {
    return (
        <>
            <HsRow {...rowProps}>
            {items.map(item => (
                <HsFormCol item={item} control={control} errors={errors} size={item.size}/>
            ))}
            </HsRow>
        </>
    );
};

HsFormRow.propTypes = {
    items:PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    control:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired,
    rowProps:PropTypes.object
};

export default HsFormRow;