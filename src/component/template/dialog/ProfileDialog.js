import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import HsDialog from "../../atom/dialog/HsDialog";
import {useForm} from "react-hook-form";
import HsButton from "../../atom/button/HsButton";
import {useAxios} from "../../../utils/hooks/useAxios";
import HsFormRow from "../../mole/form/HsFormRow";
import {useAlert} from "../../../utils/hooks/useAlert";
import HsDialogBody from "../../atom/dialog/HsDialogBody";
import HsDialogFooter from "../../atom/dialog/HsDialogFooter";

const size = {
    xl:24,
    lg:24,
    md:24,
    sm:24,
    xs:24
}

const ProfileDialog = ({userInfo, show, setShow}) => {
    const {control, handleSubmit, errors, formState, reset} = useForm();
    const {submit, loading} = useAxios()
    const {showAlert} = useAlert();

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
            setShow={setShow}
            loading={loading}
        >
            <HsDialogBody>
                <HsFormRow errors={errors}
                           control={control}
                           items={[
                               {id: 'userId', name: '사용자 ID', disabled: true, size:size},
                               {id: 'userNm', name: '사용자 이름', required: true, size:size},
                               {id: 'userTel', name: '연락처', size:size},
                               {id: 'userEmail', name: '이메일', size:size},
                               {id: 'roleCd', type: 'hidden'},
                               {id: 'userSeq', type: 'hidden'},
                               {id: 'ipChk', type: 'hidden'},
                               {id: 'ipAddr', type: 'hidden'},
                               {id: 'userDesc', type: 'hidden'},
                           ]}/>
            </HsDialogBody>
            <HsDialogFooter setShow={setShow}>
                <HsButton
                    onClick={handleSubmit(doConfirm)}
                    disabled={!formState.isDirty}
                    loading={loading}
                >
                    저장
                </HsButton>
            </HsDialogFooter>
        </HsDialog>
    );
};

ProfileDialog.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired
};

export default ProfileDialog;