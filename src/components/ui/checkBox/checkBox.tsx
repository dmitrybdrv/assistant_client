import * as Checkbox from '@radix-ui/react-checkbox'
import {CheckIcon, UnCheckIcon} from 'src/assets'
import s from './checkbox.module.scss'
import {FC} from 'react'
import clsx from 'clsx'

type Props = {
    disabled?: boolean
    className?: string
    label?: string
    name?: string
    id?: string
    required?: boolean
    checked: boolean
    onChange: (checked: boolean) => void
}

export const CheckBox: FC<Props> = (
    {
        onChange,
        disabled = false,
        className,
        checked,
        label,
        id,
        ...rest
    }) => {

    const htmlId = id || rest.name || Math.random().toString()

    return (
        <div className={clsx(s.checkBoxContainer, className)}>
            <Checkbox.Root
                className={s.checkboxRoot}
                onCheckedChange={onChange}
                disabled={disabled}
                checked={checked}
                id={htmlId}
                name={rest.name}
                {...rest}
            >
                { !disabled && (checked ?  <UnCheckIcon/> : <CheckIcon/>) }
            </Checkbox.Root>
            {label && (
                <label className={s.label} htmlFor={htmlId}>
                    {label}
                </label>
            )}
        </div>
    )
}