import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import HsDialog from "../../atom/dialog/HsDialog";
import {useForm} from "react-hook-form";
import HsButton from "../../atom/button/HsButton";
import HeaderContext from "../../../utils/contexts/HeaderContext";
import jwtDecode from "jwt-decode";
import useAxios from "../../../utils/hooks/useAxios";
import HsSpinner from "../../atom/progress/HsSpinner";
import HsFormRow from "../../mole/form/HsFormRow";
import {useAlert} from "../../../utils/hooks/useAlert";

const ProfileForm = ({control, errors}) => {
    return (
        <>
            <HsFormRow errors={errors}
                       control={control}
                       items={[
                           {id: 'userId', name: '사용자 ID', disabled: true},
                           {id: 'userNm', name: '사용자 이름', required: true},
                           {id: 'userTel', name: '연락처'},
                           {id: 'userEmail', name: '이메일'},
                           {id: 'roleCd', type: 'hidden'},
                           {id: 'userSeq', type: 'hidden'},
                           {id: 'ipChk', type: 'hidden'},
                           {id: 'ipAddr', type: 'hidden'},
                           {id: 'userDesc', type: 'hidden'},
                       ]}/>
        </>
    )
}

const ProfileDialog = ({show, setShow}) => {
    const {control, handleSubmit, errors, formState, reset} = useForm();
    const {submit, loading} = useAxios()
    const {showAlert} = useAlert();
    const {state} = useContext(HeaderContext);
    const {token} = state;
    const userInfo = jwtDecode(token);

    const doConfirm = (data) => {
        showAlert(
            'info',
            '저장하시겠습니까?',
            () => doSave(data)
        );
    }


    const doSave = (data) => {
        const config = {
            url: `/users/${userInfo.aud}`,
            method: 'put',
            data: data
        }
        submit(config, (res) => {
            reset(res && res.data);
            setShow(false);
        })
    }

    useEffect(() => {
        if (show) {
            const config = {
                url: `/users/${userInfo && userInfo.aud}`,
                method: 'get'
            }
            submit(config, (res) => {
                reset(res && res.data.data);
            })

        }
    }, [show])


    return (
        <HsDialog
            title='프로필 수정'
            show={show}
            bodyContent={
                <HsSpinner loading={loading}>
                    <ProfileForm control={control} errors={errors}/>
                </HsSpinner>}
            footerContent={
                <HsButton
                    onClick={handleSubmit(doConfirm)}
                    disabled={!formState.isDirty}
                    loading={loading}
                >
                    저장
                </HsButton>}
            setShow={setShow}
        />
    );
};

ProfileDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired
};

export default ProfileDialog;