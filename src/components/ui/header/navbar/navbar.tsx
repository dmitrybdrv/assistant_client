import {useActions} from 'src/common/hooks/useActions.ts'
import s from './navbar.module.scss'
import {Button} from '../../button'
import {useToast} from 'src/common'

export function Navbar() {

    const {showToast} = useToast()
    const {logout} = useActions()

    const outHandler = () => {
        try {
            logout()
            showToast('Bye!!!', 'success')
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