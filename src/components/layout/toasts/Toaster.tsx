import {Slide, ToastContainer} from "react-toastify";

export const Toaster = () => <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    stacked
    transition={Slide}
/>