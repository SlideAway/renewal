import React from 'react';
import TInputCollection from "./TInputCollection";
import TErrorMessage from "../../atom/error/TErrorMessage";
import {Form} from "antd";

const TFormCol = ({item, control, errors}) => {
    return (
        <>
            <Form>
                <Form.Item label={item.label}>
                <TInputCollection item={item} control={control} rules={{
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
                {errors[item.id] ? <TErrorMessage message={errors[item.id].message}/> : <></>}
                </Form.Item>
            </Form>
        </>
    );
};

export default TFormCol;
