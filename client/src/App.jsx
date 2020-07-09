import React from "react";
import {useRoutes} from "hookrouter";
import NotFound from "./Components/NotFound/NotFound";
import MainPage from "./Components/MainPage";
const routes = {

    '/' : () => <MainPage />,
   
}
export default function App(){

    const message = useRoutes(routes);

    return (
        message || <NotFound />
    )

}