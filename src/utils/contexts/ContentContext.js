import React, {createContext, useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';

const ContentContext = createContext({
    state : {
        gridData:{},
        pageRequest:{},
        loading:false
    },
    actions : {
        setGridData:() => {},
        setPageRequest:() => {},
        setLoading:() => {}
    }
});

export const ContentProvider = ({children}) => {
    const {pathname} = window.location;
    const [gridData, setGridData] = useState({});
    const [pageRequest, setPageRequest] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setGridData({})
    }, [pathname])

    const value = {
        state:{gridData, loading, pageRequest},
        actions:{setGridData, setLoading, setPageRequest}
    }
    return (
        <ContentContext.Provider value={value}>
            {children}
        </ContentContext.Provider>
    )
}



export default ContentContext;