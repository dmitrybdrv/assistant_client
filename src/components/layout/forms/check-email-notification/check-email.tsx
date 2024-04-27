import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Button, Card, Typography} from 'src/components'
import {CheckEmailImg} from 'src/assets'
import {PathConstant} from 'src/routes'
import {Link} from 'react-router-dom'

/*
Форма-уведомление о проверки почты, на которую отправлена инструкция по востановлению доступа
 */
export const CheckEmail = () => {


    return (
        <Card className={_bp.formWrapper}>
            <form>

                <Typography variant={'large'} className={_bp.header}>
                    Check Email
                </Typography>

                <Typography variant={'body2'} className={_bp.footnote}>
                    {'We have sent an Email with instructions to '}
                    <strong>{'мой емаил'}</strong>
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