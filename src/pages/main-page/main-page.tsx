import {useNavigate} from 'react-router-dom'
import {PathConstant} from 'src/routes'
import {useEffect} from 'react'
import {useCurrentQuery} from 'src/services'

export const MainPage = () => {

    const {data} = useCurrentQuery()
    const navigate = useNavigate()

    useEffect(() => {
        if (!data) {
            navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE)
        }
    }, [navigate, data])

    return (
        <div>
                Main Page
        </div>

    )
}