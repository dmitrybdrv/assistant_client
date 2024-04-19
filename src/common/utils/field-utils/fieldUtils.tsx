import {HTMLInputTypeAttribute} from 'react'
import s from 'src/components/ui/text-field/text-field.module.scss'
import {ClosedEye, OpenEye} from 'src/assets'
/*
Функция - динамически определяет тип для поля ввода в зависимости от переданных аргументов.
Основной сценарий использования - обработка типа 'password' и изменение его на 'text',
если iconState установлено в true (то есть, если пользователь хочет видеть пароль).
@param {string} type - тип поля input
@param {boolean} iconState - true / false состояние - выбор наличия или отсутствия иконки для поля
 */
export const getType = (iconState: boolean, type: HTMLInputTypeAttribute) => {
    if (type === 'password') {
        if (!iconState) {
            return 'password'
        } else {
            return 'text'
        }
    }

    return type
}
/*
Функция - на основании типа поля (type) и состояния (iconState) определяет выбор иконок для отображения в поле password.
 (при условии если type === password)
@param {string} type - тип поля input
@param {boolean} iconState - true / false состояние - выбор наличия или отсутствия иконки для поля
@param {Function} onShowHandler - callBack для переключения состояний true / false
 */
export const getIcon = (iconState: boolean, type: HTMLInputTypeAttribute, onShowHandler: () => void) => {
    if (type === 'password' && iconState) {
        return <OpenEye changeIcon={onShowHandler} className={s.icon}/>
    } else if (type === 'password' && !iconState) {
        return (!iconState && <ClosedEye changeIcon={onShowHandler} className={s.icon}/>)
    }
}
