import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Button from './button';

export default function App() {
  const [myObject, setmyObject] = useState({
    Text: 'Welcome to Wassim react state tutorial',
    btn1Text: ' Click to Subscribe'
  });

  const onClick = () => {
    setmyObject((previousState) => {
      return { ...previousState, btn1Text: 'Subscribed' };
    });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h4>{myObject.Text}</h4>
      <Button Text={myObject.btn1Text} onClicked={onClick} />
    </div>
  );
}
