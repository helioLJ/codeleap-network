import './Textarea.css'

interface TextareaProps {
  label: string
  placeholder: string
  onChange?: any
  value?: string
}

export function Textarea(props: TextareaProps) {
  return (
    <div className="input-wrapper">
      <label
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <textarea
        {...props}
        name={props.label}
        placeholder={props.placeholder}
      >
      </textarea>
    </div>
  )
}