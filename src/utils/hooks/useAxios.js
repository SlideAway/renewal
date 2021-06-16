import {useCallback, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";

const useAxios = (props={
    useModal:true,
    loading:false
}) => {
    const [loading, setLoading] = useState(props.loading);
    const MySwal = withReactContent(Swal);

    const submit = useCallback((config, succHandler, failHandler) => {
        if(localStorage.getItem('token'))
            config.headers = {
            ...config.headers,
            'X-Auth-Token': localStorage.getItem('token')
            }
        config.url = `/api${config.url}`
        setLoading(true)
        axios(config)
            .then(data => {
                setLoading(false)
                succHandler(data)
            })
            .catch(error => {
                setLoading(false)
                if(props && props.useModal !== false){
                    MySwal.fire({
                        title:'정보처리에러',
                        text:`${error.response.status}`
                    })
                }
                if(failHandler) failHandler(error);
            })
    }, [])

    return {loading, submit};
};

useAxios.defaultProps = {
    useModal:true
}

useAxios.propTypes = {
    props: {
        useModal:PropTypes.bool
    }
};
export default useAxios;

