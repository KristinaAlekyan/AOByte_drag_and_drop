import "./modal.css";

export default function Modal({modalIsOpend}) {
    return(
        <>
            {modalIsOpend?<div >  Modal  </div>: <></>}
        </>
    )
}
