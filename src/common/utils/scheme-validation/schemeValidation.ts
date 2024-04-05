import {z} from "zod";

/*
Валидация для проверки почтового адреса
@params .min - минимальное количество знаков
@params .email() - дефолтный набор правил для почты (наличие @, точка, доменная зона)
 */
export const emailSchema = z.object({
        email: z.string()
            .min(1, 'Field is required')
            .email()
})

/*
Валидация для проверки имени
@params .min - минимальное количество знаков
@params .max - максимально допустимое количество знаков для имени
 */
export const nameSchema = z.object({
    name: z.string()
        .min(1, 'Field is required')
        .max(30, {message: 'too much letters'})
})

/*
Валидация пароля:
@params .min - минимальное количество знаков
@params .max - ьаксимальное количество знаков
 */
export const passwordSchema = z.object({
    password: z
        .string()
        .min(1, 'Field is required')
        .min(6,{message: 'Must be more than 5 symbols'})
        .max(30, { message: 'Password should be not more 30 characters' })
})

/*
Запомнить пользователя - Опционально - функциона сохранения пользователя без повторного ввода пароля при каждой сессии.
 */
const rememberMeSchema = z.object({
    rememberMe: z.boolean().optional()
})

/*
Валидация формы входа
 */
export const signInSchema = z.object({
    email: emailSchema.shape.email,
    password: passwordSchema.shape.password,
    rememberMe: rememberMeSchema.shape.rememberMe
})

/*
Валидация формы регистрации
 */
export const signUpSchema = z.object({
    email: emailSchema.shape.email,
    name: nameSchema.shape.name,
    password: passwordSchema.shape.password,
    confirmPassword: passwordSchema.shape.password
})
    .refine(data => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: "Password don't match",
    })
