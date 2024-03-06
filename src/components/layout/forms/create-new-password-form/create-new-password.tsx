import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import _bp from '../../../../styles/boilerPlateTheme.module.scss'
import {Button, Card, TextField, Typography} from "../../../ui";
import {PasswordType} from "../forms.types.ts";
import {PathConstant} from "../../../../routes";
/*
Форма страницы создания нового пароля
 */
export const CreateNewPassword = () => {

    const typographyStyle = clsx(_bp.footnote, _bp.footnoteExtra)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            password: '',
        },
        mode: 'onSubmit',
    })

    const onSubmit = (data: PasswordType) => {
        console.log(data)
    }

    return (
        <Card className={_bp.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography variant={'large'} className={_bp.header}>
                    Create new password
                </Typography>

                <TextField
                    {...register('password')}
                    autoComplete={'on'}
                    type={'password'}
                    error={errors.password}
                    label={'Password'}
                    placeholder={'Password'}
                    className={_bp.txf}
                />

                <Typography variant={'body2'} className={typographyStyle}>
                    Create new password and we will send you further instructions to email
                </Typography>

                <Link to={PathConstant.PUBLIC_ROUTES.SUCCESS_RESET_PASSWORD}>
                    <Button type={'submit'} fullWidth={true} className={_bp.btn}>
                        <Typography variant={'subtitle2'}>Create New Password</Typography>
                    </Button>
                </Link>

            </form>
        </Card>
    )
}
