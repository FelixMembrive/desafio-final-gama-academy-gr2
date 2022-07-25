interface ISelectBoxProps {
  className?: string;
  labelText?: string;
  placeholder?: string;
  optionValues: string[] | number[];
  optionTexts: string[];
  required?: boolean;
  onChange?: any;
  disabled?: boolean;
}

export default function SelectBox(props: ISelectBoxProps) {
  return (
      <select
        className={"" + props.className}
        // id={props.inputId}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
        disabled={props.disabled}
      >

        {props.placeholder ?
          <option value="" disabled selected>{props.placeholder}</option> :
          null
        }

        {props.optionValues.map((valueItem, index) => {
          return (
            <option value={valueItem}>{props.optionTexts[index]}</option>
          )
        })}
      </select>
  );
}