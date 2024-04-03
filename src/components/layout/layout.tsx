import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Outlet} from "react-router-dom";
import {useAppSelector, useThemeStyles} from "src/common";
import {appLoadingSelectors} from "src/features";
import {Loader} from "src/components";


export const Layout = () => {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const isAppLoading = useAppSelector(appLoadingSelectors)

    return (
        <div className={themeStyle}>
            {isAppLoading === 'loading' && <Loader/>}
            <Outlet/>
        </div>
    )
}