import {createBrowserRouter} from "react-router-dom";
import EntrepreneurshipOffice from "../pages/EntrepreneurshipOffice/EntrepreneurshipOffice.tsx";
import {AboutITParkPage} from "../pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage/ProjectsPage.tsx";
import {MainLayout} from '../pages/MainLayout/MainLayout.tsx';

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
            }
        ]
    },
]);

export default router;