import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import { useGlobalContext } from "../context/AppContext";
import "../services/firebase.config";

export default function AuthorizationIcon() {
  const {isAuthorized, setIsAuthorized, userInfo, setUserInfo, setCitiesInfo, setFiltered, setCity} = useGlobalContext();
  
  async function signIn() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if(user) {
        setIsAuthorized(true);
        const userData = {
          image: user.photoURL,
          name: user.displayName,
          email: user.email,
          id: user.uid,
        };
        setUserInfo(userData);
        localStorage.setItem("isAuthorized", true);
        localStorage.setItem("userInfo", JSON.stringify(userData));
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function signOut() {
    setIsAuthorized(false);
    setCitiesInfo([]);
    setFiltered([]);
    setCity("");
    localStorage.removeItem("isAuthorized");
    localStorage.removeItem("userInfo");
  }

  return (
    <div className="authorize__section">
      <div className="authorize__section--inner">
        {!isAuthorized ? (
          <>
            <FaUserCircle onClick={signIn} className="icon" size={50}/>
            <span className="popover">Sign in with Google</span>
          </>
        )
        :
        <div className="authorize__section--inner">
           <img src={userInfo?.image} alt="user icon" onClick={signOut} className="user__img"></img>
           <span className="popover user">Sign out</span>
        </div>
      }
        
      </div>
    </div>
  )
}


