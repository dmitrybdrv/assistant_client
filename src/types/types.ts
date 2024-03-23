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
    password: string
    confirmPassword?: string
}

export type ResponseUserData = {
    id: string,
    name: string,
    email: string,
    token: string
}

export type UserData = {
    id: string
    name: string
    password: string
    email: string
    createdReviewerBot: ReviewerBotType[]
}

export type ReviewerBotType = {
    id: string
    botName: string
    //TODO пофиксить тип user со string на верный
    user: string
    userId: string
    answerRule: string
}

export type PasswordType = Pick<UserData, 'password'>

export type EmailType = Pick<UserData, 'email'>

export type ToastType = 'success' | 'warning' | 'error'
