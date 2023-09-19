import React from 'react';
import Numeral from 'numeral'

import {
    AiOutlineCaretUp,
    AiOutlineCaretDown,
    AiOutlineMinus
} from 'react-icons/ai'

const MovieItem = ({item, onOver}) => {

    //순위,영화명,매출액,관객수,증감률
    const {rank,movieNm,salesAmt,audiCnt,rankInten} = item
    return (
        <tr onMouseOver={()=>onOver(rank)}>
            <td>{rank}</td>
            <td>{movieNm}</td>
            <td>{Numeral(salesAmt).format('0,0')}</td>
            <td>{Numeral(audiCnt).format('0,0')}</td>
            <td>
                {rankInten}
                {rankInten ===0 && <AiOutlineMinus/>}
                {rankInten >0 && <AiOutlineCaretUp color='red'/>}
                {rankInten <0 && <AiOutlineCaretDown style={{color:'blue'}}/>}
            </td>
        </tr>
    );
};

export default MovieItem;