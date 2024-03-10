import s from './app.module.scss'
import {ThemeProvider} from "../common";
import {Footer, Header, Layout} from "../components";
import {store} from './store'
import {Provider} from 'react-redux'


function App() {

    return (
        <Provider store={store}>
            <ThemeProvider>
                <div className={s.appContainer}>
                    <Header/>
                    <Layout/>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App
