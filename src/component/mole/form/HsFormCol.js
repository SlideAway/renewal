import React from 'react';
import HsInputCollection from "./HsInputCollection";
import HsErrorMessage from "../../atom/error/HsErrorMessage";
import {Form} from "antd";

const HsFormCol = ({item, control, errors}) => {
    return (
        <>
            <Form>
                <Form.Item label={item.label}>
                <HsInputCollection item={item} control={control} rules={{
                    required: item.required ? {
                        value: item.required,
                        message: `${item.name}은 필수값입니다. `
                    } : null,
                    max: item.max ? {
                        value: item.max,
                        message: `${item.name}의 최댓값은 ${item.max} 입니다. `
                    } : null,
                    min: item.min ? {
                        value: item.min,
                        message: `${item.name}의 최댓값은 ${item.min} 입니다. `
                    } : null
                }}/>
                {errors[item.id] ? <HsErrorMessage message={errors[item.id].message}/> : <></>}
                </Form.Item>
            </Form>
        </>
    );
};

export default HsFormCol;
