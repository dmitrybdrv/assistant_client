import s from './app.module.scss'
import 'react-toastify/dist/ReactToastify.css';
import {ThemeProvider} from "src/common";
import {Footer, Header, Layout, Toaster} from "src/components";



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