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

`

const TheHeaderExtend = ({remainingLoading}) => {


    return (
        <TheHeaderExtendRoot>
        </TheHeaderExtendRoot>
    );
};

TheHeaderExtend.propTypes = {};

export default TheHeaderExtend;