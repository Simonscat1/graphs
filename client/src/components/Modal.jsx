import { useState,useEffect } from "react";

const Modal = ({ data }) => {
    const [coord1, setCoord1] = useState(null)
    const [coord2, setCoord2] = useState(null)
    const [counter, setCounter] = useState(0)
    const [post, setPostId] = useState(null)

    function GetPost(cords){
        const isCord = cords.isCord
        const isCord2 = cords.isCord2
        const all_cordinates = [isCord.x0, isCord2.x1, isCord.y0, isCord2.y1].toString()
        useEffect(()=> {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(all_cordinates)
            };

            fetch('http://localhost:5000/newmage', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));
        }, [])
        
    }
    
    const handleClick  = (e) => {

        if(counter === 0){
            setCoord1({x0: e.pageX, y0:e.pageY });
            setCounter(counter + 1)
        }
        if(counter === 1){
            setCoord2({x1: e.pageX, y1:e.pageY });
            setCounter(counter + 1)
        }
    }

    return(
        <div>
            <img onClick={handleClick} src={data.path} alt={data.name} />
            {((coord1 && coord2) !== null) ? (
                <GetPost isCord={coord1} isCord2={coord2} />
            ): (
                <p></p>
            )}
        </div>
        
    )
}

export default Modal;