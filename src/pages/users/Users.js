import React, {useContext} from 'react';
import ContextSearchForm from "../../component/template/search/ContextSearchForm";
import ToastGrid from "../../component/atom/grid/ToastGrid";
import ContentContext from "../../utils/contexts/ContentContext";
import HsCard from "../../component/atom/card/HsCard";

const columns = [
    {name: 'userId', header: '사용자 ID'},
    {name: 'userNm', header: '사용자 이름'},
    {name: 'roleNm', header: '사용자 권한'},
    {name: 'ipChkNm', header:'IP검사 여부'},
    {name: 'ipAddr', header:'IP주소'},
    {name: 'userDesc', header:'비고'}
]

const Users = () => {

    return (
        <>
            <HsCard>
                <ContextSearchForm
                    url='/users'
                    context={ContentContext}
                    form={[
                        {id: 'userId', name: '사용자 ID'},
                        {id: 'userNm', name: '사용자 이름'},
                        {
                            id: 'roleCd', name: '권한', type: 'select',
                            required: false,
                            url: '/combo/custom/roleInfo',
                        },
                    ]}/>
                <ToastGrid context={ContentContext} columns={columns}/>
            </HsCard>
        </>

    );
};

export default Users;

