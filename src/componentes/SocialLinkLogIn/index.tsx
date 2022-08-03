import { Link } from 'react-router-dom'
import googleImg from '../../assets/icons/google.svg'
import facebookImg from '../../assets/icons/facebook.svg'
import linkedinImg from '../../assets/icons/linkedin.svg'
import './style.scss'

interface SocialLinkLogInProps {
  destiny: string
  text: string
  icon: string
}
export default function SocialLinkLogIn(props: SocialLinkLogInProps) {
  if (props.icon == 'google') {
    return (
      <button className="socialLinkLogIn">
        <Link to={props.destiny}>
          <img src={googleImg} alt="" />
          {props.text}
        </Link>
      </button>
    )
  }
  if (props.icon == 'facebook') {
    return (
      <button className="socialLinkLogIn">
        <Link to={props.destiny}>
          <img src={facebookImg} alt="" />
          {props.text}
        </Link>
      </button>
    )
  }
  return (
    <button className="socialLinkLogIn">
      <Link to={props.destiny}>
        <img src={linkedinImg} alt="" />
        {props.text}
      </Link>
    </button>
  )
}
