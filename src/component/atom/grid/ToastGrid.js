import React, {useContext, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import Grid from "@toast-ui/react-grid";
import HsSpinner from "../progress/HsSpinner";

const ToastGrid = (props) => {
    const {context, columns, gridController, onClick} = props;
    const {state} = useContext(context);
    const {gridData, loading} = state;
    const gridApi = useRef(null);

    useEffect(() => {
        if(gridController) gridController.current = gridApi.current;
        }, [gridApi])

    return (
        <>
            <HsSpinner loading={loading}>
            <Grid
                columns={columns}
                data={gridData && gridData.content}
                rowHeight={30}
                minRowHeight={30}
                bodyHeight={315}
                virtualScrolling={true}
                heightResizable={true}
                rowHeaders={['rowNum', 'checkbox']}
                ref={gridApi}
                onClick={() => {if(onClick) onClick()}}
            />
            </HsSpinner>
        </>
    );
};

ToastGrid.defaultProps = {
    gridController:null,
    onClick:() => {}
}

ToastGrid.propTypes = {
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