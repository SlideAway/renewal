import React, {useContext} from 'react';
import SearchForm from "../../component/template/search/SearchForm";
import ToastGrid from "../../component/atom/grid/ToastGrid";
import ContentContext from "../../utils/contexts/ContentContext";

const columns = [
    {name:'userId', header:'사용자 ID'},
    {name:'userNm', header:'사용자 이름'},
    {name:'roleCd', header:'사용자 권한'},
]

const Users = () => {
    const {state} = useContext(ContentContext);
    const {gridData} = state;

    return (
        <>
            <SearchForm
                url='/users'
                form={[
                    {id: 'userId', name: '사용자 ID'},
                    {id: 'userNm', name: '사용자 이름'},
                    {
                        id: 'roleCd', name: '권한', type: 'select',
                        required: false,
                        url: '/combo/custom/roleInfo',
                    },
                ]}/>
            <ToastGrid context={ContentContext} data={gridData} columns={columns}/>
            </>

    );
};

export default Users;

