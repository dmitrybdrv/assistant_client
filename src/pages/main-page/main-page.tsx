import {useAuthRedirect} from 'src/common/hooks/useAuthRedirect.ts'

export const MainPage = () => {
    useAuthRedirect()
    
    return <div>Main page</div>
}