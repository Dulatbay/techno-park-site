import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./pages/MainLayout/MainLayout.tsx";
import {AboutITParkPage} from "./pages/AboutITPark/AboutITParkPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/about-it-park',
                element: <AboutITParkPage />
            }
        ]
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
