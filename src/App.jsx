import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';
import ProductDetails from './ProductDetails';

function App() {
  const [scannedBarcode, setScannedBarcode] = useState('');
  
  const handleBarcodeScanned = (barcode) => {
      console.log(barcode)
      setScannedBarcode(barcode);
    };

  return (
    <div className="App">
      <h1>Escáner de Códigos de Barras</h1>
      <BarcodeScanner onBarcodeScanned={handleBarcodeScanned} />
      {scannedBarcode && <ProductDetails barcode={scannedBarcode} />}
    </div>
  );
}

export default App;