import React, {useCallback, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/base.css';
import '@inovua/reactdatagrid-community/theme/amber-light.css';
import '@inovua/reactdatagrid-community/theme/blue-light.css';
import '@inovua/reactdatagrid-community/theme/default-light.css';
import '@inovua/reactdatagrid-community/theme/green-light.css';
import '@inovua/reactdatagrid-community/theme/pink-light.css';
import {DataGridSettings} from './DataGridSettings'
import HsSpinner from "../progress/HsSpinner";
import ContextPagination from "./component/atom/ContextPagination";
import _ from "lodash";

const {rowHeight, columnHeight, realColumnHeight} = DataGridSettings

const numberColumn = {
    name: 'index', header: 'No.', width: 80
}


// 컬럼 사전설정
const setColumns = (columns) => columns.map(item => {
    if (!item.width) item.defaultFlex = 1;
    return item;
});

// grid 데이터 사전설정
const setRows = (rows, pageInfo) => rows.map((item, index) => {
    if (!_.isEmpty(pageInfo)) {
        const page = pageInfo.number;
        const idx = index + 1;
        item.index = (page * pageInfo.size) + idx;
    }
    item.rowIndex = index;
    return item;
})

const DataGrid = props => {
    const {context, columns, onClick, check, index} = props;
    const {state, actions} = useContext(context);
    const {gridData, loading, pageRequest} = state;
    const {setPageRequest, setLoading} = actions
    const [height, setHeight] = useState(400);
    const [selected, setSelected] = useState({0: true})
    const [sortInfo, setSortInfo] = useState(null);

    useEffect(() => {
        columns.unshift(numberColumn);
    }, [])

    useEffect(() => {
        //데이터 세팅
        if (gridData && gridData.content) {
            setHeight((gridData.content.length * rowHeight) + realColumnHeight);
            setSelected({0: true})
            onClick(gridData.content[0]);
        }

        //정렬 효과 세팅
        // if (pageRequest && pageRequest.sort) {
        //     const [name, type] = pageRequest.sort.split(',');
        //     const tempSortInfo = {}
        //     switch (type) {
        //         case 'asc':
        //             tempSortInfo.dir = 1;
        //             break;
        //         case 'desc':
        //             tempSortInfo.dir = -1;
        //             break;
        //         default:
        //             break;
        //     }
        //     if (tempSortInfo.dir) {
        //         setSortInfo({
        //             ...tempSortInfo,
        //             name: name,
        //             id: name
        //         })
        //     } else {
        //         setSortInfo(null)
        //     }
        // }
    }, [gridData])

    useEffect(() => {
        return () => {
            let dir = '';
            let name = '';
            if (sortInfo) {
                name = sortInfo.name
                switch (sortInfo && sortInfo.dir) {
                    case -1:
                        dir = 'desc';
                        break;
                    case 1:
                        dir = 'asc';
                        break;
                    default:
                        break;
                }
            }

            const currentPageInfo = pageRequest && pageRequest.sort
            if ((currentPageInfo && currentPageInfo.split(',')[1]) !== dir) {
                setPageRequest({
                    ...pageRequest,
                    sort: `${name},${dir}`
                })
            } else setPageRequest({...pageRequest})
        }
    }, [sortInfo])

    // row 클릭
    const onRowSelect = useCallback((e) => {
        setSelected(e.rowIndex)
        onClick(e && e.data);
    }, [onClick])

    // 컬럼 클릭
    const onChangeSort = useCallback(e => {
        setSortInfo(e);
    }, [])

    if (gridData)
        return (
            <>
                <HsSpinner loading={loading}>
                    <ReactDataGrid
                        idProperty='rowIndex'
                        columns={setColumns(columns)}
                        dataSource={setRows(gridData && gridData.content ? gridData.content : [], gridData && gridData.page)}
                        onSortInfoChange={onChangeSort}
                        sortInfo={sortInfo}
                        rowHeight={rowHeight}
                        headerHeight={columnHeight}
                        showZebraRows={false}
                        style={{height: height}}
                        nativeScroll={false}
                        defaultSelected={selected}
                        // onSelectionChange={onRowSelect}
                        showColumnMenuSortOptions={false}
                        showColumnMenuLockOptions={false}
                        onRowClick={onRowSelect}
                    />
                    <ContextPagination context={context}/>
                </HsSpinner>
            </>
        );
    return <HsSpinner loading={loading}/>
};

DataGrid.defaultProps = {
    onClick: () => {
    },
    index: false,
    check: false,
    pagination: true
}

DataGrid.propTypes = {
    index: PropTypes.bool,
    check: PropTypes.bool,
    context: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        header: PropTypes.string,
        type: PropTypes.string,
    })).isRequired,
    onClick: PropTypes.func,
    pagination: PropTypes.bool
};

export default DataGrid;
