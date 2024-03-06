import s from './footer.module.scss'
import {useThemeStyles} from "../../../common";
import _bp from '../../../styles/boilerPlateTheme.module.scss'

export function Footer() {

    const {themeStyle} = useThemeStyles(_bp, [s.footerContainer])
    return (
        <footer className={themeStyle}>
            <div>
                <div>
                    Вся техническая поддержка осуществляется командой PYTEK
                </div>
                <div>
                    тел: <i>8-800-000-00-00</i>
                </div>
                <div>
                    email: <i>pytek@service.ru</i>
                </div>
            </div>
            <div>
                Приложение AssistOzon:
                <div>
                    <button style={{backgroundColor: 'inherit'}}>Google Play</button>
                    <button style={{backgroundColor: 'inherit'}}>App Store</button>
                </div>
            </div>

        </footer>
    )
}