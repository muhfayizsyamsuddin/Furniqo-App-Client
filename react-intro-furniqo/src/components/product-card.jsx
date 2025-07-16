function ProductCard({ name, price, image, category }) {
  return (
    <>
      {/* MAIN CONTENT */}
      <a href="detail.html" className="text-decoration-none text-dark">
        <div className="card h-100">
          <img
            src={image}
            className="img-fluid product-image shadow-sm"
            alt="Produk"
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="text-muted mb-1">{price}</p>
            <span className="badge bg-secondary">{category}</span>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
