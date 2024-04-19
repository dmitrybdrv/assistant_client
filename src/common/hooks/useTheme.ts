import {useContext} from 'react'
import {ThemeContext, ThemeContextType} from 'src/common'


/*
useTheme - кастомный хук, который предоставляет доступ к контексту темы. Этот хук использует useContext для получения
 значения из контекста и возвращает объект с текущей темой и функцией для её переключения. Если хук используется
  вне ThemeProvider, он выдаст ошибку.
 */
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}