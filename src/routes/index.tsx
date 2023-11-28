import {createBrowserRouter} from "react-router-dom";
import EntrepreneurshipOffice from "../pages/EntrepreneurshipOffice/EntrepreneurshipOffice.tsx";
import {AboutITParkPage} from "../pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage/ProjectsPage.tsx";
import {Software} from "../pages/Software/Software.tsx";
import {MainLayout} from '../pages/MainLayout/MainLayout.tsx';
import {AboutTechnoParkPage} from "../pages/AboutTechnoPark/AboutTechnoParkPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/about-it-park',
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
            },
            // {
            //     path: '/enactus',
            //     element: <Enactus/>
            // },
            {
                path: '/about-techno-park',
                element: <AboutTechnoParkPage />,
            }

        ]
    },
]);

export default router;