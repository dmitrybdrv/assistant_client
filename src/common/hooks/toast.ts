import {toast, ToastOptions} from 'react-toastify'
import {ToastType} from 'src/types'

export const useToast = () => {

    const showToast = (message: string, type: ToastType, options?: ToastOptions) => {

        const toastOptions: ToastOptions = {
            toastId: new Date().toDateString(),
            ...options,
        }

        if (type === 'success') {
            toast.success(message, toastOptions)
        } else if (type === 'warning') {
            toast.warning(message, toastOptions)
        } else if (type === 'error') {
            toast.error(message, toastOptions)
        }
    }

    return {showToast}
}