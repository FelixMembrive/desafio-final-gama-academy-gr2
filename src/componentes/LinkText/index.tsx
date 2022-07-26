import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import { ArrowBack } from "react-ionicons";
import { BackArrow } from "../../assets/icons/SVGicons";

interface ILinkTextProps {
    to: string;
    text: string;
    className?: string;
    backArrow?: boolean
}

export default function LinkText(props: ILinkTextProps) {
    return (
        <>

            <LinkContainer to={props.to}>
                <div>
                    {props.backArrow && <BackArrow/>}
                    <a className={"" + props.className}>{props.text}</a>
                </div>
            </LinkContainer>
        </>
    );
}