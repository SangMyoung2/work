import React, { useState } from 'react';
import '../assets/css/reset.css'
import './style.css'
import GalleryView from './GalleryView';
import GalleryList from './GalleryList';
import data from '../assets/api/image.js'

const Gallery = () => {

    const [gallery,setGallery] = useState(data)
    const [img,setImg] = useState(data[0])

    const onView = (id) => {
        setImg(gallery.find(item=>item.id===id))
    }

    return (
        <div className='con-box'>
            <GalleryList gallery={gallery} img={img} onView={onView}/>
            <GalleryView img={img}/>
        </div>
    );
};

export default Gallery;