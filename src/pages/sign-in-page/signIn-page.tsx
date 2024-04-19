import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useAppSelector, useThemeStyles} from "src/common";
import {useLoginMutation} from "src/services";
import {LoginArgsType} from "src/types";
import {SignIn, useToast} from "src/components";
import {PathConstant} from "src/routes";
import {useNavigate} from "react-router-dom";
import {selectUser} from "src/features";
import {useEffect} from "react";

export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()
    const navigate = useNavigate()
    const user = useAppSelector(selectUser)

    const login = async (data: LoginArgsType) => {

        try {
            await userLogin(data)
                .unwrap()
                .then((res) => {
                    const userName = res?.name ? res.name : 'User'
                    showToast(`Welcome 😀, ${userName}`, 'success')
                })
                .catch()

        }
        catch (e) {
            const mayBeError = isErrorWithMessage(e)
            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }
        }

    }

    useEffect(() => {
        if (user?.token) {
            navigate(PathConstant.PRIVATE_ROUTES.HOME)
        }
    }, [navigate, user])

    return <section className={themeStyle}> <SignIn onSubmit={login}/> </section>
}