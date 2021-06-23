import React, {useEffect, useState} from 'react';
import HsButton from "../../atom/button/HsButton";
import {useAxios} from "../../../utils/hooks/useAxios";
import {Badge, Menu, Popover} from "antd";
import HsSpinner from "../../atom/progress/HsSpinner";

const NotificationList = (list, loading) => {
    return (
        <>
            <HsSpinner loading={loading}>
                {list.map(item => (
                    <Menu>
                        <Menu.Item>
                            {item.contents}
                        </Menu.Item>
                    </Menu>
                ))}
            </HsSpinner>
        </>
    )
}

const TheHeaderNotification = () => {
    const {submit, loading} = useAxios({useModal: false});
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const config = {
            url: '/notices/count',
            method: 'get'
        }

        submit(config, (data) => {
            if (data && data.data.data > count)
                setCount(data && data.data.data);
        });
    }, [])

    useEffect(() => {
        if(clicked === true) getNotifications();
    }, [clicked])

    const getNotifications = () => {
        const config = {
            url: '/notices',
            method: 'get'
        }
        if (clicked)
            submit(config, (res) => {
                setClicked(!clicked);
                const data = res && res.data.data.content;
                setList(data.filter((item, index) => index < 5))
            })
    }


    return (
        <>
            <Popover
                title='알림센터'
                trigger='click'
                content={() => NotificationList(list, loading)}
                onVisibleChange={setClicked}
            >
                <Badge count={count}>
                    <HsButton
                        loading={loading}
                        type='text'
                        shape='circle'
                        icon='IoNotificationsOutline'
                    />
                </Badge>
            </Popover>
        </>
    );
};

export default TheHeaderNotification;