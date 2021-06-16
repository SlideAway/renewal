import React, {useCallback} from 'react';
import {useForm} from "react-hook-form";
import TFormCol from "../../component/mole/form/TFormCol";
import TCard from "../../component/atom/card/TCard";
import styled from "styled-components";
import TButton from "../../component/atom/button/TButton";
import useAxios from "../../utils/hooks/useAxios";
import {useHistory} from 'react-router-dom';
const LoginCard = styled(TCard)({
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
        console.log(errors);
        const formData = new FormData();
        Object.keys(data).forEach(item => formData.append(item, data[item]))
        const config = {
            url:'/login',
            method:'post',
            data:formData
        }
        submit(config, loginSuccess);
    };

    return (
        <>
            <LoginCard title='SITEMAN'>
                <TFormCol item={{
                    name: 'ID', id: 'username', required: true,
                    placeholder: 'ID'
                }}
                          control={control}
                          errors={errors}/>
                <TFormCol item={{
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
