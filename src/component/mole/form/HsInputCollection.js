import React from 'react';
import HsInput from "../../atom/input/HsInput";
import HsPassword from "../../atom/input/HsPassword";
import HsSelect from "../../atom/input/HsSelect";

const HsInputCollection = ({item, rules, control}, props) => {
    switch(item.type) {
        case 'hidden':
        case undefined:
            return <HsInput {...props} {...item} name={item.id} control={control} rules={rules} />
        case 'password':
            return <HsPassword {...props} {...item} name={item.id} control={control} rules={rules} />
        case 'select':
            return <HsSelect {...props} {...item} name={item.id} control={control} rules={rules}/>
        default:
            return <></>
    }
};

export default HsInputCollection;
