import {isRouteErrorResponse, useRouteError} from 'react-router-dom'
import pageNotFound from 'src/assets/img/404_Page.png'

export const ErrorPage = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error) && error.status === 401) {
        // the response json is automatically parsed to
        // `error.data`, you also have access to the status
        return (
            <div>
                <h1>{error.status}</h1>
                <h2>{error.data}</h2>
                <p>
                    Go ahead and email {error.data} if you
                    feel like this is a mistake.
                </p>
            </div>
        )
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={pageNotFound} alt={'error_page'}/>
        </div>
    )
}