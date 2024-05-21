export type ErrorWithMessage = {
    status: number
    data: {
        message: string
    }
}

export type FormPropsType<T> = {
    onSubmit: (data: T) => void
}

export type LoadingState = 'idle' | 'loading' | 'success'

export type LoginArgsType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type RegisterArgsType = {
    email: string
    name: string
    inn: string
    password: string
    confirmPassword?: string
}

export type ResponseLoginUserData = {
    message: string,
    token: string
}

export type UserData = {
    token?: string
    name: string
    email: string
    createdReviewerBot: ReviewerBotType[]
}

export type ReviewerBotType = {
    id: string
    botName: string
    //TODO пофиксить тип user со string на верный
    user: string
    userId: string
    botPromtPreset: string
}

export type RecoverPassword = {
    html?: string
    email: string
    subject?: string
}

export type MessageFromBack = {message: string}

export type PasswordType = {password: string}

export type EmailType = Pick<UserData, 'email'>

export type ToastType = 'success' | 'warning' | 'error'
