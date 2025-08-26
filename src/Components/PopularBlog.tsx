import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";

const PopularBlog = () => {
  const blogs = [
    {
      title: "10 Things Every Software Engineer Should Know",
      author: "Quincy Larson",
      likes: 25000,
      comments: 3000,
    },
    {
      title: "How I Built a $1M+ Side Project",
      author: "Pieter Levels",
      likes: 40000,
      comments: 5000,
    },
    {
      title: "The Cathedral and the Bazaar",
      author: "Eric S. Raymond",
      likes: 50000,
      comments: 10000,
    },
    {
      title: "Why Software Is Eating the World",
      author: "Marc Andreessen",
      likes: 30000,
      comments: 4000,
    },
    {
      title: "You Are Not Google",
      author: "Phil Calçado",
      likes: 20000,
      comments: 2000,
    },
    {
      title: "A Beginner’s Guide to React",
      author: "Dan Abramov",
      likes: 35000,
      comments: 6000,
    },
    {
      title: "The Law of Leaky Abstractions",
      author: "Joel Spolsky",
      likes: 45000,
      comments: 7000,
    },
    {
      title: "The Rise of Tailwind CSS",
      author: "Adam Wathan",
      likes: 15000,
      comments: 1200,
    },
    {
      title: "The Missing Semester of Your CS Education",
      author: "MIT Students",
      likes: 60000,
      comments: 8000,
    },
    {
      title: "Why You Should Learn Rust in 2025",
      author: "Steve Klabnik",
      likes: 10000,
      comments: 900,
    },
  ];

  return (
    <div className="bg-white p-6 w-[23rem] mt-4 border ml-5 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
        Popular Blogs
      </h2>
      <ul className="space-y-5">
        {blogs.map((blog, index) => (
          <li
            key={index}
            className="pb-3 border-b last:border-none hover:bg-gray-50 p-2 rounded-md transition"
          >
            <div className="flex flex-col">
              {/* Title */}
              <span className="font-semibold text-gray-900 line-clamp-2">
                {blog.title}
              </span>

              {/* Author */}
              <span className="text-sm text-gray-600">
                Published by <span className="italic">{blog.author}</span>
              </span>

              {/* Likes + Comments */}
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <ThumbsUp size={16} className="mr-1 text-green-600" />
                <span className="mr-4">{blog.likes.toLocaleString()}</span>
                <MessageCircle size={16} className="mr-1 text-blue-600" />
                <span>{blog.comments.toLocaleString()}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlog;
