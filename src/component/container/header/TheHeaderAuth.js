import React, {useCallback, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from "antd";
import jwtDecode from "jwt-decode";
import moment from "moment";
import TheHeaderExtend from "./TheHeaderExtend";
import HsButton from "../../atom/button/HsButton";
import useAxios from "../../../utils/hooks/useAxios";
import Icons from "../../../assets/icons/Icons";
import HeaderContext from "../../../utils/contexts/HeaderContext";
import _ from 'lodash';

const getRemaining = (timestamp) => {
    const timeObj = moment.unix(timestamp);
    const now = moment();

    const minute = parseInt(moment.duration(timeObj.diff(now)).minutes());
    const second = parseInt(moment.duration(timeObj.diff(now)).seconds());
    return {minute, second}
}
const TheHeaderAuth = () => {
    const context = useContext(HeaderContext);
    const {state, actions} = context;
    const {token} = state;
    const {setLoading} = actions;
    const decodedToken = token ? jwtDecode(token) : '';
    const [exp, setExp] = useState(decodedToken.exp ? decodedToken.exp : 0);
    const [time, setTime] = useState();

    useEffect(() => {
        if (token) setExp(jwtDecode(token).exp);
        setLoading(false);
    }, [token])

    useEffect(() => {
        const id = setInterval(() => {
            setTime(getRemaining(exp));
        }, 1000)
        return () => clearInterval(id);
    }, [exp, time])


    return (
        <>
            <HsButton icon={_.isEmpty(time) ? '' : 'BiTime'} type='text' style={{cursor:'default'}} >
                {time && time.minute >= 0 ? `${time.minute}분` : ''}
                {time && time.second >= 0 ? `${time.second}초` : ''}
            </HsButton>
        </>
    );
};

TheHeaderAuth.propTypes = {};

export default TheHeaderAuth;