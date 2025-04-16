import { Outlet } from "react-router-dom";
import HeaderUi from "../components/dumb/HeaderUi";
import FooterUi from "../components/dumb/FooterUi";
export default function DefaultLayout() {
    return (
        <>
            <HeaderUi />
            <main className="bg-secondary pt-3 pb-3 flex-grow-1">
                <Outlet />
            </main>
            <FooterUi />
        </>
    );
}

