import React, {useEffect, useState} from 'react';
import './style.css';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomNumberUtil = (length) => {
    return Math.floor(Math.random() * length);
  };

  useEffect(() => {
    handleCreateRandamColor();
  }, [typeOfColor]);

  const handleCreateRandamColor = () => {
    if (typeOfColor === 'hex') {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'D', 'E', 'F'];
      let hexColor = '#';
      for (let i = 0; i < 6; i++) {
        hexColor += hex[randomNumberUtil(hex.length)];
      }
      setColor(hexColor);
    } else {
      const r = randomNumberUtil(256);
      const g = randomNumberUtil(256);
      const b = randomNumberUtil(256);
      setColor(`rgb(${r},${g},${b})`);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: color,
      }}>
      <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create Rgb Color</button>
      <button onClick={handleCreateRandamColor}>Genrate Random Color</button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          color: 'white',
          height: '90vh',
        }}>
        <h3 style={{fontSize: '40px'}}>
          {typeOfColor === 'hex' ? 'Hex Color' : 'Rgb Color'}
        </h3>
        <h1 style={{fontSize: '60px'}}>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
