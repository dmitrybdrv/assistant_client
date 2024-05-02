import { useEffect } from 'react'
import { useCurrentQuery } from 'src/services'
import {useNavigate} from 'react-router-dom'

export const useAuthRedirect = (redirectTo: string) => {
    const { data, isLoading } = useCurrentQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && !data) {
            // Перенаправляем на указанную страницу, если данных нет и загрузка завершена
            navigate(redirectTo)
        }
    }, [data, isLoading, redirectTo])

    return { data, isLoading }
}