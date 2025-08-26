import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
}

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      axios
        .get<Product>(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(`Error fetching the data: ${error}`);
        });
    }
  }, [id]);

  if (!product) {
    return <h1 className="text-xl font-semibold text-gray-700 p-5">Loading...</h1>;
  }

  return (
    <div className="p-6 w-full md:w-[70%] lg:w-[60%] mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        ← Back
      </button>

      {/* Product Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-auto rounded-xl shadow-md"
          />
          {/* Thumbnail Images (if multiple exist) */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {product.images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title}-${idx}`}
                className="w-20 h-20 object-cover rounded-md border hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              {product.title}
            </h1>
            <p className="mb-4 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-8 mt-4 text-lg">
              <p className="font-semibold text-green-600">
                Price: ${product.price}
              </p>
              <p className="text-yellow-600 font-medium">
                ⭐ {product.rating}
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
