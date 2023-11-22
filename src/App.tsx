import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./pages/MainLayout/MainLayout.tsx";
import {AboutITParkPage} from "./pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "./pages/ProjectsPage/ProjectsPage.tsx";
import OFE from "./pages/OFE.tsx";

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
                path: '/office',
                element: <OFE />,
            }
        ]
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;
