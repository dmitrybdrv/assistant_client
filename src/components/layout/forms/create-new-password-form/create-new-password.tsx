import { clsx } from 'clsx'
import { useForm } from 'react-hook-form'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Button, Card, TextField, Typography} from "../../../ui";
import {FormPropsType, PasswordType} from "src/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {passwordSchema} from "src/common";

/*
Форма страницы создания нового пароля
 */
export const CreateNewPassword = ({onSubmit}: FormPropsType<PasswordType> ) => {

    const typographyStyle = clsx(_bp.footnote, _bp.footnoteExtra)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            password: '',
        },
        mode: 'onSubmit',
    })



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

                <Button fullWidth={true} variant={'primary'} disabled={false} className={_bp.btn}>
                    <Typography variant={'subtitle2'}>Create New Password</Typography>
                </Button>

            </form>
        </Card>
    )
}
