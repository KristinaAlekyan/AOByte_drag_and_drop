import "./sidebar.css";

function Sidebar({sidebarElements, dragStart, dragEnd}) {
  return (
    <div className="Sidebar">
        <h1>Sidebar</h1> 
        <form className="SidebarElementsCotianer">
            {sidebarElements.map((element) => (
            <div className="SidebarElement" key={element.id}>
                <label htmlFor={element.id}>{element.name}</label>
                <input                    
                    id={element.id}
                    type={element.type}                      
                    draggable='true'
                    onDragStart={(e) => dragStart(e, element.type)}
                    onDragEnd={dragEnd}
                />                
            </div>
            

            ))}
          </form>
    </div>
  );
}

export default Sidebar;