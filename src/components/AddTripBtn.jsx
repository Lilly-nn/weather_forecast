import {AiOutlinePlus} from "react-icons/ai";
import { useGlobalContext } from "../context/AppContext";

export default function AddTripBtn() {
  const {setModalOpen} = useGlobalContext();

  function openModal() {
    setModalOpen(true);
  }
  
  return (
     <div className="button__container" onClick={openModal}>
        <div className="button">
            <AiOutlinePlus size={30} className="button__icon"/>
            <span  className="button__text">Add trip</span>
        </div>
    </div>
    ) 
}
