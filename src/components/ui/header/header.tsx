import s from './header.module.scss'
import {Navbar} from "./navbar";
import logo from '../../../assets/img/logo1.svg'
import _bp from "src/styles/boilerPlateTheme.module.scss";
import {useThemeStyles} from "src/common";
import {Switcher} from "src/components/ui/header/switcher";


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