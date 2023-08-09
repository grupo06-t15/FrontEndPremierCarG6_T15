import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./providers/UserProvider";
import { RoutesMain } from "./routes";
import { GlobalStyles } from "./styles/global";

function App() {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <GlobalStyles />
            <UserProvider>
                <RoutesMain />
            </UserProvider>
        </>
    );
}

export default App;
