import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Places from "./Places";
import Characters from "./Characters";
import Items from "./Items";



const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "Places",
        element: <Places />,
    },
    {
        path: "Characters",
        element: <Characters />,
    },
    {
        path: "Items",
        element: <Items />,
    },
    
];

export default routes;
