import React, {useCallback, useEffect, useState} from 'react';
import {Header} from "antd/lib/layout/layout";
import styled from "styled-components";
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";
import jwtDecode from "jwt-decode";
import moment from "moment";
import PropTypes from 'prop-types';
import TheHeaderAuth from "./header/TheHeaderAuth";
import TheHeaderExtend from "./header/TheHeaderExtend";
import {ButtonGroup, Divider} from "@blueprintjs/core";
import TheHeaderProfile from "./header/TheHeaderProfile";
import HeaderContext, {HeaderProvider} from "../../utils/contexts/HeaderContext";
import TheHeaderNotification from "./header/TheHeaderNoti";

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
  margin-right: 20px;
  //li {
  //  display:inline-block;
  //  margin-right:5px;
  //  }
`

const TheHeader = ({toggle, setToggle}) => {
    const reverseToggle = useCallback(() => {
        setToggle(!toggle);
    }, [toggle])

    return (
        <>
            <HeaderProvider>
                <CustomHeader className="site-layout-background">
                    {React.createElement(toggle ? AiOutlineMenuUnfold : AiOutlineMenuFold, {
                        className: 'trigger',
                        onClick: reverseToggle
                    })}
                    <ProfileHeader>
                        <ButtonGroup minimal>
                            <TheHeaderAuth/>
                            <TheHeaderExtend/>
                            <Divider/>
                            <TheHeaderProfile/>
                            <TheHeaderNotification/>
                        </ButtonGroup>
                    </ProfileHeader>
                </CustomHeader>
            </HeaderProvider>
        </>
    );
};

TheHeader.propTypes = {};

export default TheHeader;