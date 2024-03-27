import s from './navbar.module.scss'
import {Link} from "react-router-dom";
import {Button} from "../../button";
import {PathConstant} from "src/routes";
import {useAppDispatch, useAppSelector, useToast} from "src/common";
import {logout, selectUser} from "src/features";


export function Navbar() {

    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)
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
        {
            !user?.id
                ? <Button>
                    <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>
                        LogIN
                    </Link>
                </Button>
                :
                <Button onClick={outHandler}>
                    LogOUT
                </Button>

        }

    </nav>
}