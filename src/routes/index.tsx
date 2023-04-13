import { BrowserRouter } from "react-router-dom"
import { useAppSelector } from "../Hooks"

import { Home } from "../pages/Home"
import { SignUp } from "../pages/SignUp"

export function Routes() {
  const { isSigned } = useAppSelector((state) => state.user)

  return (
    <BrowserRouter>
      {isSigned ? <Home /> : <SignUp />}
    </BrowserRouter>
  )
}