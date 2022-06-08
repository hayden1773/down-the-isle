import React, { useState } from 'react'
import  axios  from 'axios';

import './style.css'



function Cloud() {

    const [imageSelected, setImageSelected] = useState("")
    
    const uploadImage = (e) => {
        e.preventDefault()
        
        console.log(imageSelected)
        const formData = new FormData();
        formData.append("api_key", 391358929415868)
        formData.append("file", imageSelected)
        formData.append("upload_preset", "tnn8k4rj")

        axios.post('https://api.cloudinary.com/v1_1/daxlpyuij/image/upload',
            formData
        ).then((Response) =>
            console.log(Response))

    }
    return (
        <div>
            <input type="file" onChange={(event) => {
                setImageSelected(event.target.files[0])
            }}
            />
            <button onClick={(event) => {uploadImage(event)}}>upload</button>
        </div>
    );
}

export default Cloud;