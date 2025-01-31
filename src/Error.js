import { useRouteError } from "react-router";

const ErrorMsg = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>{err.status}</div>
    )
}

export default ErrorMsg;