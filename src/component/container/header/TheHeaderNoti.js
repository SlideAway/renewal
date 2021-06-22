import React, {useEffect, useState} from 'react';
import HsButton from "../../atom/button/HsButton";
import useAxios from "../../../utils/hooks/useAxios";

const TheHeaderNotification = () => {
    const {submit, loading} = useAxios({});
    const [list, setList] = useState([]);

    useEffect(() => {
        const config = {
            url:'/notices/count',
            method:'get'
        }

        submit(config, (data) => {
            console.log(data)
        });
    }, [])

    const getNotifications = () => {
        const config = {
            url:'/notices',
            method:'get'
        }

        submit(config, (data) => {
            console.log(data);
        })
    }

    return (
        <>
            <HsButton
                loading={loading}
                type='text'
                shape='circle'
                icon='IoNotificationsOutline'
                onClick={getNotifications}
            />
        </>
    );
};

export default TheHeaderNotification;