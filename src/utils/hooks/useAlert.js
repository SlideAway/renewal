import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {useCallback} from "react";

const alertType = {
    error:'정보처리에러',
    info:'정보처리알림'
}


export const useAlert = () => {
    const alert = withReactContent(Swal);
    const showAlert = useCallback((type, content, confirmEvent) => {
        alert.fire({
            title:alertType[type],
            text:content,
            showCloseButton:true,
            showCancelButton:true,
            cancelButtonText:'닫기',
            allowOutsideClick:false,
            allowEscapeKey:true,
            allowEnterKey:true,
            showConfirmButton:!!confirmEvent,
            confirmButtonText:'확인',
            preConfirm() {
                if(confirmEvent) confirmEvent();
            }


            // footer:footer
        })
    }, [])

    return {showAlert};
}
