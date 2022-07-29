import './style.scss'
interface ILabelInput {
  title: string
  inputType?: string
  placeholder?: string
}
export function LabelInput(props: ILabelInput) {
  return (
    <div id="labelInput">
      <label htmlFor={props.title}>{props.title}</label>
      <input
        placeholder={props.placeholder}
        id={props.title}
        type={props.inputType}
      />
    </div>
  )
}
