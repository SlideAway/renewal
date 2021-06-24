import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Grid from "@toast-ui/react-grid";
import HsSpinner from "../progress/HsSpinner";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
    tr .tui-grid-cell-current-row {
      background-color:#dcedf5 !important;
    }
`

const gridOptionMap = {
    index:'rowNum',
    check:'checkbox'
}

const ToastGrid = (props) => {
    const {context, columns, gridController, onClick, check, index} = props;
    const {state} = useContext(context);
    const {gridData, loading} = state;
    const gridApi = useRef(null);
    const options = [];

    if(check) options.push(gridOptionMap.check);
    if(index) options.push(gridOptionMap.index);


    useEffect(() => {
        console.log(gridApi);
        if(gridController) gridController.current = gridApi.current;
        }, [gridApi])

    const onGridClick = (e) => {
        if(e.targetType === 'etc') {
            e.nativeEvent.preventDefault();
        } else {
            gridApi.current.gridInst.setSelectionRange({
                start: [e.rowKey, 0],
                end: [e.rowKey, gridApi.current.gridInst.getColumns().length - 1]
            })
            if(onClick) onClick(e.instance.getData()[e.rowKey])
        }
    }

    const cancelSelection = (e) => {
        e.instance.setSelectionRange({
            start:[e.range.column[0]]
        })
    }


    return (
        <>
            <HsSpinner loading={loading}>
            <StyledGrid
                columns={columns}
                data={gridData && gridData.content}
                rowHeight={30}
                minRowHeight={30}
                bodyHeight='auto'
                virtualScrolling={true}
                heightResizable={true}
                rowHeaders={options}
                ref={gridApi}
                draggable={false}
                onClick={onGridClick}
                selectionUnit='row'
                theme='clear'

            />
            </HsSpinner>
        </>
    );
};

ToastGrid.defaultProps = {
    gridController:null,
    onClick:() => {},
    index:false,
    check:false,
}

ToastGrid.propTypes = {
    index:PropTypes.bool,
    check:PropTypes.bool,
    context:PropTypes.object.isRequired,
    columns:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        header:PropTypes.string,
        type:PropTypes.string,
    })).isRequired,
    gridController:PropTypes.object,
    onClick:PropTypes.func
};

export default ToastGrid;