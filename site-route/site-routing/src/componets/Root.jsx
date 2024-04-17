import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function RootLayout() {
    return (<>
        <NavigationBar />
        <main>
            <Outlet />
        </main>
    </>);
}

export default RootLayout;