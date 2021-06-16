import React from 'react';
import TInput from "../../atom/input/TInput";
import TPassword from "../../atom/input/TPassword";

const TInputCollection = ({item, rules, control}, props) => {
    switch(item.type) {
        case undefined:
            return <TInput {...props} {...item} name={item.id} control={control} rules={rules} />
        case 'password':
            return <TPassword {...props} {...item} name={item.id} control={control} rules={rules} />
        default:
            return <></>
    }
};

export default TInputCollection;
