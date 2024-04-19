import {createContext, FC, ReactNode, useEffect, useState} from 'react'
import {Theme, ThemeContextType} from 'src/common'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/*
ThemeProvider - компонент ThemeProvider, который предоставляет контекст с информацией о текущей теме и функции
для её переключения.
 */
export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        /*
        Сохранение цветовой темы в локальное localStorage
         */
        const storedTheme = localStorage.getItem('theme')
        return (storedTheme as Theme) || 'light'
    })

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme')
        if (storedTheme) {
            setTheme(storedTheme as Theme)
        }
    }, [])

    const contextValue: ThemeContextType = { theme, toggleTheme }

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}