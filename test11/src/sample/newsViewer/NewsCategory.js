import React from 'react';
import { CategoryBlock,categories,CategoryLink } from '../styled/newscss';

const NewsCategory = ({selectText,category}) => {
    return (
        <CategoryBlock>
            {
                categories.map(item=>(
                    <CategoryLink key={item.name} active={category===item.name} onClick={()=>selectText(item.name)}>
                        {item.text}
                    </CategoryLink>
                ))
            }
        </CategoryBlock>
    );
};

export default NewsCategory;