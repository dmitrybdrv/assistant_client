import s from './app.module.scss'
import {ThemeProvider} from "./common";
import {Footer, Header, Layout} from "./components";


function App() {

    return (
        <ThemeProvider>
            <div className={s.appContainer}>
                <Header/>
                <Layout/>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App
