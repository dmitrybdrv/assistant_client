import _bp from '../../../../styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, Card, TextField, Typography} from "../../../ui";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {signUpSchema} from "../../../../common";
import {DataType, SignUpType} from "../forms.types.ts";
import {PathConstant} from "../../../../routes";
/*
Форма регистрации нового пользователя
 */
export const SignUp = () => {

    const {formState: {errors}, handleSubmit, register} = useForm<SignUpType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
    })

    const onSubmit = (data: DataType) => console.log({email: data.email, password: data.password})

    return (
        <Card className={_bp.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <Typography variant={'large'} className={_bp.header}>
                    Sign Up
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

                <TextField
                    {...register('confirmPassword')}
                    type={'password'}
                    label={'Confirm password'}
                    error={errors.confirmPassword}
                />

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} className={_bp.field}>
                    <Typography variant={'link1'}>
                        <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>
                            Already have an account?
                        </Link>
                    </Typography>
                </div>

                <Button fullWidth={true} variant={'primary'}>
                    <Typography variant={'subtitle2'}>Register</Typography>
                </Button>

            </form>
        </Card>
    )
}