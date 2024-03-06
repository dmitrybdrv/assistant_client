import {Button, Card, Typography} from "../../../ui";
import clsx from "clsx";
import _bp from '../../../../styles/boilerPlateTheme.module.scss'
import {Link} from "react-router-dom";
import {CheckEmailImg} from "../../../../assets/img";
import {PathConstant} from "../../../../routes";

/*
Форма-уведомление о проверки почты, на которую отправлена инструкция по востановлению доступа
 */
export const CheckEmail = () => {
    const typographyStyle = clsx(_bp.footnote, _bp.footnoteTextCenter)

    const XXX = 'USER EMAIL'

    return (
        <Card className={_bp.formWrapper}>
            <form>

                <Typography variant={'large'} className={_bp.header}>
                    Check Email
                </Typography>

                <Typography variant={'body2'} className={typographyStyle}>
                    {`We have sent an Email with instructions to ${XXX}`}
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