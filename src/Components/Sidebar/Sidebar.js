import "./sidebar.css";

function Sidebar({ sidebarElements, onDragStartHandler, onDragEndHandler, onReDoHandler }) {
    return (
        <div className="Sidebar">
            <h1>Sidebar</h1>
            {sidebarElements.map((element) => (
                <button 
                    className="SidebarElement" 
                    key={element.id}                     
                    draggable
                    onDragStart={onDragStartHandler}
                    onDragEnd={onDragEndHandler}                    
                >
                    {element.name}               
                </button>
            ))}
            <button onClick={onReDoHandler}>Redo</button>
        </div>
    );
}

export default Sidebar;