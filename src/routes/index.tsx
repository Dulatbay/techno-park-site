import {createBrowserRouter} from "react-router-dom";
import EntrepreneurshipOffice from "../pages/EntrepreneurshipOffice/EntrepreneurshipOffice.tsx";
import {AboutITParkPage} from "../pages/AboutITPark/AboutITParkPage.tsx";
import {ProjectsPage} from "../pages/ProjectsPage/ProjectsPage.tsx";
import {Software} from "../pages/Software/Software.tsx";
import {MainLayout} from '../pages/MainLayout/MainLayout.tsx';
import {AboutTechnoParkPage} from "../pages/AboutTechnoPark/AboutTechnoParkPage.tsx";
import {Enactus} from "../pages/Enactus/Enactus.tsx";
import {Homepage} from "../pages/Home/HomePage.tsx";
import {HardwarePage} from "../pages/Hardware/HardwarePage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
              path:'/',
              element:<Homepage/>
            },
            {
                path: '/about-it-park',
                element: <AboutITParkPage />,
            },
            {
                path: '/it-park-projects',
                element: <ProjectsPage />,
            },
            {
                path: '/technopark/hardware',
                element: <HardwarePage />,
            },
            {
                path: '/office',
                element: <EntrepreneurshipOffice />,
            },
            {
                path: '/software',
                element: <Software/>
            },
            {
                path: '/enactus',
                element: <Enactus/>
            },
            {
                path: '/about-techno-park',
                element: <AboutTechnoParkPage />,
            }
        ]
    },
]);

export default router;