import s from './navbar.module.scss'
import {Link} from "react-router-dom";
import {Button} from "../../button";
import {PathConstant} from "src/routes";


export function Navbar() {
    return <nav className={s.navbarContainer}>
        <Button>
            <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>Log in</Link>
        </Button>
    </nav>
}