import { FC, forwardRef, HTMLProps, ReactNode, RefAttributes } from 'react'
import {useThemeStyles} from 'src/common'
import s from './card.module.scss'

type CardProps = {
    children: ReactNode
} & HTMLProps<HTMLDivElement> &
    RefAttributes<HTMLDivElement>

/*
Card - компонент карточка представляет собой обёртку (в основном для <form>) для структуризации контента на странице
позволяет настраивать позиционирование.
Принимает дочерние компоненты в виде children
 */
export const Card: FC<CardProps> = forwardRef(({ className, children, ...rest }, ref) => {
    const propsClassName = className ? className : ''

    const {themeStyle} = useThemeStyles(s, [s.cardContainer, propsClassName])

    return (
        <div className={themeStyle} {...rest} ref={ref}>
            {children}
        </div>
    )
})