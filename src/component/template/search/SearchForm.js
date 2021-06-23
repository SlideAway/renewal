import React from 'react';
import PropTypes from 'prop-types';
import HsFormRow from "../../mole/form/HsFormRow";
import {useForm} from "react-hook-form";
import {Tabs} from "antd";
import HsRow from "../../atom/layout/HsRow";
import HsButton from "../../atom/button/HsButton";
import {useAxios} from "../../../utils/hooks/useAxios";
import HsCol from "../../atom/layout/HsCol";

const {TabPane} = Tabs;

const SearchForm = (props) => {
    const {form} = props;
    const {loading, submit} = useAxios();
    const {errors, control, handleSubmit} = useForm();
    const doSearch = (data) => {

    }

    return (
        <>
            <Tabs type='card'>
                <TabPane tab='일반검색' key={1} >
                    <HsFormRow rowProps={{gutter:'24'}} errors={errors} items={form.filter((item, index) => index<5)} control={control}/>
                </TabPane>
                <TabPane tab='상세검색' key={2}>
                    <HsFormRow rowProps={{gutter:'24'}} errors={errors} items={form} control={control}/>
                </TabPane>
            </Tabs>
            <HsRow justify='end'>
                <HsCol xl={2}>
                    <HsButton loading={loading} onClick={handleSubmit(doSearch)} block={true}>검색</HsButton>
                </HsCol>
            </HsRow>
        </>
    );
};

SearchForm.propTypes = {
    form:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string,
        name:PropTypes.string,
        type:PropTypes.oneOf([undefined, 'select', 'password', 'auto', 'checkbox', 'radio']),
        size:PropTypes.shape({
            xl:PropTypes.number,
            lg:PropTypes.number,
            md:PropTypes.number,
            sm:PropTypes.number,
            xs:PropTypes.number
        })
    })),
    option:PropTypes.arrayOf(PropTypes.shape({

    }))
};

export default SearchForm;