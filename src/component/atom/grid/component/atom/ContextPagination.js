import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Pagination} from "antd";
import HsRow from "../../../layout/HsRow";
import HsCol from "../../../layout/HsCol";

const ContextPagination = props => {
    const {context} = props;
    const {actions, state} = useContext(context);
    const {gridData, pageRequest} = state;
    const {page} = gridData;
    const {setPageRequest, setLoading} = actions;

    const showTotal = (number) => `총 데이터 수 : ${number}`

    const onChange = (page, size) => {
        setLoading(true)
        page--
        setPageRequest({
            ...pageRequest,
            page: page,
            size: size
        })
    }

    return (
        <>
            <HsRow style={{marginTop: '10px'}} justify='center'>
                <HsCol>
                    <Pagination
                        showQuickJumper
                        showSizeChanger
                        current={Number.isInteger(page && page.number) ?
                            (page && page.number) + 1 :
                            1}
                        pageSize={page && page.size ? page && page.size : 10}
                        total={page && page.totalElements}
                        onChange={onChange}
                        showTotal={showTotal}
                    />
                </HsCol>
            </HsRow>
        </>
    );
};

ContextPagination.propTypes = {
    context: PropTypes.object.isRequired
};

export default ContextPagination;
