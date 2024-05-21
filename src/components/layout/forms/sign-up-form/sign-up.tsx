import {Button, Card, TextField, Typography} from 'src/components'
import {FormPropsType, RegisterArgsType} from 'src/types'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {signUpSchema} from 'src/common'
import {PathConstant} from 'src/routes'
import {Link} from 'react-router-dom'


/*
Форма регистрации нового пользователя
 */
export const SignUp = ({ onSubmit }: FormPropsType<RegisterArgsType>) => {

    const {formState: {errors}, handleSubmit, register} = useForm<RegisterArgsType>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            name: '',
            inn: '',
            password: '',
            confirmPassword: ''
        },
    })

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
                    {...register('name')}
                    label={'Name'}
                    error={errors.name}
                />

                <TextField
                    {...register('inn')}
                    label={'INN'}
                    error={errors.inn}
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
                        <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE}>
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