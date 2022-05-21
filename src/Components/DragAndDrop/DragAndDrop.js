import "./dragAndDrop.css";
import { useState } from "react"
import Sidebar from "../Sidebar/Sidebar.js";
import Container from "../Container/Container";

export const initalSidebarElements = [
  {   
      id: 1,
      name: "button",
      type: "button"
  },
  {   
      id: 2,
      name: "input",
      type: "input"
  },
  {   
      id: 3,
      name: "textarea",
      type: "textarea"
  },
  {   
      id: 4,
      name: "select",
      type: "select"
  },
  {   
      id: 5,
      name: "checkbox",
      type: "checkbox"
  },
  {   
      id: 6,
      name: "radio",
      type: "radio"
  }
];
function DragAndDrop() {
    const [sidebarElements, setSidebarElements] = useState(initalSidebarElements)
    const [dragElement, setDragElement] = useState('');
    const [dropElements, setDropElements] = useState([]);
    const [dragable, setDragable] = useState(false);

    const dragStart = (e, type) => {
        e.stopPropagation();        
        console.log("Start", type);
        setDragElement(e.target);
        setDragable(true);
    }

    const dragEnd = (e) => {
        e.stopPropagation();      
        setDragable(false);    
        
        console.log("End")  
    }

    const drop = (e) => {      
        e.stopPropagation();
        console.log("Drop");
    }


  return (
    <div className="DragAndDropContainer">  
        <Sidebar
            sidebarElements = {sidebarElements}
            dragStart={dragStart}
            dragEnd={dragEnd}
        />
        <Container        
            sidebarElements={sidebarElements}
            drop={drop}
            dragElement={dragElement}
            dropElements={dropElements}
            dragable={dragable}
        />
    </div>
  );
}

export default DragAndDrop;
