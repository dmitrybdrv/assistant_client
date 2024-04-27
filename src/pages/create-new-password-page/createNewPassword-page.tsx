import {isErrorWithMessage, useToast} from 'src/common'
import {useNavigate, useParams} from 'react-router-dom'
import {useCreateNewPassMutation} from 'src/services'
import {CreateNewPassword} from 'src/components'
import {PathConstant} from 'src/routes'
import {PasswordType} from 'src/types'

export const CreateNewPasswordPage = () => {

    const {showToast} = useToast()
    const [createNewPass] = useCreateNewPassMutation()
    const {token} = useParams<{ token: string }>()
    const navigate = useNavigate()
    const onNewPasswordCreate = async (data: PasswordType) => {

        try {
            if (token)
                localStorage.setItem('token', token)
            await createNewPass(data)
                .unwrap()
                .then(() => {
                    navigate(PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD_PAGE)
                })
            localStorage.removeItem('token')
        } catch (e) {
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