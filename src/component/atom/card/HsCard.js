import React from 'react';
import {Card} from "antd";
import PropTypes from 'prop-types';

const HsCard = (props) => {
    return (
        <Card {...props}>
            {props.children}
        </Card>
    );
};

HsCard.propTypes = {
    style:PropTypes.object,
    loading:PropTypes.bool,
    bordered:PropTypes.bool
};

export default HsCard;