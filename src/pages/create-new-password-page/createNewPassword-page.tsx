import {CreateNewPassword, useToast} from "src/components";
import {PasswordType} from "src/types";
import {isErrorWithMessage} from "src/common";

export const CreateNewPasswordPage = () => {

    const {showToast} = useToast()
    const onCreatePass = (data: PasswordType) => {

        try {
            console.log(data)

        } catch (e) {
            const mayBeError = isErrorWithMessage(e)

            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }
        }

    }
    return <CreateNewPassword onSubmit={onCreatePass}/>
}