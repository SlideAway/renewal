import React, {createContext, useState} from 'react';

const HeaderContext = createContext({
    state:{
        token:localStorage.getItem('token') ? localStorage.getItem('token') : '',
        loading:false
    },
    actions:{
        setToken : () => {},
        setLoading : () => {}
    }
})

const HeaderProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(false);
    const value = {
        state:{token, loading},
        actions : {setToken, setLoading}
    }

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
}

export {HeaderProvider};


export default HeaderContext;