import {Slide, ToastContainer} from "react-toastify";

export const Toaster = () => <ToastContainer
    position="top-center"
    hideProgressBar={false}
    newestOnTop={false}
    rtl={false}
    draggable
    pauseOnFocusLoss={false}
    theme="colored"
    stacked
    transition={Slide}
/>