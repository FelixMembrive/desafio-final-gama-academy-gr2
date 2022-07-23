import { LinkContainer } from "react-router-bootstrap";

interface ILinkIconProps {
    to: string;
    children: JSX.Element;
    className?: string;
}

export default function LinkIcon(props: ILinkIconProps) {
    return (
        <LinkContainer to={props.to}>
            <a>
                {props.children}
            </a>
        </LinkContainer>
    );
}