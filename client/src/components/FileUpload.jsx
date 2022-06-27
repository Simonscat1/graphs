import Modal from "./Modal";
import { useRef, useState } from "react"

import axios from "axios"

import "../css/FileUpload.css"


const FileUpload = () => {
    function GetData(){
        const [file, setFile] = useState('');
        const [data, getFile] = useState({ name:"", path:"" });
        const [progress, setProgess] = useState(0);
    
        const el = useRef();
        
        const handleChange = (e) => {
            setProgess(0);
            const file = e.target.files[0];
            console.log(file)
            setFile(file)
        }
        const uploadFile = () => {
            const formData = new FormData();

            formData.append('file', file);
            axios.post('http://localhost:5000/upload', formData, {
                onUploadProgress: (ProgressEvent) => {
                    let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                    setProgess(progress);
                }
            }).then((res) => { 
                getFile({
                    name: res.data.name,
                    path: 'http://localhost:5000' + res.data.path
                })
            }).catch(err => console.log(err))}

            if((data.name === '') && (data.path === '')){
                return(
                    <div>
                        <input type="file" ref={el} onChange={handleChange} />
                        <div className="progessBar" style={{ width: progress }}>
                            {progress},
                        </div>
                        <button onClick={uploadFile} className="upbutton">
                            Upload
                        </button>
                    </div>
                )
            }else {
                alert('123')
            }
            return(
                <Modal key={data} data={data}/>
            )
    }
    return (
        <GetData />
    );
    
}

export default FileUpload;