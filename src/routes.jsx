import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Popeye from "./Popeye";

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
        path: "Popeye",
        element: <Popeye />,
    },
    
];

export default routes;
