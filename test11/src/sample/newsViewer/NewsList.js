import React, { useRef } from 'react';
import { NewsListBlock } from '../styled/newscss';
import NewsItem from './NewsItem';

const NewsList = ({data}) => {

    const no = useRef(1)

    return (
        <NewsListBlock>
            {
                data.map(item=><NewsItem key={no.current++} item={item}/>)
            }
        </NewsListBlock>
    );
};

export default NewsList;