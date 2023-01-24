import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "../../presentation/screens/principal"
import RedirectLogin from "../../presentation/screens/redirect-login"

export default props=> 
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Principal/>}></Route>
                <Route path = "/login" element ={<RedirectLogin></RedirectLogin>}></Route>
            </Routes>
        </BrowserRouter>
    )
}