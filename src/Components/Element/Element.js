import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./element.css";
import { elementFinder } from "../../utils";
import { openModal } from "../../redux/dragAndDropSlice";

export default function Element({name}) {
    const dispatch = useDispatch();  

    const onOpenModalHandler = (e) =>{
        e.preventDefault();        
        e.stopPropagation();
        dispatch(openModal())
    }

    const [element, setElement] = useState("");
    useEffect(() => {
        setElement(
            elementFinder(name)
        );
    }, [name]);

    return(
        <div className="element">  
            {name?<button className="actionBtn" onClick={onOpenModalHandler}> Action</button>:<></>} 
            <div>{element}</div>                  
        </div>     
    )
}
