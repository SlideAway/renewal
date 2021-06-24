import React, {createContext, useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';

const ContentContext = createContext({
    state : {
        gridData:{},
        loading:false
    },
    actions : {
        setGridData:() => {},
        setLoading:() => {}
    }
});

export const ContentProvider = ({children}) => {
    const {pathname} = window.location;
    const [gridData, setGridData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setGridData({})
    }, [pathname])

    const value = {
        state:{gridData, loading},
        actions:{setGridData, setLoading}
    }
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}



export default ContentContext;