import React,{useState} from 'react';
import img0 from '../s_images/suzi0.jpg'
import img1 from '../s_images/suzi1.jpg'

import images from '../assets/api/images';

//이미지 가져오는 3가지 방법
const Test2 = () => {

    //images.js 파일에 데이터를 배열로 담아 가져온다
    const [data,setData] = useState(images)

    return (
        <div>

            {/* src에 있는 이미지는 import를 해야한다. */}
            <img src={img0} alt='' width={300}/>
            <img src={img1} alt='' width={300}/>

            <hr/>
            
            {/* public에 있는 이미지는 import하지 않아도 상관없다. */}
            <img src='./p_images/suzi3.jpg' alt='' width={300}/>
            <img src='./p_images/suzi4.jpg' alt='' width={300}/>

            <hr/>

            {/* images.js 파일에서 가져와 이미지 데이터 한번에 뿌리기 */}
            {
                data.map(item=><article key={item.id}>
                    <h3>이름: {item.title}</h3>
                    <img src={item.image} alt='' width={300}/>
                </article>)
            }
        </div>
    );
};

export default Test2;