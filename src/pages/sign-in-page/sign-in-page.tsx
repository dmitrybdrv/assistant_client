import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useThemeStyles, useToast} from "../../common";
import {SignIn} from "../../components";
import {LoginArgsType} from "../../types";
import {useCurrentQuery, useLoginMutation} from "../../services/auth";

export function SignInPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const {showToast} = useToast()
    const [userLogin] = useLoginMutation()
    const {data, isLoading} = useCurrentQuery('123123123123')

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

    console.log(data)


    return (
        <section className={themeStyle}>
                {isLoading &&
                    <div style={{position: 'absolute', left: '48%', top: '15%'}}>Loading...</div>
                }
                <SignIn onSubmit={login}/>
        </section>
    )
    }

//TODO Пофиксить белое поле ввода при выборе логина из предложенных на странице логинизации