import React from 'react';
import SearchForm from "../../component/template/search/SearchForm";

const Users = () => {

    return (
        <>
            <SearchForm
                form={[
                    {id: 'userId', name: '사용자 ID'},
                    {id: 'userNm', name: '사용자 이름'},
                    {
                        id: 'roleCd', name: '권한', type: 'select',
                        required: false,
                        url: '/combo/custom/roleInfo',
                    },
                    {id: 'userId', name: '사용자 ID'},
                    {id: 'userNm', name: '사용자 이름'},
                    {
                        id: 'roleCd', name: '권한', type: 'select',
                        required: false,
                        url: '/combo/custom/roleInfo',
                    },
                    {id: 'userId', name: '사용자 ID'},
                    {id: 'userNm', name: '사용자 이름'},
                    {
                        id: 'roleCd', name: '권한', type: 'select',
                        required: false,
                        url: '/combo/custom/roleInfo',
                    },
                    {id: 'userId', name: '사용자 ID'},
                    {id: 'userNm', name: '사용자 이름'},
                    {
                        id: 'roleCd', name: '권한', type: 'select',
                        required: false,
                        url: '/combo/custom/roleInfo',
                    },
                ]}/>
            </>

    );
};

export default Users;

