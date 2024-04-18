import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {EmailType, FormPropsType} from "src/types";
import {emailSchema} from "src/common";
import {PathConstant} from "src/routes";
import {Button, Card, TextField, Typography} from "src/components";

/*
Форма сброса пароля на указанную пользователем почту
 */
export const ForgotPassword = ({onSubmit}: FormPropsType<EmailType>) => {

    const {formState: {errors}, handleSubmit, register} = useForm<EmailType>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: '',
        },
    })

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

                <Typography variant={'body2'} className={_bp.footnote}>
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