import App from "./App";
import ErrorPage from "./ErrorPage";
import Places from "./Places";
import Characters from "./Characters";
import Items from "./Items";



const routes = [
    //Error page
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    // sub pages
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
