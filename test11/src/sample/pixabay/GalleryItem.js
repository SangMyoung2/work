import React from 'react';
import styled from 'styled-components'
import { ImageItem } from '../styled/pixabaycss';


const GalleryItem = ({item}) => {

    const {views,downloads,likes,user,webformatURL,tags} = item

    return (
        <ImageItem>
            <img src={webformatURL} alt={user}/>
            <h3>{user}</h3>
            <ul>
                <li><em>조회수: {views}</em></li>
                <li><em>다운로드: {downloads}</em></li>
                <li><em>좋아요: {likes}</em></li>
            </ul>
        </ImageItem>
    );
};

export default GalleryItem;