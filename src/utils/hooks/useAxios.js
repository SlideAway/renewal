import {useCallback, useState} from 'react';
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";
import _ from 'lodash';

const convertFormData = (obj) => {
    const formData = new FormData();
    Object.keys(obj).forEach(item => formData.append(item, obj[item]));
    return formData;
}

const appendToken = (config) => {
    if (localStorage.getItem('token'))
        config.headers = {
            ...config.headers,
            'X-Auth-Token': localStorage.getItem('token')
        }
}

const appendApi = (config) => {
    config.url = `/api${config.url}`
}

const useAxios = ({useModal = true, useLoading = false, useApi = true} = {}) => {
    const [loading, setLoading] = useState(useLoading);
    const MySwal = withReactContent(Swal);

    const submit = useCallback((config, succHandler, failHandler) => {
        // 전처리 시작
        // 토큰 추가
        appendToken(config);
        // api 문자열 추가
        if (useApi) appendApi(config)
        // data를 formData로 변환
        if (_.isPlainObject(config.data)) config.data = convertFormData(config.data);

        setLoading(true)

        // 요청 시작
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

