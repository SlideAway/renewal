import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from "antd";
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
const TheHeaderAuth = ({decodedToken}) => {
    const [exp, setExp] = useState(decodedToken.exp ? decodedToken.exp : 0);
    const [time, setTime] = useState();


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
            <HsButton icon='BiTime' type='text' style={{cursor:'default'}} >
                {time && time.minute >= 0 ? `${time.minute}분` : ''}
                {time && time.second >= 0 ? `${time.second}초` : ''}
            </HsButton>
        </>
    );
};

TheHeaderAuth.propTypes = {};

export default TheHeaderAuth;