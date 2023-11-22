import HeaderTop from "../../components/HeaderTop/HeaderTop.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <HeaderTop />
            <Outlet />
            {/*footer*/}
        </>
    );
};
