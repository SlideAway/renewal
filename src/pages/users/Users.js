import React, {useEffect, useRef} from 'react';
import ContextSearchForm from "../../component/template/search/ContextSearchForm";
import ToastGrid from "../../component/atom/grid/ToastGrid";
import ContentContext from "../../utils/contexts/ContentContext";
import HsCard from "../../component/atom/card/HsCard";
import HsButton from "../../component/atom/button/HsButton";

const columns = [
    {name: 'userId', header: '사용자 ID'},
    {name: 'userNm', header: '사용자 이름'},
    {name: 'roleNm', header: '사용자 권한'},
    {name: 'ipChkNm', header:'IP검사 여부'},
    {name: 'ipAddr', header:'IP주소'},
    {name: 'userDesc', header:'비고'}
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



const Users = () => {
    const gridApi = useRef(null);

    useEffect(() => {
        console.log(gridApi)
    }, [gridApi])

    const optionButtons = [
        <HsButton type='text' block={true}>추가</HsButton>,
    ]

    return (
        <>
            <HsCard>
                <ContextSearchForm
                    url='/users'
                    options={optionButtons}
                    context={ContentContext}
                    form={searchFilter}/>
                <ToastGrid
                    context={ContentContext}
                    gridController={gridApi}
                    columns={columns}/>
            </HsCard>
        </>

    );
};

export default Users;

