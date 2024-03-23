import s from './app.module.scss'
import {ThemeProvider} from "../common";
import {Footer, Header, Layout} from "../components";
import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from "../common";


function App() {

    return (
            <ThemeProvider>
                <div className={s.appContainer}>
                    <Header/>
                    <Toaster/>
                    <Layout/>
                    <Footer/>
                </div>
            </ThemeProvider>
    )
}

export default App
