import {FaUserCircle} from "react-icons/fa"
export default function AuthorizationIcon() {
  return (
    <div className="authorize__section">
      <div className="authorize__section--inner">
        <FaUserCircle className="icon" size={50}/>
        <span className="popover">Sign in with Google</span>
      </div>
    </div>
  )
}


