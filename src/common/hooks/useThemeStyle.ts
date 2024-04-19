import clsx from 'clsx'
import {useTheme} from 'src/common'

type StyleType = {
    [key: string]: string
}
/*
useThemeStyles - кастомный хук, который принимает стили сущности (массив) и возвращает стиль согласко теме
приложения описанный в стилях файла сущности (module.scss).
@params moduleFileTheme файл из которого берутся стили для темы ([moduleFileTheme.lightTheme]: theme === 'light'...)
@params classNamesStyles {string[]} согласно БЭМ - это Блок (то есть класс)
 */
export const useThemeStyles = (moduleFileName: StyleType, classNamesStyles: string[]) => {

    const {theme} = useTheme()
    const themeStyle = clsx(
        classNamesStyles,
        {[moduleFileName.lightTheme]: theme === 'light'},
        {[moduleFileName.darkTheme]: theme === 'dark'},
    )

    return {themeStyle}
}