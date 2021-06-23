import React from 'react';
import PropTypes from 'prop-types';
import HsDialog from "../../atom/dialog/HsDialog";
import {useForm} from "react-hook-form";
import HsFormCol from "../../mole/form/HsFormCol";

const ProfileForm = ({control, errors}) => {
    return (
    <>
        <HsFormCol
            control={control}
            errors={errors}
            item={{id: 'name', name: '사용자 이름', required: true}}
        />
        <HsFormCol
            control={control}
            errors={errors}
            item={{id: 'phone', name: '연락처', required: true}}
        />
    </>
    )
}

const ProfileDialog = ({show, setShow}) => {
    const {control, handleSubmit, errors, formState} = useForm();

    return (
        <HsDialog
            title='프로필 수정'
            show={show}
            bodyContent={<ProfileForm control={control} errors={errors}/>}
            setShow={setShow}
            formState={formState}
        />
    );
};

ProfileDialog.propTypes = {
    show:PropTypes.bool.isRequired,
    setShow:PropTypes.func.isRequired
};

export default ProfileDialog;