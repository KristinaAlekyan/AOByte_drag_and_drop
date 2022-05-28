import "./container.css";  
import Element from "../Element/Element" 


function Container({onDropHandler, onDragOverHandler, dropElements, dragable}) {
    console.log(dragable)
    return (
        <div className='Dropable'>                        
            <h2>Container</h2>  
            <div 
                className="Box"
            >
                {dropElements.map((item, i)=>
                    <div
                        className={"cell " + ((dragable && item === 1)? "activ" : "")+(typeof item !=="number"? "dropped" : "")}
                        key={i}
                        onDrop={(e)=>onDropHandler(e,i)}
                        dragable={dragable.toString()}
                        onDragOver={(item === 1)?onDragOverHandler: undefined}                        
                    >
                        {item?
                            <Element
                                name={item.name}
                            />
                        : <div></div>
                        } 
                    </div>                    
                )}
            </div>
        </div>
    );
}
    
export default Container;