import HeaderTop from "../../components/HeaderTop/HeaderTop.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";

export const MainLayout = () => {
    return (
        <>
            <HeaderTop />
            <Outlet />
            <Footer />
        </>
    );
};
