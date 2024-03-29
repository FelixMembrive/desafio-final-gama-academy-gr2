import { LinkContainer } from "react-router-bootstrap";
import { BackArrow } from "../../assets/icons/SVGicons";
import './style.scss';

interface ILinkBackProps {
    text: string;
    className?: string;
}

function goBack() {
    window.scrollTo(0, 0)
    window.history.back()
    window.scrollTo(0, 0)
}

export default function LinkBack(props: ILinkBackProps) {
    return (
            <LinkContainer className="link-back" to="javascript:history.back()">
                    <a onClick={goBack} className={"" + props.className}>
                        <BackArrow />
                        {props.text}
                    </a>
            </LinkContainer>
    );
}