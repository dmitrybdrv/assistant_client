import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import clsx from "clsx";
import {Link, useNavigate} from "react-router-dom";
import {EmailType} from "src/types";
import {emailSchema, isErrorWithMessage, useAppDispatch, useToast} from "src/common";
import {PathConstant} from "src/routes";
import {Button, Card, TextField, Typography} from "src/components";
import {setEmail} from "src/features";
import {useRecoverPasswordMutation} from "src/services";

/*
Форма сброса пароля на указанную пользователем почту
 */
export const ForgotPassword = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const typographyStyle = clsx(_bp.footnote, _bp.footnoteExtra)
    const [recoverPassword] = useRecoverPasswordMutation()
    const {showToast} = useToast()

    const {formState: {errors}, handleSubmit, register} = useForm<EmailType>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = async (data: EmailType) => {
        try {
            if (!errors.email) {
                await recoverPassword(data)
                    .unwrap()
                    .then((res) => {
                        dispatch(setEmail(data.email))
                        showToast(res.message, 'success')
                    })
                    .catch()

                navigate(PathConstant.PUBLIC_ROUTES.CHECK_EMAIL)
            }
        }
        catch (e) {
            const mayBeError = isErrorWithMessage(e)
            if (mayBeError) {
                showToast(e.data.message, 'error')
            } else {
                showToast('Что-то пошло не так 😬', 'error')
            }
        }

    };

    return (
        <Card className={_bp.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <Typography variant={'large'} className={_bp.header}>
                    Forgot your password?
                </Typography>

                <TextField
                    {...register('email')}
                    label={'Email'}
                    error={errors.email}
                />

                <Typography variant={'body2'} className={typographyStyle}>
                    Enter your email address and we will send you further instructions
                </Typography>

                <Button type={'submit'} className={_bp.btn}>
                    <Typography variant={'subtitle2'}>Send instructions</Typography>
                </Button>

                <Typography variant={'body2'} className={_bp.footnote}>
                    Did you remember your password?
                </Typography>

                <Typography variant={'link1'} href={'#'}>
                    <Link className={_bp.linkWrapper} to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>
                        Try logging in
                    </Link>
                </Typography>

            </form>
        </Card>
    )
}