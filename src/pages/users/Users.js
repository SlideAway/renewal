import React, {useEffect, useRef, useState} from 'react';
import ContextSearchForm from "../../component/template/search/ContextSearchForm";
import ToastGrid from "../../component/atom/grid/ToastGrid";
import ContentContext from "../../utils/contexts/ContentContext";
import HsCard from "../../component/atom/card/HsCard";
import HsButton from "../../component/atom/button/HsButton";
import HsRow from "../../component/atom/layout/HsRow";
import HsCol from "../../component/atom/layout/HsCol";
import HsTab from "../../component/atom/layout/HsTab";
import HsCollapse from "../../component/atom/layout/HsCollapse";
import UserInfo from "./UsersTab/UserInfo";
import UserConnHis from "./UsersTab/UserConnHis";

const columns = [
    {name: 'userId', header: '사용자 ID'},
    {name: 'userNm', header: '사용자 이름'},
    {name: 'roleNm', header: '사용자 권한'},
    {name: 'ipChkNm', header: 'IP검사 여부'},
    {name: 'ipAddr', header: 'IP주소'},
    {name: 'userDesc', header: '비고'}
]

const searchFilter = [
    {id: 'userId', name: '사용자 ID'},
    {id: 'userNm', name: '사용자 이름'},
    {
        id: 'roleCd', name: '권한', type: 'select',
        required: false,
        url: '/combo/custom/roleInfo',
    },
]

const TabElement = [
    {element:<UserInfo/>, title:'사용자 정보'},
    {element:<UserConnHis/>, title:'사용자 접속 기록'}
]


const Users = () => {
    const gridApi = useRef(null);
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        console.log(gridApi)
    }, [gridApi])


    const addUser = () => {
        setCollapse(true)
    }


    const optionButtons = [
        <HsButton type='text' block={true} onClick={addUser}>추가</HsButton>,
    ]

    const clickUser = (data) => {
        setCollapse(true)
        console.log(data)
    }

    return (
        <>
            <HsCard>
                <HsRow>
                    <HsCol xs={24}>
                        <ContextSearchForm
                            url='/users'
                            options={optionButtons}
                            context={ContentContext}
                            form={searchFilter}/>
                    </HsCol>
                </HsRow>
                <HsRow>
                    <HsCol xs={24}>
                        <ToastGrid
                            index
                            context={ContentContext}
                            gridController={gridApi}
                            columns={columns}
                            onClick={clickUser}
                        />
                    </HsCol>
                </HsRow>
                <HsRow>
                    <HsCollapse isOpen={collapse}>
                        <HsTab tabData={TabElement}/>
                    </HsCollapse>
                </HsRow>
            </HsCard>
        </>

    );
};

export default Users;

