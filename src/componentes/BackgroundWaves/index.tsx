import './style.scss';


interface IbackgrounWaves{
    pattern: string
    className?: string,
    paddingImage?: string
}

export default function BackgroundWaves(props: IbackgrounWaves) {
    return (
        <img className={props.className} style={{paddingTop: props.paddingImage}}src={props.pattern} alt="" />
    )}