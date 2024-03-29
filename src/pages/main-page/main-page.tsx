import {PathConstant} from "src/routes";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "src/common";
import {selectUser} from "src/features";
import {useEffect} from "react";

export const MainPage = () => {

    const navigate = useNavigate()
    const user = useAppSelector(selectUser)

    useEffect(() => {
        if (user === null) {
            navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN)
        }
    }, [navigate, user])

    return (
        <div>
                Main Page
        </div>

    )
}