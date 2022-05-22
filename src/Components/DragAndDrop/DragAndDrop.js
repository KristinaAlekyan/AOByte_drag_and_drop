import "./dragAndDrop.css";
import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar.js";
import Container from "../Container/Container";


export const initalSidebarElements = [
    {   
        id: 1,
        name: "input",
        type: "button"
    },
    {   
        id: 5,
        name: "input",
        type: "checkbox"
    },
    {   
        id: 6,
        name: "input",
        type: "radio"
    }
];

function DragAndDrop() {
    const   [sidebarElements] = useState(initalSidebarElements)
    const   [dragElement, setDragElement] = useState('');
    const   [dropElements, setDropElements] = useState([0, 0, 0, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                        0, 0, 1, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                    ]);
    const   [dropLastElement, setDropLastElement] = useState(-1);
    const   [dragable, setDragable] = useState(false);
  
    const dragStart = (e) => {
        e.stopPropagation();          
        setDragElement(e.target.children[1]);
        setDragable(true);
    }
  
    const dragEnd = (e) => {
        e.stopPropagation();
    }
    const dragOver = (e) => {       
        e.preventDefault();
        e.stopPropagation();  
    }
  
    const drop = (e, index) => {      
        e.preventDefault();
        e.stopPropagation();
        const dropElems = [...dropElements]

        for(let i = 0; i < dropElems.length; i++){
            if(i === index){
                dropElems[i] = {id: index, name: dragElement.name, type: dragElement.type}
            } else if(  i === index - 1 || 
                        i === index + 1 || 
                        i === index - 5 || 
                        i === index + 5 ) 
                    {
                        if(dropElems[i]=== 0){
                            dropElems[i] = 1
                        }                
                    }
        }
        setDropElements(dropElems);
        setDropLastElement(index);
    }

    const onReset = (e) =>{            
        e.preventDefault();
        e.stopPropagation();
        const dropElems = [...dropElements]

        for(let i = 0; i < dropElems.length; i++){
            if(i === dropLastElement){
                dropElems[i] = 1
            } else if(  (i === dropLastElement - 1 || 
                        i === dropLastElement + 1 ||
                        i === dropLastElement - 5 ||
                        i === dropLastElement + 5) && (dropElems[i] === 1)
            ) dropElems[i]= 0
        }

        setDropElements(dropElems);
    }
  
  
    return (
      <div className="DragAndDropContainer">  
          <Sidebar
              sidebarElements = {sidebarElements}
              dragStart={dragStart}
              dragEnd={dragEnd}
              onReset={onReset}
          />
          <Container        
              sidebarElements={sidebarElements}
              drop={drop}
              dragOver={dragOver}
              dragElement={dragElement}
              dropElements={dropElements}
              dragable={dragable}
          />
      </div>
    );
}
  
export default DragAndDrop;