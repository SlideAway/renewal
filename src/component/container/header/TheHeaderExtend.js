import React, {useContext} from 'react';
import HsButton from "../../atom/button/HsButton";
import styled from "styled-components";
import {useAxios} from "../../../utils/hooks/useAxios";
import HeaderContext from "../../../utils/contexts/HeaderContext";


const TheHeaderExtendButton = styled(HsButton)`
  & {
    svg {
      transition: all 0.7s;
      transform: rotate(0deg);
    }
  }

  &:hover {
    svg {
      transition: all 0.7s;
      transform: rotate(-180deg);
    }
  }
`

const TheHeaderExtend = () => {
    const headerContext = useContext(HeaderContext);
    const {state, actions} = headerContext;
    const {loading} = state;
    const {setToken, setLoading} = actions;
    const {submit} = useAxios({
        useModal: false
    });

    const extend = () => {
        setLoading(true)
        const config = {
            url: '/jwt',
            method: 'get'
        }

        submit(config, (data) => {
            localStorage.setItem('token', data && data.data.data.token);
            setToken(data && data.data.data.token);
        })
    }

    return (
        <TheHeaderExtendButton loading={loading} icon='MdAutorenew' type='text' onClick={extend}>
            로그인 연장
        </TheHeaderExtendButton>
    );
};

export default TheHeaderExtend;