import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

interface ILinkTextProps {
    to: string;
    text: string;
    className?: string;
}

export default function LinkText(props: ILinkTextProps) {
    return (
            <LinkContainer className="row" to={props.to}>
                <a className={"" + props.className}>{props.text}</a>
            </LinkContainer>
    );
}