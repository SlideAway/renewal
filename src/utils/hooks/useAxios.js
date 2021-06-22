import {useCallback, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";

const useAxios = ({useModal=true, useLoading=false, useApi=true}) => {
    const [loading, setLoading] = useState(useLoading);
    const MySwal = withReactContent(Swal);

    const submit = useCallback((config, succHandler, failHandler) => {
        if (localStorage.getItem('token'))
            config.headers = {
                ...config.headers,
                'X-Auth-Token': localStorage.getItem('token')
            }
        if (useApi) config.url = `/api${config.url}`
        setLoading(true)
        axios(config)
            .then(data => {
                if (succHandler) succHandler(data)
            })
            .catch(error => {
                if (useModal !== false) {
                    MySwal.fire({
                        title: '정보처리에러',
                        text: `${error.response.status}`
                    })
                }
                if (failHandler) failHandler(error);
            })
            .finally(() => setLoading(false))
    }, [])

    return {loading, submit};
};

useAxios.defaultProps = {
    useModal: true,
    useApi: true,
    useLoading: false
}

useAxios.propTypes = {
    useModal: PropTypes.bool,
    useApi: PropTypes.bool,
    useLoading: PropTypes.bool
};
export default useAxios;

