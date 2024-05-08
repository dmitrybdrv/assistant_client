import {useAppSelector} from 'src/common'
import {selectUser} from 'src/features'
import {useEffect} from 'react'
import {PathConstant} from 'src/routes'
import {useNavigate} from 'react-router-dom'

export const MainPage = () => {

    const user = useAppSelector(selectUser)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user.email) {
            navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE)
        }
    }, [user])
    
    return (
        <div>
            {
                user &&
                <ul>
                    <li>User name is {user.name}</li>
                    <li>User email - {user.email}</li>
                </ul>
            }
        </div>
    )
}