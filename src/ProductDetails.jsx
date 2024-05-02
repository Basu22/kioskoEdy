const ProductDetails = ({ barcode }) => {
  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>Código de Barras: {barcode}</p>
      {/* Aquí puedes agregar más detalles del producto */}
    </div>
  );
};

export default ProductDetails;