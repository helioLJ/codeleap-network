import './Button.css'

import { useAppSelector } from '../Hooks'

interface ButtonProps {
  title: string
  type: 'button' | 'submit'
  theme: 'blue' | 'red' | 'green' | 'white'
  onClick?: any
  formBtn?: string
  signinbtn?: string
}

export function Button(props: ButtonProps) {
  let theme = undefined
  let border = ''
  let status = ''
  
  switch (props.theme) {
    case 'blue':
      theme = 'blue'
      break;
    case 'red':
      theme = 'red'
      break;
    case 'green':
      theme = 'green'
      break;
    case 'white':
      theme = 'white'
      border = 'border'
      break;
  }

  const newTitle = useAppSelector((state) => state.title)
  const newContent = useAppSelector((state) => state.content)
  const user = useAppSelector((state) => state.user.value)

  if(props.formBtn === 'yes') {
    if(newTitle.value.trim() === "" || newContent.value.trim() === "") {
      status = 'desactive'
    } else {
      status = ''
    }
  }

  if(props.signinbtn === 'yes') {
    if(user.trim() === "") {
      status = 'desactive'
    } else {
      status = ''
    }
  }

  return (
    <button
      {...props}
      className={`button ${theme} ${border} ${status}`}
    >
      {props.title}
    </button>
  )
}