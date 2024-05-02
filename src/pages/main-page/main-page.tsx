import {useCurrentQuery} from 'src/services'
import {Navigate} from 'react-router-dom'
import {PathConstant} from 'src/routes'

export const MainPage = () => {
    const {data, isLoading} = useCurrentQuery()

    if(!data) {
        return <Navigate to={PathConstant.PUBLIC_ROUTES.SIGN_IN_PAGE}/>
    }
    return !isLoading && <div>Main page</div>
}