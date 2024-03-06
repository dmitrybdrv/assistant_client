import {useEffect} from "react";
import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isRestrictedRoute, useThemeStyles} from "../../common";
import {Outlet, useNavigate} from "react-router-dom";
import {PathConstant} from "../../routes";
/*
Token - временный вариант для версий логинизации. Далее получение через useParams()
 */
export const token: string = ''
/*
Компонет возвращающий контент приложения в зависимости от token
 */
export const Layout = () => {
    const navigate = useNavigate();
    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])

    useEffect(() => {
        if (token && isRestrictedRoute(location.pathname)) {
            navigate(PathConstant.PRIVATE_ROUTES);
        }
    }, [navigate, token, location]);

    return <div className={themeStyle}><Outlet /></div>
}