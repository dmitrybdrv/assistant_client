import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import s from './button.module.scss'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {useThemeStyles} from "src/common";
/*
Полиморфный компонент - кнопка
 */
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'link'
    fullWidth?: boolean
    icon?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(
    props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => {
    const {
        variant = 'primary',
        fullWidth,
        className,
        icon,
        as: Component = 'button',
        ...rest
    } = props

    const {themeStyle} = useThemeStyles(_bp, [s[variant], fullWidth && s.fullWidth, className,])

    return (
        <Component className={themeStyle} {...rest}>
            {icon && icon}
            {props.children}
        </Component>
    )
}