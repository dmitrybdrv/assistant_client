import s from './header.module.scss'
import {Navbar} from "./navbar";
import logo from '../../../assets/img/logo1.svg'
import _bp from "../../../styles/boilerPlateTheme.module.scss";
import {Switcher} from "./switcher";
import {useThemeStyles} from "../../../common";

export function Header() {

    const {themeStyle} = useThemeStyles(_bp, [s.headerContainer])

    return (
        <header className={themeStyle}>
            <div className={s.headerLeftSide}>
                <img className={s.headerLogo} src={logo} alt="logo"/>
                <Switcher/>
            </div>
            <Navbar/>
        </header>
    )
}