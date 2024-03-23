import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from "react-hook-form";
import clsx from "clsx";
import {Link, useNavigate} from "react-router-dom";
import {EmailType} from "src/types";
import {emailSchema} from "src/common";
import {PathConstant} from "src/routes";
import {Button, Card, TextField, Typography} from "src/components";

/*
Форма сброса пароля на указанную пользователем почту
 */
export const ForgotPassword = () => {

    const navigate = useNavigate()

    const typographyStyle = clsx(_bp.footnote, _bp.footnoteExtra)

    const {formState: {errors}, handleSubmit, register} = useForm<EmailType>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = (data: EmailType) => {
        //  логика обработки формы
        console.log(data);
        // Проверка, что email валиден, прежде чем переходить
        if (!errors.email) {
            // Вызывайте navigate только при успешной валидации
            navigate(PathConstant.PUBLIC_ROUTES.CHECK_EMAIL)
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