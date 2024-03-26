import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useThemeStyles, useToast} from "src/common";
import {useRegisterMutation} from "src/services";
import {RegisterArgsType} from "src/types";
import {SignUp} from "src/components";
import {useNavigate} from "react-router-dom";
import {PathConstant} from "src/routes";


export function SignUpPage() {
    const navigate = useNavigate()
    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const [userRegister] = useRegisterMutation()
    const {showToast} = useToast()

    const register = async (data: RegisterArgsType) => {

        try {
            await userRegister(data)
                .unwrap()
                .then(() => {
                    showToast('Отлично, зарегистрированы😇! теперь войдите в аккаунт', 'success')
                    navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN)
                })
                .catch()
        } catch (e) {

            const mayBeError = isErrorWithMessage(e)
            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }

        }
    }


    return (
        <section className={themeStyle}>
            <SignUp onSubmit={register}/>
        </section>
    )
}