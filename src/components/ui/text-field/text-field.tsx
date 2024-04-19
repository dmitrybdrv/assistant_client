import {ComponentPropsWithoutRef, FC, ForwardedRef, forwardRef, useState} from 'react'
import {getIcon, getType, useThemeStyles} from 'src/common'
import _bp from 'src/styles/boilerPlateTheme.module.scss'
import {FieldError} from 'react-hook-form'
import {Typography} from 'src/components'
import s from './text-field.module.scss'

type Props = {
    label: string;
    error?: FieldError;
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<Props> = forwardRef(
    ({label, error, type = 'text', ...rest}: Props, ref: ForwardedRef<HTMLInputElement>) => {

        const [icon, setIcon] = useState<boolean>(false)
        const onShowIcon = () => {
            setIcon(!icon)
        }

        const showIcon = getIcon(icon, type, onShowIcon)
        const typeVariant = getType(icon, type)

        const errorStyle = error ? s.error : ''
        const {themeStyle} = useThemeStyles(_bp, [s.inputFl, errorStyle])

        return (
            <div className={s.inputField}>
                <label htmlFor={rest.id} className={s.formLabel}>
                    {label}
                </label>
                <div className={themeStyle}>
                    <input
                        ref={ref}
                        type={typeVariant}
                        {...rest}
                    />
                    {showIcon}
                </div>
                <Typography variant={'body1'} className={s.errorText}>
                    {error && error.message}
                </Typography>
            </div>
        )
    }
)