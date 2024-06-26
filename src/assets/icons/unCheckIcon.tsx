import clsx from 'clsx'
import {useTheme} from 'src/common'
/*
Иконка чекбокса - заливка при свойствах checked и unChecked + Галочка чекбокса
 */
export const UnCheckIcon = () => {

    const {theme} = useTheme()
    const checkBoxFill = clsx(
        theme === 'dark' && '#292929',
        theme === 'light' && '#fbfbfc',
    )
    const checkBoxIcon = clsx(
        theme === 'dark' && '#fbfbfc',
        theme === 'light' && '#292929',
    )

    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#none"
            xmlns="http://www.w3.org/2000/svg"
            tabIndex={0} // Добавляем tabIndex, чтобы сделать SVG фокусируемым
        >
            <g id="Property 1=Default Selected">
                <rect id="Vector" x="4" y="6" width="16" height="12" fill={checkBoxIcon}/>
                <path id="Vector_2"
                      d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21
                      3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                      fill={checkBoxFill}
                      />
            </g>
        </svg>
    )
}