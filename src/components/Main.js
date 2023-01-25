import React, {useState} from 'react';
import './main.css';
import { FaSearch } from 'react-icons/fa';
import { Card } from './Card';
import axios from 'axios';

const Main = () => {
  const [search, setSearche] = useState("");
  const [bookData, setBookData] = useState([]);
  const searchBook = (evt) =>{
    if(evt.key==="Enter")
    {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAgCc1cFlhRxRvNodZ-BLs3Ops4WQnn12A'+'&maxResults=40')
        .then(res=>setBookData(res.data.items))
        .catch(err=>console.log(err))
    }
  }
  return (
    <>
        <div className='header'>
            <div className='row2'>
                <h2>Buscar un libro</h2>
                <div className='search'>
                    <input type='text' placeholder='Ingresa nombre del Libro' 
                    value={search} onChange={e => setSearche(e.target.value)} onKeyPress={searchBook}/>
                    <button><FaSearch/></button>
                </div>
                <img src='./Books1.png' alt='libro'/>
            </div>
        </div>
        <div className='container'>
            
            {
              <Card book = {bookData}/>
            }
              
            </div>
    </>
  )
}

export default Main