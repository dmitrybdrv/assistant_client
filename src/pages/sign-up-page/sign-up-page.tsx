import _bp from '../../styles/boilerPlateTheme.module.scss'
import {isErrorWithMessage, useThemeStyles, useToast} from "src/common";
import {useRegisterMutation} from "src/services";
import {RegisterArgsType} from "src/types";
import {SignUp} from "src/components";


export function SignUpPage() {

    const {themeStyle} = useThemeStyles(_bp, [_bp.formContainer])
    const [userRegister] = useRegisterMutation()
    const {showToast} = useToast()

    const register = async (data: RegisterArgsType) => {

        try {

            const result = await userRegister(data)
                .unwrap()
                .then((res) =>  {
                    console.log(res)
                    showToast('Great 😇', 'success')
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
            <SignUp onSubmit={register}/>
        </section>
    )
}