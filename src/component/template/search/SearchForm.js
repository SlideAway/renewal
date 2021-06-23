import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import HsFormRow from "../../mole/form/HsFormRow";
import {useForm} from "react-hook-form";
import {Tabs} from "antd";
import HsRow from "../../atom/layout/HsRow";
import HsButton from "../../atom/button/HsButton";
import {useAxios} from "../../../utils/hooks/useAxios";
import HsCol from "../../atom/layout/HsCol";
import qs from 'qs';
import ContentContext from "../../../utils/contexts/ContentContext";
const {TabPane} = Tabs;

const SearchForm = (props) => {
    const {url, form, options} = props;
    const {loading, submit} = useAxios();
    const {errors, control, handleSubmit, reset} = useForm();
    const {actions} = useContext(ContentContext);
    const {setGridData} = actions

    const doSearch = (data) => {
        const config = {
            url:url.includes('?') ? url+qs.stringify(data) : `${url}?${qs.stringify(data)}`,
            method:'get'
        };
        submit(config, (res) => {
            setGridData(res && res.data.data);
        })
    }

    useEffect(() => {
        handleSubmit(doSearch)();
    }, [])

    return (
        <>
            <Tabs type='card'>
                <TabPane tab='일반검색' key={1}>
                    <HsFormRow
                        rowProps={{gutter: '24'}}
                        errors={errors}
                        items={form
                            .filter((item, index) => index < 5)
                            .map(item => {
                                item.header = '전체';
                                return item;
                            })}
                        control={control}
                    />
                </TabPane>
                {form.length > 4 ? <TabPane tab='상세검색' key={2}>
                        <HsFormRow
                            rowProps={{gutter: '24'}}
                            errors={errors}
                            items={form.map(item => {
                                item.header = '전체';
                                return item;
                            })}
                            control={control}
                        />
                    </TabPane>
                    :
                    <></>}
            </Tabs>
            <HsRow justify='end'>
                <HsCol xl={2}>
                    <HsButton loading={loading} onClick={handleSubmit(doSearch)} block={true}>검색</HsButton>
                </HsCol>
                {options.map(item => (<HsCol xl={2}>{item}</HsCol>))}
            </HsRow>
        </>
    );
};

SearchForm.defaultProps = {
    url:'',
    form: [],
    options: []
}

SearchForm.propTypes =
    {
        url:PropTypes.string,
        form: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.oneOf([undefined, 'select', 'password', 'auto', 'checkbox', 'radio']),
            size: PropTypes.shape({
                xl: PropTypes.number,
                lg: PropTypes.number,
                md: PropTypes.number,
                sm: PropTypes.number,
                xs: PropTypes.number
            })
        })),
        options: PropTypes.arrayOf(PropTypes.element)
    };

export default SearchForm;