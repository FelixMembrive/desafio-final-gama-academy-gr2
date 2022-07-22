import { LinkContainer } from "react-router-bootstrap";

interface ILinkIconProps {
    to: string;
    children: JSX.Element;
    className?: string;
}

export default function LinkIcon(props: ILinkIconProps) {
    return (
        <LinkContainer className="" to={props.to}>
            <a>
                {props.children}
            </a>
        </LinkContainer>
    );
}