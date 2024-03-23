import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Outlet} from "react-router-dom";
import {useThemeStyles} from "src/common";


export const Layout = () => {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])

    return <div className={themeStyle}><Outlet /></div>
}