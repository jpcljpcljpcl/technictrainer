import { Outlet } from "react-router"
import FormLogin from "../../FormLogin"
import FormName from "../../FormName"
import { useAuth } from "../../firebase"


export default function ProtectedRoutes() {
    const currentUser = useAuth();
    if (currentUser == null){
        return <FormLogin />;
    }
    if ((currentUser != null) && (currentUser.displayName == null)){
        return <FormName/>;
    } else {return  <Outlet/>;}
}


