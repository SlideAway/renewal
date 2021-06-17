import React, {useCallback, useState} from 'react';
import {Header} from "antd/lib/layout/layout";
import styled from "styled-components";
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";
import jwtDecode from "jwt-decode";
import moment from "moment";
import PropTypes from 'prop-types';

const CustomHeader = styled(Header)`
  padding: 0;

  .trigger {
    margin-left: 10px;
    font-size: 18px;
    //line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

`

const ProfileHeader = styled.div`
  float: right;
`

const getRemaining = (timestamp) => {
    const timeObj = moment.unix(timestamp);
    const now = moment();

    const minute = parseInt(moment.duration(timeObj.diff(now)).minutes());
    const second = parseInt(moment.duration(timeObj.diff(now)).seconds());
    return {minute, second}
}

const TheHeader = ({toggle, setToggle}) => {
    const [time, setTime] = useState();
    const reverseToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle])

    const token = localStorage.getItem('token');
    const decodedToken = token ? jwtDecode(token) : '';

    if (decodedToken)
        setInterval(() => {
            setTime(getRemaining(decodedToken && decodedToken.exp));
        }, 1000)

    return (
        <>
            <CustomHeader className="site-layout-background">
                {React.createElement(toggle ? AiOutlineMenuUnfold : AiOutlineMenuFold, {
                    className: 'trigger',
                    onClick: reverseToggle
                })}
                <ProfileHeader>
                    {time && time.minute >= 0 ? `${time.minute}분` : ''}
                    {time && time.second >= 0 ? `${time.second}초` : ''}
                </ProfileHeader>
            </CustomHeader>
        </>
    );
};

TheHeader.propTypes = {

};

export default TheHeader;