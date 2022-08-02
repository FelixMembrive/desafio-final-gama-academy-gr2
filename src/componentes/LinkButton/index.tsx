import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

interface ILinkButtonProps {
  to: string;
  text: string;
  className?: string;
  variant?: string;
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  id?: string;
}

export default function LinkButton(props: ILinkButtonProps) {
  return (
    <LinkContainer to={props.to}>
      <Button variant={props.variant} className={props.className} id={props.id}>
        {props.iconRight}
        {props.text}
        {props.iconLeft}
      </Button>
    </LinkContainer>
  );
}