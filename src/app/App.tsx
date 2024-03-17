import s from './app.module.scss'
import {ThemeProvider} from "../common";
import {Footer, Header, Layout} from "../components";
import {Slide, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    return (
            <ThemeProvider>
                <div className={s.appContainer}>
                    <Header/>
                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        stacked
                        transition={Slide}
                    />
                    <Layout/>
                    <Footer/>
                </div>
            </ThemeProvider>
    )
}

export default App
