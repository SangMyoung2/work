import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryList = ({gallery,img,onView}) => {

    const {image,title} = img

    return (
        <article>
            <img src={image} alt={title}/>
            <ul>
                {
                    gallery.map(item=><GalleryItem key={item.id} item={item} onView={onView}/>)
                }

            </ul>
        </article>
    );
};

export default GalleryList;