export const drawElement = (element) => {    
    return (
        <>  
            <label htmlFor={element.id}> {element.type}</label>
            <input             
                style ={{width:50, height:20}}
                type={element.type}
            />
        </>
        
    )
}