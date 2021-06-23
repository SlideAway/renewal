import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useAxios} from "../../../utils/hooks/useAxios";
import {Controller} from "react-hook-form";
import {Select} from "antd";
const {Option} = Select;
const HsSelect = (props) => {
    const {url, body, control, rules, id} = props;
    const {loading, submit} = useAxios({useLoading:true})
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if(url) {
            const config = {
                url:url,
                method:'get'
            }

            submit(config, (res) => {
                setOptions(res.data);
            })
        }
    }, [])

    if (url)
        return (
            <>
                <Controller
                    name={id}
                    control={control}
                    rules={rules}
                    defaultValue=''
                    render={(innerProps) => (
                        <Select {...innerProps} loading={loading}>
                            <Option value=''>선택</Option>
                            {options.map(item => (
                                <Option value={item.value}>{item.text}</Option>
                                ))}
                        </Select>
                    )}
                />
            </>
        );
    else if (body)
        return (
            <>
            </>
        )
    else
        return (
            <>
            </>
        )
};

HsSelect.propTypes = {
    item: PropTypes.object
};

export default HsSelect;
