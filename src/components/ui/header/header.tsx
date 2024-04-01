import s from './header.module.scss'
import {Navbar} from "./navbar";
import logo from '../../../assets/img/logo1.svg'
import _bp from "src/styles/boilerPlateTheme.module.scss";
import {useAppSelector, useThemeStyles} from "src/common";
import {Switcher} from "src/components/ui/header/switcher";
import {selectUser} from "src/features";


export function Header() {

    const {themeStyle} = useThemeStyles(_bp, [s.headerContainer])
    const user = useAppSelector(selectUser)

    return (
        <header className={themeStyle}>
            <div className={s.headerLeftSide}>
                <img className={s.headerLogo} src={logo} alt="logo"/>
                <Switcher/>
            </div>
            {user?.token && <Navbar/>}
        </header>
    )
}