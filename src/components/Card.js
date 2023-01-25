import React, { useState } from 'react'
import './card.css';
import { Modal } from './modal';

export const Card = ({book}) => {
  
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <>
      {
        book.map((item)=>{
          let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
          if(thumbnail!== undefined && amount !==undefined)
          {
            return (
            <>
            <div className='card' onClick={()=> {setShow(true);setBookItem(item)}}>
              <img src={thumbnail} alt='imagen' />
              <div className='bottom'>
                <h3 className='tittle'>{item.volumeInfo.title}</h3>
              </div>
            </div>
            </>
            );
          }
          
        })
      }
        <Modal show ={show} item ={bookItem} onClose={()=>setShow(false)}/>
    </>
  )
}

