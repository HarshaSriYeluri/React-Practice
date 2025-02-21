import { useRouteError } from "react-router";

const ErrorMsg = (props) => {
    const err = useRouteError();
    return (
        <div> <h1>{err.status}</h1> No Page Found</div>
    )
}

export default ErrorMsg;