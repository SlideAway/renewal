import React from 'react';
import TInputCollection from "./TInputCollection";
import {CLabel, CFormGroup} from "@coreui/react";
import TErrorMessage from "../../atom/error/TErrorMessage";

const TCol = ({item, control, errors}) => {
    return (
        <>
            <CFormGroup>
                <CLabel>{item.name}</CLabel>
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
                {errors[item.name] ? <TErrorMessage message={errors[item.name].message}/> : <></>}
            </CFormGroup>
        </>
    );
};

export default TCol;
