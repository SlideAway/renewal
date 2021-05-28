import React from 'react';
import styled from 'styled-components'

const TErrorMessage = ({message}) => {

    const Error = styled.div`
      color: #ff6d6d;
    `

    return (
        <Error>
            {message}
        </Error>
    );
};

export default TErrorMessage;
