import {useActions} from 'src/common/hooks/useActions.ts'
import s from './navbar.module.scss'
import {useLogoutMutation} from 'src/services'
import {isErrorWithMessage, useToast} from 'src/common'
//import {UserAvatar} from 'src/components/ui/avatar'

export function Navbar() {

    const {showToast} = useToast()
    const {clearUserData} = useActions()
    const [logout] = useLogoutMutation()


    const outHandler = async () => {
        try {
            await logout()
                .unwrap()
                .then((res) => {
                    clearUserData()
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

    return (
        <nav className={s.navbarContainer}>
            <div onClick={outHandler}>OOO</div>
        </nav>
    )
}