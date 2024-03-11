export type LoginArgs = {
    email: string
    password: string
    rememberMe?: boolean
}

export type LoginResponse = {
    id: string,
    email: string,
    name: string,
    token: string
}

export type FormPropsType<T> = {
    onSubmit: (data: T) => void
}