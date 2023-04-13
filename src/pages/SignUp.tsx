import './SignUp.css'

import { Heading } from "../components/Heading";
import { Input } from '../components/Input';
import { Button } from '../components/Button';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../Hooks';

import { setUserValue, toggleIsSignedValue } from '../redux/user/UserSlice';

export function SignUp() {
  const user = useAppSelector((state) => state.user.value)
  const dispatch = useDispatch()

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault()
    dispatch(toggleIsSignedValue())
  }

  return (
    <div className="container-sign-up">
      <div className="sign-up-modal">
        <Heading
          title="Welcome to CodeLeap Network!"
          color='black'
        />
        <form onSubmit={handleSubmit}>
          <Input
            label="Please enter your username"
            placeholder="John Doe"
            onChange={(event: any) => dispatch(setUserValue(event.target.value))}
            value={user}
          />
          <Button
            type="submit"
            title="ENTER"
            theme="blue"
            signinbtn='yes'
          />
        </form>
      </div>
    </div>
  )
}