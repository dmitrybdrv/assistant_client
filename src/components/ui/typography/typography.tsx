import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import {tagMapping, VariantStyle} from 'src/components'
import s from './typography.module.scss'
import { clsx } from 'clsx'

type TypographyOwnType<T extends ElementType = ElementType> = {
    children: ReactNode
    className?: string
    variant: VariantStyle
} & ComponentPropsWithoutRef<T>

type TypographyType<T extends ElementType> = TypographyOwnType<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnType<T>>

export function Typography<T extends ElementType = ElementType>(
    {
        children,
        className,
        variant,
        ...rest
    }: TypographyType<T>) {
    const Component = tagMapping[variant]

    const typographyStyle = clsx(s[variant], className)

    return (
        <Component className={typographyStyle} {...rest}>
            {children}
        </Component>
    )
}
