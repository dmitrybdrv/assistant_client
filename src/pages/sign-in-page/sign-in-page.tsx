import _bp from '../../styles/boilerPlateTheme.module.scss'
import {useThemeStyles} from "../../common";
import {SignIn, token} from "../../components";
import {LoginArgs, useLoginMutation} from "../../services/auth";
import {useEffect} from "react";
import {PathConstant} from "../../routes";
import {useNavigate} from "react-router-dom";

export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const [login] = useLoginMutation()
    const navigate = useNavigate();
    const onLogin = (data: LoginArgs) => {
        login(data)
            .unwrap()
            .then(() => {console.log('YEEEE')})
            .catch()
    }

    useEffect(() => {
        if (token) {
            navigate(PathConstant.PRIVATE_ROUTES.HOME)
        }
    }, [navigate])

    return (
        <section className={themeStyle}>
            <SignIn onSubmit={onLogin}/>
        </section>
    )
}