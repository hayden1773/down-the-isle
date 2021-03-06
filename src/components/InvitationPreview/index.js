import "./style.css"
import {motion} from 'framer-motion'
import {useEffect, useState, useRef} from 'react'


// import image from data array of pictures
import images from "./imagedata"


function InvitationPreview(){
    const [width, setwidth] = useState(0);
    const carousel = useRef();

    useEffect(()=> {
        
        setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);
    return(
        <div className="PreviewImg">
            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
                {images.map(image => {
                    return(
                        <motion.div className="item" key={image}>
                            <img src={image} alt="" />

                        </motion.div>
                        
                    );
                })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default InvitationPreview