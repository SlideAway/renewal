import React from 'react';
import PropTypes from 'prop-types';
import HsDialog from "../../atom/dialog/HsDialog";
import {useAxios} from "../../../utils/hooks/useAxios";
import HsDialogBody from "../../atom/dialog/HsDialogBody";
import HsFormRow from "../../mole/form/HsFormRow";
import {useForm} from "react-hook-form";
import HsDialogFooter from "../../atom/dialog/HsDialogFooter";
import {useAlert} from "../../../utils/hooks/useAlert";
import HsButton from "../../atom/button/HsButton";

const size = {
    xl:24,
    lg:24,
    md:24,
    sm:24,
    xs:24
}

const PasswordDialog = ({userInfo, show, setShow}) => {
    const {submit, loading} = useAxios()
    const {control,handleSubmit,errors, formState, reset} = useForm()
    const {showAlert} = useAlert();

    const doConfirm = (data) => {
        showAlert(
            'info',
            '저장하시겠습니까?',
            () => doSave(data));
    }

    const doSave = (data) => {
        delete data['newPassword2'];
        const config = {
            url:`/users/${userInfo && userInfo.aud}/self-password`,
            method:'patch',
            data:data
        }

        submit(config, () => {
            reset()
            setShow(false)
        }, () => {
            showAlert('error', '기존 비밀번호가 틀립니다. ')
        })
    }

    return (
        <HsDialog
            show={show}
            setShow={setShow}
            title='비밀번호 변경'
            loading={loading}
        >
            <HsDialogBody>
                <HsFormRow
                    errors={errors}
                    control={control}
                    items={[
                        {id:'userPw', name:'기존 비밀번호', type:'password', required:true, size:size},
                        {id:'newPassword', name:'신규 비밀번호', type:'password', required:true, size:size},
                        {id:'newPassword2', name:'신규 비밀번호 확인', type:'password', required:true, size:size}
                    ]}
                />
            </HsDialogBody>
            <HsDialogFooter setShow={setShow}>
                <HsButton
                    loading={loading}
                    disabled={!formState.isDirty}
                    onClick={handleSubmit(doConfirm)}>
                    저장
                </HsButton>
            </HsDialogFooter>
        </HsDialog>
    );
};

PasswordDialog.propTypes = {
    show:PropTypes.bool.isRequired,
    setShow:PropTypes.func.isRequired,
    userInfo:PropTypes.object.isRequired
};

export default PasswordDialog;