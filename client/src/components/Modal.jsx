import { useState } from "react";


const Modal = ({ data }) => {
    const [coord, setCoord] = useState(null)
    const handleMouseMove = (e) => {
        setCoord({ x: e.screenX, y: e.screenY }); 
    };
    console.log(coord)
    return(
        <div>
            <img onClick={handleMouseMove} src={data.path} alt={data.name} />
        </div>
    )
}

export default Modal;