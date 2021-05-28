import React from 'react';
import {useForm} from "react-hook-form";
import TCol from "../../component/mole/form/TCol";

const Login = () => {
    const {control, handleSubmit, errors} = useForm();
    return (
        <>
            <TCol item={{name:'ID', id:'id', required:true}} control={control} errors={errors}/>
            <TCol item={{name:'비밀번호', id:'password', required:true}} control={control} errors={errors}/>

        </>
    );
};

export default Login;
