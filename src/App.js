
import React from 'react';
import './App.css';
import Product from './Product'; // Assuming you name your product file as product.js
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import { Card } from 'react-bootstrap';

const firstName = 'YourFirstName'; // Replace with your first name

function App() {
  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : 'there'}!</p>
      {firstName && <img src="path_to_your_image" alt="Your Image" />}
    </div>
  );
}

export default App;
