import React, {useCallback, useEffect, useState} from 'react';
import TheSidebar from "./TheSidebar";
import TheContent from "./TheContent";
import TheHeader from "./TheHeader";
import styled, {css} from "styled-components";
import {Layout, Spin} from "antd";
import useAxios from "../../utils/hooks/useAxios";
import {useHistory} from "react-router-dom";
import {ContextMenu2} from "@blueprintjs/popover2";
import {Menu, MenuItem} from "@blueprintjs/core";
import {TiArrowBackOutline} from "react-icons/all";
import TheFooter from "./TheFooter";

const RootLayout = styled(Layout)`
  width: 100%;
  height: auto;
  margin:auto;

  .site-layout-background {
    background-color: white;
  }
`

const SubrootLayout = styled(Layout)`
  transition: all 0.2s;
  ${({toggle})=>
          toggle!=='true' ? css`
            margin-left: 200px;
          ` : css`
            margin-left: 80px
          `}
`
const TheLayout = () => {
    const {submit, loading} = useAxios({useModal: false, useLoading: true});
    const [toggle, setToggle] = useState(true);
    const history = useHistory();

    const onSuccess = useCallback((res) => {

    }, [])

    const onFailure = useCallback((error) => {
        history.push('/login');
    }, [])

    useEffect(() => {
        const config = {
            url: '/jwt/verification',
            method: 'get'
        }
        submit(config, onSuccess, onFailure);
    }, [])

    return (
        <>
            <Spin tip='loading...' spinning={loading}>
                <ContextMenu2 content={
                    <Menu>
                        <MenuItem text='뒤로' onClick={history.goBack} icon={<TiArrowBackOutline/>} />
                    </Menu>
                } >
                    <RootLayout>
                        <TheSidebar toggle={toggle} setToggle={setToggle}/>
                        <SubrootLayout className='site-layout' toggle={toggle.toString()}>
                            <TheHeader toggle={toggle} setToggle={setToggle}/>
                            <TheContent/>
                            <TheFooter/>
                        </SubrootLayout>
                    </RootLayout>
                </ContextMenu2>
            </Spin>
        </>
    );

};

export default TheLayout;
