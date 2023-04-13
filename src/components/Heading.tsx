import './Heading.css'

interface HeadingProps {
  title: string,
  color: 'black' | 'white'
}

export function Heading(props: HeadingProps) {
  let color = null
  if (props.color === 'black') {
    color = 'heading-black'
  } else if (props.color === 'white') {
    color = 'heading-white'
  }

  return (
    <h2 className={`heading ${color}`}>{props.title}</h2>
  )
}