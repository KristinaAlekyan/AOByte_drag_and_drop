import "./container.css";            

function Container({drop, dropElements, elem}) { 
    return (
        <div className='Dropable'>                        
            <h2>Container</h2>
            <div className="Box" 
                onDrop={drop}
            />
        </div>
    );
}
    
export default Container;