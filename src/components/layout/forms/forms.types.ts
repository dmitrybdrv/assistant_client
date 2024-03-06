export type DataType = {
    email: string
    password: string
}

export type EmailType = Pick<SignInType, 'email'>

export type PasswordType = Pick<SignInType, 'password'>

export type SignInType = {
    rememberMe?: boolean
} & DataType

export type SignUpType = {
    confirmPassword: string
} & DataType