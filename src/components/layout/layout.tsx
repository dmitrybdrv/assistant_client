import _bp from '../../styles/boilerPlateTheme.module.scss'
import {useThemeStyles} from "../../common";
import {Outlet} from "react-router-dom";


export const Layout = () => {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])

    return <div className={themeStyle}><Outlet /></div>
}