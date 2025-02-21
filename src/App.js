import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
// import RestaurantsList from "./RestaurantsList";
import About from "./About";
import Receipes from "./Receipes";
import RestaurantItems from "./RestaurantItems";

import useOnlineStatus from "./utils/useOnlineStatus";

import ErrorMsg from "./Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


const RestaurantsList = lazy(()=>import("./RestaurantsList"));

const App = () => {
    const onlineStatus = useOnlineStatus();
    return onlineStatus ? (
        <div>
            <Header />
            <Outlet />
        </div>
    ): <h1>Please Check Internet</h1>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <About contact="7731072337"/>   
            },
            {
                path: "/home",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <RestaurantsList />
                    </Suspense>
                )
            },
            {
                path: "/receipes",
                element: <Receipes />   
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantItems />

            }
        ],
        errorElement: <ErrorMsg />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);