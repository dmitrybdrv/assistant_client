import {isErrorWithMessage, useThemeStyles, useToast} from 'src/common'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {useCurrentQuery, useLoginMutation} from 'src/services'
import {LoginArgsType} from 'src/types'
import {SignIn} from 'src/components'
import {Navigate} from 'react-router-dom'
import {PathConstant} from 'src/routes'

export function SignInPage() {
    
    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()
    const {data, isLoading} = useCurrentQuery()

    const login = async (data: LoginArgsType) => {

        try {
            await userLogin(data)
                .unwrap()
                .then((res) => {
                    const userName = res?.name ? res.name : 'User'
                    showToast(`Welcome 😀, ${userName}`, 'success')
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
    if(data) {
        return <Navigate to={PathConstant.PRIVATE_ROUTES.MAIN_PAGE}/>
    }
    return !isLoading && <section className={themeStyle}><SignIn onSubmit={login}/></section>
}