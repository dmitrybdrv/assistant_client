import _bp from '../../styles/boilerPlateTheme.module.scss'
import {useThemeStyles} from "../../common";
import {SignIn} from "../../components";

export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])

    return (
        <section className={themeStyle}>
            <SignIn/>
        </section>
    )
}