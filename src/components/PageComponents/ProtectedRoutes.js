import { Outlet } from "react-router"
import FormLogin from "../../FormLogin"
import { useAuth } from "../../firebase"


export default function ProtectedRoutes() {
    const currentUser = useAuth();
    return currentUser ? <Outlet/> : <FormLogin/>;
}


