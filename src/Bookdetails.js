import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; 
import axios from 'axios';
import './BookDetails.css'; // You can create a CSS file for BookDetails styles

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    console.log('bookId:', bookId); // Check if bookId is being correctly passed
    axios
      .get(`http://127.0.0.1:5000/books/${bookId}`)
      .then((response) => {
        console.log('Fetched data:', response.data); // Log the fetched data
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookId]);
  

  return (
    <div className="container">
      <nav className="nav">
        <div className="book">BOOKHIVE</div>
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/cart" className="cart">
          Cart
        </Link>
      </nav>
      <div className="book-details-content">
        {book ? (
          <div className="book-details">
            <img src={book.image} alt={book.title} />
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Price: ${book.price}</p>
            <p>Description: {book.description}</p>
            <button className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="info">
        <h1>Click on the book for more info</h1>
      </div>
      <div className="footer">
        <ul>
          <li>
            <b>Mail us:</b>
          </li>
          <li>example@email.com</li>
        </ul>
        <ul>
          <li>
            <b>Careers:</b>
          </li>
          <li>Information about careers.</li>
        </ul>
        <ul>
          <li>
            <b>Policy:</b>
          </li>
          <li>Our policy is very heretically banal with profound but fastidious pointers. So do not be polemical about it.</li>
        </ul>
        <ul>
          <li>
            <b>Owners:</b>
          </li>
          <li>Alok</li>
          <li>Ahesh</li>
          <li>Aditi</li>
          <li>A prasad</li>
          <li>Aditya</li>
        </ul>
        <ul>
          <li>© 2023, bookhive.com, Inc. or its affiliates</li>
        </ul>
      </div>
    </div>
  );
}

export default BookDetails;
