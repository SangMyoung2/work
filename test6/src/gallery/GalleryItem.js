import React from 'react';

const GalleryItem = ({item,onView}) => {

    const {id,image,title} = item


    return (
        <div>
            <li onClick={()=>onView(id)}><img src={image} alt={title} /></li>
        </div>
    );
};

export default GalleryItem;