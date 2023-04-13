import './Input.css'

interface InputProps {
  label: string
  placeholder: string
  onChange?: any
  value?: string
}

export function Input(props: InputProps) {
  return (
    <div className="input-wrapper">
      <label
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        {...props}
        name={props.label}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  )
}