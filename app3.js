import React, { Suspense, lazy, useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/restaurantMenu";
import LoginForm from "./src/components/loginForm";
import { LoginUser } from "./src/utils/loginUser";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {

  const [loginName, setloginName] = useState("Parth");

  return (
    // Provide the store to the app
    <Provider store={appStore}> {/* Provide the store to the app */}
      <LoginUser.Provider value={{ loginUserName: loginName, setloginName }}>    {/* We can provide the context to the whole app or to some specific componeents */}
        <div className="dark">
          <Header />
          <Outlet />
        </div>
      </LoginUser.Provider>
    </Provider>
  );
};
// This is how you import a component for lazy loading (dynamic import)
const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/login",
        element: <LoginForm />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: '/grocery',
        element: (<Suspense fallback={<h1>Loading.....</h1>}>
          <Grocery />
        </Suspense>),
      },
      {
        path: '/cart',
        element : <Cart />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
