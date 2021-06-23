import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Dropdown, Menu} from "antd";
import HsButton from "../../atom/button/HsButton";
import HeaderContext from "../../../utils/contexts/HeaderContext";
import jwtDecode from "jwt-decode";
import Icons from "../../../assets/icons/Icons";
import ProfileDialog from "../../template/dialog/ProfileDialog";

const editProfile = () => {

}

const editPassword = () => {

}


const doLogout = () => {

}

const ProfileDropdown = (setShowProfile, setShowPassword) => (
    <Menu>
        <Menu.Item icon={<Icons name='ImProfile'/>} onClick={() => setShowProfile(true)}>
            프로필 수정
        </Menu.Item>
        <Menu.Item icon={<Icons name='BiKey'/>} onClick={() => setShowPassword(true)}>
            비밀번호 수정
        </Menu.Item>
        <Menu.Item danger icon={<Icons name='HiOutlineLogout'/>} onClick={doLogout}>
            로그아웃
        </Menu.Item>
    </Menu>
);

const TheHeaderProfile = () => {
    const context = useContext(HeaderContext);
    const {state} = context;
    const {token} = state;
    const decodedToken = token ? jwtDecode(token) : '';
    const [showProfile, setShowProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Dropdown

                overlay={ProfileDropdown(setShowProfile, setShowPassword)}
                trigger={['click']}
            >
                <HsButton type='text' icon='AiOutlineUser'>
                    {decodedToken && decodedToken.aud}님
                    <Icons name='BsChevronDown'/>
                </HsButton>
            </Dropdown>
            <ProfileDialog show={showProfile} setShow={setShowProfile}/>
        </>
    );
};

TheHeaderProfile.propTypes = {};

export default TheHeaderProfile;