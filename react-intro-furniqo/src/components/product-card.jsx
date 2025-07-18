import { Link } from "react-router";

function ProductCard({ id, name, price, imageUrl, category }) {
  return (
    <>
      {/* MAIN CONTENT */}
      <Link
        to={`/pub/products/${id}`}
        className="text-decoration-none text-dark"
      >
        <div className="card  h-100">
          <img
            src={imageUrl}
            className="img-fluid product-image shadow-sm"
            alt="Produk"
            style={{ objectFit: "cover", height: 250 }}
          />
          <div className="card-body">
            <h5 className="card-title text-align">{name}</h5>
            <p className="text-light">
              {price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <div className="mb-auto">
              <span className="badge bg-secondary mt-auto">
                {category.name}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
