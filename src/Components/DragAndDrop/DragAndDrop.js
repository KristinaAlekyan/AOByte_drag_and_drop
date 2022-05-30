import "./dragAndDrop.css";
import { useState } from "react";
import { useSelector } from "react-redux";

import Sidebar from "../Sidebar/Sidebar.js";
import Container from "../Container/Container";
import Modal from "../Modal/Modal"
import { dragElementSelector } from "../../redux/dragAndDropSlice";


function DragAndDrop() {
    const dragElement = useSelector(dragElementSelector);

    const [dropElements, setDropElements] = useState([  0, 0, 0, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                        0, 0, 1, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                        0, 0, 0, 0, 0,
                                                    ]);
    const [dropLastElement, setDropLastElement] = useState(-1);


    const onDropHandler = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        const dropElems = [...dropElements];

        for (let i = 0; i < dropElems.length; i++) {
            if (i === index) {
                dropElems[i] = { id: index, name: dragElement.elementType }
            } else if ((i === index - 1 ||
                i === index + 1 ||
                i === index - 5 ||
                i === index + 5) && (dropElems[i] === 0)) {
                dropElems[i] = 1
            }
        }
        setDropElements(dropElems);
        setDropLastElement(index);
    }

    const onReDoHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dropElems = [...dropElements];

        for (let i = 0; i < dropElems.length; i++) {
            if (i === dropLastElement) {
                dropElems[i] = 1
            } else if ((i === dropLastElement - 1 ||
                i === dropLastElement + 1 ||
                i === dropLastElement - 5 ||
                i === dropLastElement + 5) && (dropElems[i] === 1)
            ) { dropElems[i] = 0 }
        }
        setDropElements(dropElems);
    }
    
    return (
        <>
            <div className="DragAndDropContainer">
                <Sidebar
                    onReDoHandler={onReDoHandler}
                />
                <Container
                    onDropHandler={onDropHandler}
                    dropElements={dropElements}
                />
            </div>
            <Modal />
        </>
    );
}

export default DragAndDrop;