import React,{useEffect,useState,useRef,useLayoutEffect} from 'react';
import ItemUser from './ItemUser';

function ListUser({users, onDel, onEdit}){
    return(
        <div>
            <h2 className='users'>고객 리스트</h2>
            <table>
                <colgroup>
                    <col className='w1'/>
                    <col className='w2'/>
                    <col className='w3'/>
                </colgroup>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td>직업</td>
                        <td>관리</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(item=><ItemUser key={item.id} item={item} onDel={onDel} onEdit={onEdit}/>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;