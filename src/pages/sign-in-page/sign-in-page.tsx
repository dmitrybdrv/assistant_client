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

            await userLogin(data)
                .unwrap()
                .then((res) =>  {
                    const userName = res?.name ? res.name : 'User'
                    showToast(`Welcome 😀, ${userName}`, 'success')
                })
                .catch()

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
            {/*{isLoading && <img src={loading} alt={'loader'} />}*/}
                <SignIn onSubmit={login}/>
        </section>
    )
    }

    //TODO раскоментировать лоадер. Создать визуализацию загрузки