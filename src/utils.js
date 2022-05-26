export const elementFinder = (name, index) => {
    if (name === "button") {
        return <button index={index}> button </button>;
    } else if (name === "input") {
        return <input index={index}></input>;
    } else if (name === "textarea") {
        return <textarea index={index} ></textarea>;
    } else if (name === "select") {
        return <select index={index} > <option>options</option></select>
    } else if (name === "radio") {
        return <input index={index} type="radio"></input>;
    } else if (name === "checkbox") {
        return <input index={index} type="checkbox"></input>;
    } else {
        return <></>;
    } 
};