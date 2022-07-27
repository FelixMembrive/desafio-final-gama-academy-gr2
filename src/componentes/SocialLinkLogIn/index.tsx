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
      <Link to={props.destiny}>
        <button className="socialLinkLogIn">
          <img src={googleImg} alt="" />
          {props.text}
        </button>
      </Link>
    )
  }
  if (props.icon == 'facebook') {
    return (
      <Link to={props.destiny}>
        <button className="socialLinkLogIn">
          <img src={facebookImg} alt="" />
          {props.text}
        </button>
      </Link>
    )
  }
  return (
    <Link to={props.destiny}>
      <button className="socialLinkLogIn">
        <img src={linkedinImg} alt="" />
        {props.text}
      </button>
    </Link>
  )
}
