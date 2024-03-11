import _bp from '../../../../styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Card, TextField, Typography} from "../../../ui";
import {useForm} from "react-hook-form";
import {signInSchema} from "../../../../common";
import {ControlledCheckbox} from "../../../ui/checkBox/conttrolledCheckBox.tsx";
import {Link} from "react-router-dom";
import {SignInType} from "../forms.types.ts";
import {PathConstant} from "../../../../routes";
import {FormPropsType, LoginArgs} from "../../../../services/auth";
/*
Форма логинизации
 */
export const SignIn = ({ onSubmit }: FormPropsType<LoginArgs>) => {

    const {formState: {errors}, handleSubmit, register, control} = useForm<SignInType>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false
        },
    })

    return (
        <Card className={_bp.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <Typography variant={'large'} className={_bp.header}>
                    Sign In
                </Typography>

                <TextField
                    {...register('email')}
                    label={'Email'}
                    error={errors.email}
                />

                <TextField
                    {...register('password')}
                    type={'password'}
                    label={'Password'}
                    error={errors.password}
                />

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
                     className={_bp.field}>

                    <ControlledCheckbox
                        control={control}
                        className={_bp.checkbox}
                        label={'Remember me'}
                        name={'rememberMe'}
                    />

                    <Typography variant={'link1'}>
                        <Link to={PathConstant.PUBLIC_ROUTES.FORGOT_PASSWORD}>
                            Forgot Password?
                        </Link>
                    </Typography>
                </div>

                <Button fullWidth={true} variant={'primary'} disabled={false} className={_bp.footnote}>
                    <Typography variant={'subtitle2'}>Log In</Typography>
                </Button>

                <Typography variant={'body2'} className={_bp.footnote}>
                    Don&apos;t have an account?
                </Typography>

                <Typography variant={'link1'}>
                    <Link className={_bp.linkWrapper} to={PathConstant.PUBLIC_ROUTES.SIGN_UP}>
                        Sign Up
                    </Link>
                </Typography>

            </form>
        </Card>
    )
}