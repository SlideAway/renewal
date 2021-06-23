import React, {createContext, useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';

const ContentContext = createContext({
    state : {
        gridData:{}
    },
    actions : {
        setGridData:() => {}
    }
});

export const ContentProvider = ({children}) => {
    const {pathname} = window.location;
    const [gridData, setGridData] = useState({});

    useEffect(() => {
        setGridData({})
    }, [pathname])

    const value = {
        state:{gridData},
        actions:{setGridData}
    }
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}



export default ContentContext;