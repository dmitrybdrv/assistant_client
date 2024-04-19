import {ForgotPassword, useToast} from "src/components";
import {useNavigate} from "react-router-dom";
import {EmailType} from "src/types";
import {PathConstant} from "src/routes";
import {isErrorWithMessage, useActions} from "src/common";
import {useRecoverPasswordMutation} from "src/services";

export const ForgotPasswordPage = () =>{
    const navigate = useNavigate()
    const {setEmail} = useActions()
    const [recoverPassword] = useRecoverPasswordMutation()
    const {showToast} = useToast()

    const onSubmit = async (data: EmailType) => {

        try {
                await recoverPassword(data)
                    .unwrap()
                    .then(() => {
                        setEmail(data.email)
                    })
                    .catch()
                navigate(PathConstant.PUBLIC_ROUTES.CHECK_EMAIL)

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

    return <ForgotPassword onSubmit={onSubmit}/>
}