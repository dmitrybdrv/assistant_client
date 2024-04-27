import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {Button, Card, Typography} from 'src/components'
import {PathConstant} from 'src/routes'
import { Link } from 'react-router-dom'
/*
Форма-уведомление об успешной регистрации нового пользователя
 */
export const SuccessSignUp = () => {
  return (
      <Card className={_bp.formWrapper}>

        <Typography variant={'large'} className={_bp.head}>
          Congratulations!
        </Typography>

        <Typography variant={'h1'} className={_bp.h1}>
            Your account has been successfully created.
        </Typography>

        <div>
          <Link to={PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE}>
            <Button fullWidth={true} className={_bp.h1}>
              <Typography variant={'subtitle2'}>Return to Login</Typography>
            </Button>
          </Link>
          <Typography variant={'body2'}>
              You can now log into your account.
          </Typography>
        </div>

      </Card>
  )
}
