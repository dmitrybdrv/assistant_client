import {token} from "../../components";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {PathConstant} from "../../routes";

export const MainPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            navigate(PathConstant.PUBLIC_ROUTES.SIGN_IN)
        }
    }, [navigate])

    return <div>Hello</div>
}