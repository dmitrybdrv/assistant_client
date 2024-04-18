import {useAppDispatch} from "src/common";
import {bindActionCreators} from "@reduxjs/toolkit";
import {authAction} from "src/features";

const allActions = {
    ...authAction,
}

export const useActions = () => {
    const dispatch = useAppDispatch()

    return bindActionCreators(allActions, dispatch)
}