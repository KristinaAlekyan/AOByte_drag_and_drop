import { useDispatch } from "react-redux";

import "./sidebar.css";
import { dragStart, dragEnd } from "../../redux/dragAndDropSlice";
import { sidebarElements } from "../../config";

function Sidebar({ onReDoHandler }) {
    const dispatch = useDispatch();

    const onDragStartHandler = (e) => {
        e.stopPropagation();
        const elementType = e.target.textContent;
        dispatch(dragStart({ elementType }));
    }

    const onDragEndHandler = (e) => {
        e.stopPropagation();
        dispatch(dragEnd())
    }

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