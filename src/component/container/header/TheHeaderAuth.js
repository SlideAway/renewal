import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Dropdown} from "antd";
import jwtDecode from "jwt-decode";
import moment from "moment";
import TheHeaderExtend from "./TheHeaderExtend";
import HsButton from "../../atom/button/HsButton";
import useAxios from "../../../utils/hooks/useAxios";
import Icons from "../../../assets/icons/Icons";

const getRemaining = (timestamp) => {
    const timeObj = moment.unix(timestamp);
    const now = moment();

    const minute = parseInt(moment.duration(timeObj.diff(now)).minutes());
    const second = parseInt(moment.duration(timeObj.diff(now)).seconds());
    return {minute, second}
}
const TheHeaderAuth = () => {
    const [loading, setLoading] = useState(false);
    const [exp, setExp] = useState(0);
    const [time, setTime] = useState();
    const {submit} = useAxios({
        useModal: false
    });

    const extend = () => {
        const config = {
            url: '/jwt',
            method: 'get'
        }

        submit(config, (data) => {
            localStorage.setItem('token', data && data.data.data.token);
        })
    }

    useEffect(() => {

        const token = localStorage.getItem('token')
        if (token) setExp(jwtDecode(token).exp);
    }, [localStorage.getItem('token')])

    useEffect(() => {
        const id = setInterval(() => {
            setTime(getRemaining(exp));
        }, 1000)
        return () => clearInterval(id);
    }, [exp, time])


    return (
        <>
            <li>
                <Icons name='BiTime'/>
                <span>
                    {time && time.minute >= 0 ? `${time.minute}분` : ''}
                    {time && time.second >= 0 ? `${time.second}초` : ''}
                </span>
            </li>
            <li>
                <HsButton loading={loading} icon='MdAutorenew' type='text' onClick={extend}>로그인 연장</HsButton>
            </li>
        </>
    );
};

TheHeaderAuth.propTypes = {};

export default TheHeaderAuth;