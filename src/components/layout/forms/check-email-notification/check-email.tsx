import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Button, Card, Typography} from 'src/components'
import {CheckEmailImg} from 'src/assets'
import {PathConstant} from 'src/routes'
import {Link} from 'react-router-dom'
import {useAppSelector} from 'src/common'
import {userEmailSelector} from 'src/features'

/*
Форма-уведомление о том, что на указанную пользователем почту было отправлено письмо с инструкциями по восстановлению
 */
export const CheckEmail = () => {
    const email = useAppSelector(userEmailSelector)

    return (
        <Card className={_bp.formWrapper}>
            <form>

                <Typography variant={'large'} className={_bp.header}>
                    Check Email
                </Typography>

                <Typography variant={'body2'} className={_bp.footnote}>
                    {'We have sent an Email with instructions to '}
                    <strong>{email ? email : 'your email'}</strong>
                </Typography>

                <CheckEmailImg className={_bp.emailIcon}/>

                <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE}>
                    <Button fullWidth={true} className={_bp.btn}>
                        <Typography variant={'subtitle2'}>Back to Sign in</Typography>
                    </Button>
                </Link>

            </form>
        </Card>
    )
}