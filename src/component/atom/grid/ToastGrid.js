import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Grid from "@toast-ui/react-grid";

const ToastGrid = (props) => {
    const {context, columns, data} = props;
    console.log(data.content);
    return (
        <>
            <Grid
                columns={columns}
                data={data && data.content}
                rowHeight={25}
                bodyHeight={100}
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