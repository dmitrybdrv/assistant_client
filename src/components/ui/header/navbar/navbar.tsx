import {useActions} from 'src/common/hooks/useActions.ts'
import s from './navbar.module.scss'
import {Button} from '../../button'
import {useToast} from 'src/common'
import {useLogoutMutation} from 'src/services'

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
            console.log(e)
        }
    }

    return <nav className={s.navbarContainer}>
                <Button onClick={outHandler}>
                    LogOUT
                </Button>
    </nav>
}