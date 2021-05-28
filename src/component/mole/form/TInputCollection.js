import React from 'react';
import TInput from "../../atom/input/TInput";

const TInputCollection = ({item, rules, control}, props) => {
    switch(item.type) {
        case undefined:
            return <TInput {...props} name={item.id} control={control} rules={rules} />
        default:
            return <></>
    }
};

export default TInputCollection;
