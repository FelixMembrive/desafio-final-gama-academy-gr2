import { LinkContainer } from "react-router-bootstrap";
import { BackArrow } from "../../assets/icons/SVGicons";

interface ILinkTextProps {
    to: string;
    text: string;
    className?: string;
    backArrow?: boolean
}

export default function LinkText(props: ILinkTextProps) {
    return (
            <LinkContainer to={props.to}>
                    <a className={"" + props.className}>
                        {props.backArrow && <BackArrow />}
                        {props.text}
                    </a>
            </LinkContainer>
    );
}