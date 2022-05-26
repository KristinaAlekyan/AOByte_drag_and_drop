import "./element.css";
import { useEffect, useState } from "react";
import { elementFinder } from "../../utils";

export default function Element({name}) {
    const [element, setElement] = useState("");
    useEffect(() => {
        setElement(
            elementFinder(name)
        );
    }, [name]);

    return(
        <div className="element">  
            {name?<button className="actionBtn"> Action</button>:<></>} 
            <div>{element}</div>                  
        </div>
        
    )
}
