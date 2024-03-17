import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useThemeStyles, useToast} from "../../common";
import {SignIn} from "../../components";
import {LoginArgsType} from "../../types";
import {useLoginMutation} from "../../services/auth";
import {useState} from "react";

export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()
    const [error, setError] = useState('')


    const login = async (data: LoginArgsType) => {

        try {

            const result = await userLogin(data)
                .unwrap()
                .then(() =>  showToast('Welcome man', 'success'))
                .catch()
            console.log(result)

        } catch (e) {

            const mayBeError = isErrorWithMessage(e)

            if (mayBeError) {
                setError(e.data.message)
                console.log(error)
                showToast(error, 'error')
            } else {
                showToast('Some error', 'error')
            }

        }

    }

    return (
        <section className={themeStyle}>
            <SignIn onSubmit={login}/>
        </section>
    )
    }

//TODO Пофиксить белое поле ввода при выборе логина из предложенных на странице логинизации