import { Link } from "react-router-dom";
import React from "react";

interface BookCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
}

const BookCard: React.FC<BookCardProps> = ({ id, title, image, price }) => {
  return (
    <div className="border rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
      <Link to={`product/${id}`} className="block h-full">
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
            ${price}
          </span>
        </div>
        <div className="p-4">
          <h2 className="font-semibold text-lg text-gray-800 line-clamp-2 hover:text-green-700 transition-colors">
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
