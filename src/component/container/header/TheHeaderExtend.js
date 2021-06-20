import React from 'react';
import PropTypes from 'prop-types';
import HsButton from "../../atom/button/HsButton";
import styled, {css} from "styled-components";
import useAxios from "../../../utils/hooks/useAxios";


const TheHeaderExtendRoot = styled.li`
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
  
  &:visited {
  ${({loading}) => loading ? css`rotate(-360deg)`:''}
  }

`

const TheHeaderExtend = props => {
    const {submit, loading} = useAxios({
        useModal:false
    });

    const extend = () => {
        const config = {
            url:'/jwt',
            method:'get'
        }

        submit(config, (data) => {
            localStorage.setItem('token', data && data.data.data.token);
        })
    }

    return (
        <TheHeaderExtendRoot loading={loading}>
            <HsButton icon='MdAutorenew' type='text' onClick={extend}>로그인 연장</HsButton>
        </TheHeaderExtendRoot>
    );
};

TheHeaderExtend.propTypes = {};

export default TheHeaderExtend;