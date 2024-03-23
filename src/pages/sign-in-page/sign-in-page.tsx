import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useThemeStyles, useToast} from "src/common";
import {useLoginMutation} from "src/services";
import {LoginArgsType} from "src/types";
import {SignIn} from "src/components";


export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()

    const login = async (data: LoginArgsType) => {

        try {

            const result = await userLogin(data)
                .unwrap()
                .then((res) =>  {
                    console.log(res)
                    showToast('Welcome 😀', 'success')
                })
                .catch()
            console.log(result)

        } catch (e) {

            const mayBeError = isErrorWithMessage(e)

           if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
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