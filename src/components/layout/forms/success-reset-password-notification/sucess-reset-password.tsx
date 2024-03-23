import { Link } from 'react-router-dom'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {PathConstant} from "src/routes";
import {Button, Card, Typography} from "src/components";

/*
Форма-уведомление об успешном обновлении пароля
 */
export const SuccessResetPassword = () => {
  return (
      <Card className={_bp.formWrapper}>

        <Typography variant={'large'} className={_bp.head}>
          Congratulations!
        </Typography>

        <Typography variant={'h1'} className={_bp.h1}>
          You have successfully reset your password.
        </Typography>

        <div>
          <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN}>
            <Button fullWidth={true} className={_bp.h1}>
              <Typography variant={'subtitle2'}>Return to Login</Typography>
            </Button>
          </Link>
          <Typography variant={'body2'}>
            You can now log into your account with your new password.
          </Typography>
        </div>

      </Card>
  )
}
