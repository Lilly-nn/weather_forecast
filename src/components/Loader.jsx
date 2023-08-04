import loader from "../assets/loader.svg";

export default function Loader() {
  return (
    <div className='loader__cont'>
        <img src={loader} alt="loading..." className="loader"/>
    </div>
  )
}
