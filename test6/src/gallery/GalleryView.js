import React from 'react';

const GalleryView = ({img}) => {

    const {title,desc} = img

    return (
        <article>
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    );
};

export default GalleryView;