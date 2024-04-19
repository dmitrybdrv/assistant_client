import ReactSwitch from 'react-switch'
import s from './switcher.module.scss'
import {useTheme} from 'src/common'

export function Switcher() {

    const {theme, toggleTheme} = useTheme()

    return (
        <>
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} className={s.switcher} id="normal-switch"
                         onColor={'#565454'}
                         offColor={'#191C24'}
                         uncheckedIcon={<div className={s.switcherTheme}>L</div>}
                         checkedIcon={<div className={s.switcherTheme}>D</div>}
            />
            <label htmlFor={'normal-switch'} className={s.switchLabel}>{`${theme} side`}</label>
        </>
    )
}