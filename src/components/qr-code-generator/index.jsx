import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './style.css';

const QrCodeGenerator = () => {
  const [input, setInput] = useState('');
  const [qrCode, setQrCode] = useState('');

  const handleGenerateQRCode = () => {
    setQrCode(input);
    setInput('');
  };

  return (
    <div className="qr-code-container">
      <div className='input-container'>
        <input
          type="text"
          name="qr-code"
          placeholder="Type value here..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="button" onClick={handleGenerateQRCode} disabled={false}>
          Generate QRCode
        </button>
      </div>
      <div className='qr-code-img'>
        <QRCode id="qr-code" value={qrCode} size={300} />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
