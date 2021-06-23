import React, {useCallback} from 'react';
import {useForm} from "react-hook-form";
import HsFormCol from "../../component/mole/form/HsFormCol";
import HsCard from "../../component/atom/card/HsCard";
import styled from "styled-components";
import TButton from "../../component/atom/button/HsButton";
import {useAxios} from "../../utils/hooks/useAxios";
import {useHistory} from 'react-router-dom';
const LoginCard = styled(HsCard)({
    marginTop: '20% !important',
    marginLeft: '30% !important',
    marginRight: '30% !important'
});


const Login = () => {
    const {control, handleSubmit, errors} = useForm();
    const {loading,submit} = useAxios();
    const history = useHistory();

    window.addEventListener('keypress', (e) => {
        if(e.key === 'Enter')
            handleSubmit(onLogin)();
    })

    const loginSuccess = useCallback((res) => {
        localStorage.setItem('token', res && res.data.data.token);
        history.push(res && res.data.data.targetUrl)
    }, [])

    const onLogin = (data) => {
        const config = {
            url:'/login',
            method:'post',
            data:data
        }
        submit(config, loginSuccess);
    };

    return (
        <>
            <LoginCard title='SITEMAN'>
                <HsFormCol item={{
                    name: 'ID', id: 'username', required: true,
                    placeholder: 'ID'
                }}
                           control={control}
                           errors={errors}/>
                <HsFormCol item={{
                    name: '비밀번호', id: 'password', type: 'password', required: true,
                    placeholder:'Password'
                }}
                           control={control}
                           errors={errors}/>
                <TButton onClick={handleSubmit(onLogin)} loading={loading}>로그인</TButton>
            </LoginCard>
        </>
    );
};

export default Login;
