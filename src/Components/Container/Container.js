import { useSelector } from "react-redux";

import "./container.css";
import Element from "../Element/Element";
import { draggableSelector } from "../../redux/dragAndDropSlice";

function Container({ onDropHandler, dropElements }) {

    const draggable = useSelector(draggableSelector);

    const onDragOverHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div className='Dropable'>
            <h2>Container</h2>
            <div className="Box">
                {dropElements.map((item, i) =>
                    <div
                        className={"cell " + ((draggable && item === 1) ? "activ" : "") + (typeof item !== "number" ? "dropped" : "")}
                        key={i}
                        onDrop={(e) => onDropHandler(e, i)}
                        draggable={draggable}
                        onDragOver={(item === 1) ? onDragOverHandler : undefined}
                    >
                        {item ?
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