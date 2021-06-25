import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import {DataGridSettings} from "./DataGridSettings";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import HsSpinner from "../progress/HsSpinner";

const RootAgGrid = styled.div`
  width: 100%;
  .ag-theme-balham {
  @include ag-theme-balham((// use theme parameters where possible

    // Default border for cells. This can be used to specify the border-style and border-color properties e.g. \`dashed red\` but the border-width is fixed at 1px.
  cell-horizontal-border: solid ag-derived(secondary-border-color),));

    .ag-header-cell {
      // or write CSS selectors to make customisations beyond what the parameters support
      border-right: 1px solid ag-param(secondary-border-color);
    }
  }
`

const doNothing = () => {
}

const setColumns = (columns) => columns.map(item => {
    const obj = {};

    //이름 및 필드값 설정
    obj.field = item.name;
    obj.headerName = item.header;

    //너비 설정
    if (item.width) obj.width = item.width;
    else obj.flex = 1;

    // 정렬여부 설정
    obj.sortable = (item.sortable !== false);

    //에디터 타입 설정

    //렌더러 타입 설정

    // 컬럼 크기조절 설정
    obj.resizable = true;

    //틀고정 설정
    obj.pinned = item.pinned;

    return obj;
})

const ContextAgGrid = props => {
    const {context, columns, onClick, check, index, setColumnApi, setGridApi, pagination} = props;
    const {state, actions} = useContext(context);
    const {gridData, loading, pageRequest} = state;
    const {setPageRequest, setLoading} = actions
    const [height, setHeight] = useState(400);
    const [selected, setSelected] = useState({0: true})
    const [sortInfo, setSortInfo] = useState(null);

    const onChangeSort = (e) => {
        setLoading(true);
        const result = e.columnApi.getAllColumns().filter(item => !!item.getSort())
        if (result.length > 0) {
            setPageRequest({
                ...pageRequest,
                sort: `${result[0].colId},${result[0].getSort()}`
            })
        } else {
            setPageRequest({
                ...pageRequest,
                sort: ``
            })
        }
    }


    const onGridReady = (params) => {
        setGridApi(params.api);
        setColumnApi(params.columnApi);
    }

    return (
        <>
            <HsSpinner loading={loading}>
                <RootAgGrid className="ag-theme-balham">
                    <AgGridReact
                        onGridReady={onGridReady}
                        rowHeight={DataGridSettings.rowHeight}
                        headerHeight={DataGridSettings.columnHeight}
                        rowData={gridData && gridData.content}
                        onSortChanged={onChangeSort}
                        domLayout='autoHeight'
                    >
                        {setColumns(columns).map(item => (
                            <AgGridColumn
                                {...item}
                                comparator={doNothing}
                            />
                        ))}

                    </AgGridReact>
                </RootAgGrid>
            </HsSpinner>
        </>
    );
};

ContextAgGrid.defaultProps = {
    onClick: () => {
    },
    setGridApi: () => {
    },
    setColumnApi: () => {
    },
    index: false,
    check: false,
    pagination: true
}

ContextAgGrid.propTypes = {
    setGridApi: PropTypes.func,
    setColumnApi: PropTypes.func,
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

export default ContextAgGrid;
