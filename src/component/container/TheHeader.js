import React, {useCallback, useEffect, useState} from 'react';
import {Header} from "antd/lib/layout/layout";
import styled from "styled-components";
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";
import jwtDecode from "jwt-decode";
import moment from "moment";

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

const decodedToken = jwtDecode(localStorage.getItem('token'))

const TheHeader = ({toggle, setToggle}) => {
    const [time, setTime] = useState(getRemaining(decodedToken && decodedToken.exp));
    const reverseToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle])

    setInterval(() => {
        setTime(getRemaining(decodedToken && decodedToken.exp));
    }, 1000)


    useEffect(() => {

    }, [])

    return (
        <>
            <CustomHeader className="site-layout-background">
                {React.createElement(toggle ? AiOutlineMenuUnfold : AiOutlineMenuFold, {
                    className: 'trigger',
                    onClick: reverseToggle
                })}
                <ProfileHeader>
                    {time && time.minute ? `${time.minute}분` : ''}
                    {`${time && time.second}초`}
                </ProfileHeader>
            </CustomHeader>
        </>
    );
};

export default TheHeader;
