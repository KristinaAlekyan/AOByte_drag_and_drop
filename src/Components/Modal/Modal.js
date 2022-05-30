import { useSelector } from "react-redux";

import "./modal.css";
import { modalIsOpenSelector } from "../../redux/dragAndDropSlice";

export default function Modal() {  
    const modalIsOpen = useSelector(modalIsOpenSelector); 

    return(
        <div className={modalIsOpen?"modal": ""}></div>
    )
}
