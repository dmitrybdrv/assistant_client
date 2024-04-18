import {useAppDispatch} from "src/common";
import {bindActionCreators} from "@reduxjs/toolkit";
import {authAction, emailActions} from "src/features";

const allActions = {
    ...authAction,
    ...emailActions,
}

export const useActions = () => {
    const dispatch = useAppDispatch()

    return bindActionCreators(allActions, dispatch)
}