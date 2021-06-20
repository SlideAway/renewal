import React from 'react';
import styled from 'styled-components'

const HsErrorMessage = ({message}) => {

    const Error = styled.div`
      color: #ff6d6d;
    `

    return (
        <Error>
            {message}
        </Error>
    );
};

export default HsErrorMessage;
