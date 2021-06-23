import React from 'react';
import PropTypes from 'prop-types';
import HsFormRow from "../../mole/form/HsFormRow";
import {useForm} from "react-hook-form";

const SearchForm = props => {
    const {form} = props;
    const {errors, control, formState} = useForm();
    return (
        <>
            <HsFormRow rowProps={{gutter:'24'}} errors={errors} items={form} control={control}/>
        </>
    );
};

SearchForm.propTypes = {
    form:PropTypes.arrayOf(PropTypes.shape({

    }))
};

export default SearchForm;