import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Grid from "@toast-ui/react-grid";

const ToastGrid = (props) => {
    const {context, columns, data, gridController} = props;
    const {state} = useContext(context);
    const {gridData} = state;
    
    return (
        <>
            <Grid
                columns={columns}
                data={gridData && gridData.content}
                rowHeight={25}
                minRowHeight={25}
                bodyHeight={200}
                virtualScrolling={true}
                heightResizable={true}
                rowHeaders={['rowNum']}
            />
        </>
    );
};

ToastGrid.propTypes = {
    context:PropTypes.object.isRequired,
    columns:PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string,
        header:PropTypes.string
    }))
};

export default ToastGrid;