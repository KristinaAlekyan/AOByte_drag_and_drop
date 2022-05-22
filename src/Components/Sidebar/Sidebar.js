import "./sidebar.css";
import {drawElement} from "../../utils"

function Sidebar({ sidebarElements, dragStart, dragEnd, onReset }) {
    return (
        <div className="Sidebar">
            <h1>Sidebar</h1>
            {sidebarElements.map((element) => (
                <div 
                    className="SidebarElement" 
                    key={element.id}                     
                    draggable
                    onDragStart={dragStart}
                    onDragEnd={dragEnd}                    
                >
                    {drawElement(element)}               
                </div>
            ))}
            <button onClick={onReset}>Reset</button>
            
        </div>
    );
}

export default Sidebar;