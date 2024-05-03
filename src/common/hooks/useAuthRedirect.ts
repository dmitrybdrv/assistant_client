import { useEffect } from 'react'
import { useCurrentQuery } from 'src/services'
import {useNavigate} from 'react-router-dom'
import {PathConstant} from 'src/routes'

export const useAuthRedirect = (redirectTo?: string) => {
    const { data, isLoading } = useCurrentQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && !data) {
            // Перенаправляем на указанную страницу, если данных нет и загрузка завершена
            navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE)
        } else if(redirectTo && data) {
            navigate(redirectTo)
        }
    }, [data, isLoading, navigate, redirectTo])

    return { data, isLoading }
}