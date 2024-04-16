import {CreateNewPassword, useToast} from "src/components";
import {PasswordType} from "src/types";
import {isErrorWithMessage} from "src/common";
import {useCreateNewPassMutation} from "src/services";
//import {useParams} from "react-router-dom";

export const CreateNewPasswordPage = () => {

    const {showToast} = useToast()
    const [createNewPass] = useCreateNewPassMutation()
    //const {token} = useParams()

    const onNewPasswordCreate = async (data: PasswordType) => {

        try {

            await createNewPass(data)
                    .unwrap()
                    .then((res) => {
                        //showToast(res.message, 'success')
                        console.log(res)
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
    return <CreateNewPassword onSubmit={onNewPasswordCreate}/>
}