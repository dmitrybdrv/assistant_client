import {isErrorWithMessage, useThemeStyles, useToast} from 'src/common'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {useRegisterMutation} from 'src/services'
import {useNavigate} from 'react-router-dom'
import {RegisterArgsType} from 'src/types'
import {PathConstant} from 'src/routes'
import {SignUp} from 'src/components'

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
                    navigate(PathConstant.PUBLIC_ROUTES.SUCCESS_SIGN_UP_PAGE)
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

    return <section className={themeStyle}> <SignUp onSubmit={register}/> </section>
}