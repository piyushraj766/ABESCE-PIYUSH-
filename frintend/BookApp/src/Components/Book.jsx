import React, { useState } from 'react';
import './book.css';

function Book(props) {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count === 10) {
      alert("Maximum 10 books allowed!");
      return;
    }
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div id="book">
      <img
        src="https://png.pngtree.com/png-vector/20241203/ourlarge/pngtree-a-old-book-image-png-image_14561970.png"
        alt="no"
        height={100}
        width={100}
      />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>
      <div>
        <button onClick={increase}>+</button>
        <span>{count}</span>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default Book;
