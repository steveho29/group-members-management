import { setIsLoading } from "./loadingSlice"

export const appDispatch = async (dispatch, action) => {
    dispatch(setIsLoading(true))
    await dispatch(action)
    dispatch(setIsLoading(false))
}