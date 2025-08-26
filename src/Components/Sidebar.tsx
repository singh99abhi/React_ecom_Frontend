import React, { useEffect, useState } from "react";
import { useFilter } from "./Filter";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxprice,
    keyword,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((p) => p.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error while fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxprice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeyword = (word: string) => {
    setKeyword(word);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxprice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-64 p-6 h-screen bg-gray-50 border-r overflow-y-auto">
      <h1 className="text-2xl font-bold mb-8 text-gray-900">🛍️ React Store</h1>

      {/* Search */}
      <input
        type="text"
        className="border border-gray-300 rounded px-3 py-2 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="🔍 Search product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Price Filter */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">💰 Price Range</h2>
        <div className="flex gap-2">
          <input
            type="number"
            className="border border-gray-300 px-3 py-2 w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="number"
            className="border border-gray-300 px-3 py-2 w-1/2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">📦 Categories</h2>
        {categories.map((category, index) => (
          <label
            key={index}
            className="block mb-2 cursor-pointer text-gray-700 hover:text-gray-900"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleRadioChange(category)}
              className="mr-2 w-[16px] h-[16px]"
            />
            {category.toUpperCase()}
          </label>
        ))}
      </div>

      {/* Keywords */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-800">🏷️ Keywords</h2>
        <div className="flex flex-wrap gap-2">
          {keywords.map((word, index) => (
            <button
              key={index}
              onClick={() => handleKeyword(word)}
              className={`px-3 py-1 rounded-full border border-gray-300 text-sm hover:bg-blue-100 transition ${
                keyword === word ? "bg-blue-200 border-blue-400" : ""
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={handleReset}
        className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition font-medium"
      >
        🔄 Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
