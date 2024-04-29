import {isErrorWithMessage, useThemeStyles, useToast} from 'src/common'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {useCurrentQuery, useLoginMutation} from 'src/services'
import {useNavigate} from 'react-router-dom'
import {LoginArgsType} from 'src/types'
import {PathConstant} from 'src/routes'
import {SignIn} from 'src/components'
import {useEffect} from 'react'

export function SignInPage() {

    const {data} = useCurrentQuery()
    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()
    const navigate = useNavigate()

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

    useEffect(() => {
        if (data) {
            navigate(PathConstant.PRIVATE_ROUTES.MAIN_PAGE)
        }
    }, [navigate, data])

    return <section className={themeStyle}> <SignIn onSubmit={login}/> </section>
}