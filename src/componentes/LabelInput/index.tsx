import './style.scss'
interface ILabelInput {
  title: string
  inputType?: string
  placeholder?: string
  key?: string
  value?: string
  onChange?: (e: any) => void
}
export function LabelInput(props: ILabelInput) {
  return (
    <div id="labelInput">
      <input
        placeholder={props.placeholder}
        id={props.title}
        type={props.inputType}
        key={props.key}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}
