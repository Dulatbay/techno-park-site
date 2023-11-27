import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutITParkPage} from "./pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "./pages/ProjectsPage/ProjectsPage.tsx";
import {MainLayout} from "./Pages/MainLayout/MainLayout";
import OFE from "./Pages/OFE/OFE";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <AboutITParkPage />,
            },
            {
                path: '/it-park-projects',
                element: <ProjectsPage />,
            },
            {
                path: '/ofe-page',
                element: <OFE />,
            }
        ]
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
