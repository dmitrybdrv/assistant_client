import _bp from '../../styles/boilerPlateTheme.module.scss'
import {useThemeStyles} from "../../common";
import {SignUp} from "../../components";

export function SignUpPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])

    return (
        <section className={themeStyle}>
            <SignUp/>
        </section>
    )
}