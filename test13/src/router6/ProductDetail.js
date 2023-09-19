import React from 'react';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import data from './data';

const ProductDetail = () => {

    const {productID} = useParams()
    const history = useHistory()

    const thisProd = data.find(item=>item.id===productID)

    const onGo = () => {
        history.push('/products')
    }


    return (
        <div>
            <h1>{thisProd.name} 상세페이지</h1>
            <h2>{thisProd.name} 가격: {thisProd.price}원</h2>
            <p>
                <img src={thisProd.photo} alt='' width={450}/>
            </p>
            <p>상품설명: {thisProd.description}</p>
            <button onClick={onGo}>제품목록</button>
        </div>
    );
};

export default ProductDetail;