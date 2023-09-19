import React from 'react';
import { NewsItemBlock } from '../styled/newscss';

const NewsItem = ({item}) => {

    const {title,description,url,urlToImage} = item

    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className='thumbnail'>
                    <a href={url}>
                        <img src={urlToImage} alt='thumbmail'/>
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url}>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;