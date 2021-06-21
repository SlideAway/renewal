import React from 'react';
import PropTypes from 'prop-types';
import HsButton from "../../atom/button/HsButton";
import styled, {css} from "styled-components";
import useAxios from "../../../utils/hooks/useAxios";


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
    const {submit, loading} = useAxios({
        useModal: false
    });

    const extend = () => {
        const config = {
            url: '/jwt',
            method: 'get'
        }

        submit(config, (data) => {
            localStorage.setItem('token', data && data.data.data.token);
        })
    }

    return (
        <TheHeaderExtendButton loading={loading} icon='MdAutorenew' type='text' onClick={extend}>
            로그인 연장
        </TheHeaderExtendButton>
    );
};

TheHeaderExtend.propTypes = {};

export default TheHeaderExtend;