import {createBrowserRouter} from "react-router-dom";
import EntrepreneurshipOffice from "../pages/EntrepreneurshipOffice/EntrepreneurshipOffice.tsx";
import {MainLayout} from "../pages/MainLayout/MainLayout.tsx";
import {AboutITParkPage} from "../pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage/ProjectsPage.tsx";
import {Software} from "../pages/Software/Software.tsx";

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
                element: <EntrepreneurshipOffice />,
            },
            {
                path: '/software',
                element: <Software/>
            }

        ]
    },
]);

export default router;