import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useAxios} from "../../../utils/hooks/useAxios";
import {Controller} from "react-hook-form";
import {Select} from "antd";
const {Option} = Select;
const HsSelect = (props) => {
    const {url, body, control, rules, id, noHeader, header} = props;
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
                            {noHeader ? <></> : <Option value=''>{header ? header : '선택'}</Option>}
                            {options.map(item => (
                                <Option value={item.code}>{item.text}</Option>
                                ))}
                        </Select>
                    )}
                />
            </>
        );
    else if (body)
        return (
            <>
                <Controller
                    name={id}
                    control={control}
                    rules={rules}
                    defaultValue=''
                    render={(innerProps) => (
                        <Select {...innerProps} loading={loading}>
                            {noHeader ? <></> : <Option value=''>{header ? header : '선택'}</Option>}
                            {body.map(item => (
                                <Option value={item.code}>{item.text}</Option>
                            ))}
                        </Select>
                    )}
                />
            </>
        )
    else
        return (
            <>
                <Select>
                    {noHeader ? <></> : <Option value=''>{header ? header : '선택'}</Option>}
                </Select>
            </>
        )
};

HsSelect.propTypes = {
    item: PropTypes.object
};

export default HsSelect;
