import React from 'react';
import './book.css';

function Book(props) {
  return (
    <div className="book">
      <img 
        src="https://imgs.search.brave.com/nAyP2U-m798f3z2pXCjATrb52fqeK3cn1TN-ZRHGKgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZmxhdC13b3JsZC1i/b29rLWRheS1pbGx1/c3RyYXRpb25fMjMt/MjE0OTMxMTEzMi5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw/JnE9ODA" 
        height={100} 
        width={100} 
        alt="Book"
      />
      
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>
      <h1>250</h1>

      <div>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  );
}

export default Book;
