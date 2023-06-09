import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./main";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const AppDispatch: TypedUseSelectorHook<RootState> = useSelector
