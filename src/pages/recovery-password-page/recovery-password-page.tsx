import {isErrorWithMessage, useActions, useToast} from 'src/common'
import {useRecoverPasswordMutation} from 'src/services'
import {RecoveryPassword} from 'src/components'
import {useNavigate} from 'react-router-dom'
import {PathConstant} from 'src/routes'
import {EmailType} from 'src/types'

export const RecoveryPasswordPage = () =>{
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
                navigate(PathConstant.PUBLIC_ROUTES.CHECK_EMAIL_PAGE)

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

    return <RecoveryPassword onSubmit={onSubmit}/>
}