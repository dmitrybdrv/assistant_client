import {isErrorWithMessage, useThemeStyles, useToast} from 'src/common'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {useLoginMutation} from 'src/services'
import {LoginArgsType} from 'src/types'
import {SignIn} from 'src/components'
import {useAuthRedirect} from 'src/common/hooks/useAuthRedirect.ts'
import {PathConstant} from 'src/routes'


export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()


    const login = async (data: LoginArgsType) => {

        try {
            await userLogin(data)
                .unwrap()
                .then((res) => {
                    showToast(res.message, 'success')
                })

        } catch (e) {
            const mayBeError = isErrorWithMessage(e)
            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }
        }

    }

     useAuthRedirect(PathConstant.PRIVATE_ROUTES.MAIN_PAGE)

    return <section className={themeStyle}><SignIn onSubmit={login}/></section>
}