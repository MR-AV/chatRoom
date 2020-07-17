import React from "react";
import {useRoutes} from "hookrouter";
import { HTML404 } from './Components/ErrorPage/Error';
import MainPage from "./Components/MainPage";
const routes = {
    '/' : () => <MainPage />,
}
export default function App(){

    const message = useRoutes(routes);

    return (
        message || <HTML404 />
    )

}