import {CreateNewPassword, useToast} from "src/components";
import {PasswordType} from "src/types";
import {isErrorWithMessage} from "src/common";
import {useCreateNewPassMutation} from "src/services";
import {useNavigate, useParams} from "react-router-dom";
import {useActions} from "src/common/hooks/useActions.ts";
import {PathConstant} from "src/routes";

export const CreateNewPasswordPage = () => {

    const {showToast} = useToast()
    const [createNewPass] = useCreateNewPassMutation()
    const {token} = useParams<{ token: string }>()
    const {setToken} = useActions()
    const navigate = useNavigate()
    const onNewPasswordCreate = async (data: PasswordType) => {

        try {
            if (token)
                setToken({token})
                await createNewPass(data)
                    .unwrap()
                    .then((res) => {
                        showToast(res.message, 'success')
                        navigate(PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD)
                    })
                    .catch()
        }
        catch (e) {
            const mayBeError = isErrorWithMessage(e)

            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }
        }

    }

    return <CreateNewPassword onSubmit={onNewPasswordCreate}/>
}