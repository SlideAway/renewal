import React from 'react';
import HsInputCollection from "./HsInputCollection";
import HsErrorMessage from "../../atom/error/HsErrorMessage";
import {Form} from "antd";
import PropTypes from 'prop-types';
import HsCol from "../../atom/layout/HsCol";

export const defaultSize = {
    xs: 12,
    sm: 6,
    md: 5,
    lg: 4,
    xl: 3
}

export const setGridCol = (item) => {
    const size = [];
    if (item.size) {
        if (item.size.xs) size.push('ant-col-xs-' + item.size.xs)
        if (item.size.sm) size.push('ant-col-sm-' + item.size.sm)
        if (item.size.md) size.push('ant-col-md-' + item.size.md)
        if (item.size.lg) size.push('ant-col-lg-' + item.size.lg)
        if (item.size.xl) size.push('ant-col-xl-' + item.size.xl)

    } else {
        for (let key of Object.keys(defaultSize)) {
            size.push(`col-${key}-${defaultSize[key]}`);
        }
    }
    return size.join(' ');
}

const HsFormCol = ({item, control, errors}) => {
    return (
        <>
            <HsCol {...defaultSize}>
            <Form layout='vertical' hidden={item.type === 'hidden'}>
                <Form.Item label={item.name} required={item.required}>
                <HsInputCollection item={item} control={control} rules={{
                    required: item.required ? {
                        value: item.required,
                        message: `${item.name}은(는) 필수값입니다. `
                    } : null,
                    max: item.max ? {
                        value: item.max,
                        message: `${item.name}의 최댓값은 ${item.max} 입니다. `
                    } : null,
                    min: item.min ? {
                        value: item.min,
                        message: `${item.name}의 최댓값은 ${item.min} 입니다. `
                    } : null,
                    pattern: item.type === 'password' ? {
                        value:'',
                        message:''
                    } : item.regex ? {
                        value:item.regex,
                        message:`${item.name}이 형식에 맞지 않습니다. `
                    } : null
                }}/>
                {errors[item.id] ? <HsErrorMessage message={errors[item.id].message}/> : <></>}
                </Form.Item>
            </Form>
            </HsCol>
        </>
    );
};

HsFormCol.propTypes = {
    item:PropTypes.objectOf(PropTypes.string).isRequired,
    control:PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};

export default HsFormCol;