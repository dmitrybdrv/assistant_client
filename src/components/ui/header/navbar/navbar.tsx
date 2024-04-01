import s from './navbar.module.scss'
import {Button} from "../../button";
import {useAppDispatch, useToast} from "src/common";
import {logout} from "src/features";


export function Navbar() {

    const dispatch = useAppDispatch()
    const {showToast} = useToast()
    const outHandler = () => {
        try {
            dispatch(logout())
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