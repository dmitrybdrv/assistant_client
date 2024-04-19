import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Link} from "react-router-dom";
import {CheckEmailImg} from "src/assets";
import {PathConstant} from "src/routes";
import {Button, Card, Typography} from "src/components";
import {useAppSelector, useLocalStorage} from "src/common";
import {userEmailSelector} from "src/features";

/*
Форма-уведомление о проверки почты, на которую отправлена инструкция по востановлению доступа
 */
export const CheckEmail = () => {
    const email = useAppSelector(userEmailSelector)
    const {setItem, getItem} = useLocalStorage('email')

    if(email) setItem(email)

    const myEmail =  getItem()

    return (
        <Card className={_bp.formWrapper}>
            <form>

                <Typography variant={'large'} className={_bp.header}>
                    Check Email
                </Typography>

                <Typography variant={'body2'} className={_bp.footnote}>
                    {'We have sent an Email with instructions to '}
                    <strong>{myEmail}</strong>
                </Typography>

                <CheckEmailImg className={_bp.emailIcon}/>

                <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>
                    <Button fullWidth={true} className={_bp.btn}>
                        <Typography variant={'subtitle2'}>Back to Sign in</Typography>
                    </Button>
                </Link>

            </form>
        </Card>
    )
}