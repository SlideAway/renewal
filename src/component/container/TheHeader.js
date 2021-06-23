import React, {useCallback, useEffect, useState} from 'react';
import {Header} from "antd/lib/layout/layout";
import styled from "styled-components";
import {AiOutlineMenuUnfold, AiOutlineMenuFold} from "react-icons/ai";
import PropTypes from 'prop-types';
import TheHeaderAuth from "./header/TheHeaderAuth";
import TheHeaderExtend from "./header/TheHeaderExtend";
import {ButtonGroup, Divider} from "@blueprintjs/core";
import TheHeaderProfile from "./header/TheHeaderProfile";
import {HeaderProvider} from "../../utils/contexts/HeaderContext";
import TheHeaderNotification from "./header/TheHeaderNoti";
import {Breadcrumb} from "antd";
import Icons from "../../assets/icons/Icons";
import routes from "../../routes";
import {withRouter} from 'react-router-dom';
const CustomHeader = styled(Header)`
  padding: 0;
  & {
    display:inline-block;
  }

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

const TheHeader = (props) => {
    const {toggle, setToggle, location} = props;
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
                {/*<Breadcrumb>*/}
                {/*    <Breadcrumb.Item>*/}
                {/*        <Icons name='AiOutlineHome'/>*/}
                {/*    </Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
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

TheHeader.propTypes = {
    toggle: PropTypes.bool,
    setToggle: PropTypes.func
};

export default withRouter(TheHeader);