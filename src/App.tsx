import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FilterProvider } from "./providers/FilterProvider";
import { ModalProvider } from "./providers/ModalProvider";
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
            <ModalProvider>
                <UserProvider>
                    <FilterProvider>
                        <RoutesMain />
                    </FilterProvider>
                </UserProvider>
            </ModalProvider>
        </>
    );
}

export default App;
