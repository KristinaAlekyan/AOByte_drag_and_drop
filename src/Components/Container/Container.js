import { drawElement } from "../../utils";
import "./container.css";      


function Container({drop, dragOver, dropElements, draggable}) { 
    return (
        <div className='Dropable'>                        
            <h2>Container</h2>  
            <div 
                className="Box"
            >
                {dropElements.map((item, i)=>
                    <div 
                        className= {"cell " + ((item === 1)? "activ" : "")}
                        key = {i}
                        onDrop={(e)=>drop(e,i)}                        
                        draggable={draggable}                         
                        onDragOver={dragOver}                        
                    > 
                        { typeof item !== "number"?
                             drawElement(item): <></>
                        }
                      
                    </div>                    
                )}
            </div>
        </div>
    );
}
    
export default Container;