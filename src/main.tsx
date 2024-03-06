import React from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.scss'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'


createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
