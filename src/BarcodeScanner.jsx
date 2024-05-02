import { useEffect } from 'react';
import Quagga from 'quagga';

const BarcodeScanner = ({ onBarcodeScanned }) => {
  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#barcode-scanner')
      },
      decoder: {
        readers: ["ean_reader", "upc_reader","code_128_reader","ean_13"]
      }
    }, function(err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Quagga initialized successfully.");
      Quagga.start();
    });
    
    Quagga.onDetected((result) => {
      console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
      // Pasar el código de barras detectado al componente padre
      onBarcodeScanned(result.codeResult.code);
      console.log('pasa por aca?')
      
    });

    return () => {
      Quagga.stop();
    };
  }, [onBarcodeScanned]);

  return (
    <div id="barcode-scanner" style={{ width: '100%' }}></div>
  );
};

export default BarcodeScanner;