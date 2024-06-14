import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Places from "./Places";

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
    
];

export default routes;
