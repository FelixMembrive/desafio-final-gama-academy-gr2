import { LinkContainer } from "react-router-bootstrap";
import { BackArrow } from "../../assets/icons/SVGicons";
import './style.scss';

interface ILinkTextProps {
    text: string;
    className?: string;
}

function goBack() {
    window.history.back()
}

export default function LinkBack(props: ILinkTextProps) {
    return (
            <LinkContainer className="link-back" to="javascript:history.back()">
                    <a onClick={goBack} className={"" + props.className}>
                        <BackArrow />
                        {props.text}
                    </a>
            </LinkContainer>
    );
}