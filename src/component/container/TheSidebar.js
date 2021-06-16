import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Menu as AntMenu, Layout,} from "antd";
import styled, {css} from "styled-components";
import useAxios from "../../utils/hooks/useAxios";
import {FaAngleDoubleLeft, GoPrimitiveDot, ImNewTab, IoEnterOutline} from "react-icons/all";
import * as AntIcon from 'react-icons/ai';
import {Link, useHistory} from "react-router-dom";
import {ContextMenu2} from "@blueprintjs/popover2";
import {Menu, MenuItem} from "@blueprintjs/core";

const {Sider} = Layout;
const {SubMenu} = AntMenu;
const PrimitiveDotIcon = styled(GoPrimitiveDot)`
  margin-right: 5px;
`

const CustomSider = styled(Sider)`
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0
`

const ToggleIcon = styled(FaAngleDoubleLeft)`
  height:100%;
  transition:all 0.4s;
  transform:${({toggle}) => !toggle ? css`rotate(-180deg)` : ''};
  
`


const TheSidebar = ({toggle, setToggle}) => {
    const [menus, setMenus] = useState([]);
    const {submit} = useAxios();
    const [clickedMenu, setClickedMenu] = useState('')
    const history = useHistory();

    const successMenu = useCallback((res) => {
        setMenus(res && res.data);
    }, [])

    useEffect(() => {
        const config = {
            url: '/menus/leftMenus',
            method: 'get'
        }

        submit(config, successMenu)
    }, [])

    const onContextMenu = (e) => {
        if(e && e.target.href)
            setClickedMenu(e.target.href.replace(/.*localhost:[0-9]+/, ''))
        else setClickedMenu('');
    }

    const openInNewTab = () => {
        const windows = window.open(clickedMenu, '_blank');
        windows.focus();
    }


    return (
        <>
            <ContextMenu2
                content={
                    <Menu>
                        <MenuItem text='열기' icon={<IoEnterOutline/>} onClick={() => history.push(clickedMenu)} disabled={!clickedMenu} />
                        <MenuItem text='새탭으로 열기' icon={<ImNewTab/>} onClick={openInNewTab} disabled={!clickedMenu} />
                    </Menu>
                }
                onContextMenu={onContextMenu}
            >
                <CustomSider
                    breakpoint='lg'
                    trigger={
                        <span style={{width: '100%'}}>
                            <ToggleIcon toggle={toggle}/>
                    </span>
                    }
                    collapsible
                    collapsed={toggle}
                    onCollapse={setToggle}
                >
                    <div className="logo"/>
                    <AntMenu mode='inline' theme='dark'>
                        {menus && menus.map((item, index) => {
                            const antIconElement = AntIcon[item.icon];
                            return (
                                <SubMenu key={index} icon={React.createElement(antIconElement)} title={item.name}>
                                    {item._children && item._children.map((child, childIndex) => (
                                        <AntMenu.Item
                                            key={`${index}-${childIndex}`}
                                            icon={<PrimitiveDotIcon/>}
                                        >
                                            <Link to={child.to}>
                                                {child.name}
                                            </Link>
                                        </AntMenu.Item>
                                    ))}
                                </SubMenu>
                            )
                        })}
                    </AntMenu>
                </CustomSider>
            </ContextMenu2>
        </>
    );
};

TheSidebar.propTypes = {};

export default TheSidebar;
