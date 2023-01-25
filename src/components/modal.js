import React from 'react';
import './modal.css';
import { FaTimesCircle } from 'react-icons/fa';

export const Modal = ({show, item, onClose}) => {
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
        <div className='modal'>
            <div className='modal-container'>
                <button className='close' onClick={onClose}><FaTimesCircle/></button>
                <div className='modal-cont'>
                    <img src={thumbnail} alt='img'/>
                    <div className='modal-info'>
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                        <a href={item.volumeInfo.previewLink}><button>Mas Contenido</button></a>
                    </div>
                </div>
                <h4 className='description'>{item.volumeInfo.description}</h4>
            </div>
        </div>
    </>
  )
}
