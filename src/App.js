import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import RestaurantsList from "./RestaurantsList";
import About from "./About";
import Receipes from "./Receipes";
import RestaurantItems from "./RestaurantItems";


import ErrorMsg from "./Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RestaurantsList />   
            },
            {
                path: "/about",
                element: <About />   
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