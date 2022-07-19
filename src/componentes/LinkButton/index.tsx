import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

interface ILinkButtonProps {
  to: string;
  text: string;
  className?: string;
  variant?:string;
}

export default function LinkButton(props:ILinkButtonProps) {
  return (
    <LinkContainer to={props.to}>
      <Button variant={props.variant} className={props.className}>{props.text}</Button>
    </LinkContainer>
  );
}
