import { useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError()
    console.log(error);
    const navigation = useNavigate()

    return <>
    <div>
        <h1>Oops! An error occured.</h1>
        {error && <p>Status {error.status} {error.statusText}</p>}
        {error && <p>{error.data}</p>}
        <button onClick={()=> navigation("/")}>Back to Home</button>
        <button onClick={()=> navigation(-1)}>Previous Page</button>
    </div>
    </>
}