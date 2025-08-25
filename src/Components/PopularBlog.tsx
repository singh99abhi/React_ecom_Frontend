import { MessageCircle, ThumbsUp } from 'lucide-react'
import React from 'react'

const PopularBlog = () => {
   const blogs= [
  {
    "title": "10 Things Every Software Engineer Should Know",
    "author": "Quincy Larson",
    "likes": 25000,
    "comments": 3000
  },
  {
    "title": "How I Built a $1M+ Side Project",
    "author": "Pieter Levels",
    "likes": 40000,
    "comments": 5000
  },
  {
    "title": "The Cathedral and the Bazaar",
    "author": "Eric S. Raymond",
    "likes": 50000,
    "comments": 10000
  },
  {
    "title": "Why Software Is Eating the World",
    "author": "Marc Andreessen",
    "likes": 30000,
    "comments": 4000
  },
  {
    "title": "You Are Not Google",
    "author": "Phil Calçado",
    "likes": 20000,
    "comments": 2000
  },
  {
    "title": "A Beginner’s Guide to React",
    "author": "Dan Abramov",
    "likes": 35000,
    "comments": 6000
  },
  {
    "title": "The Law of Leaky Abstractions",
    "author": "Joel Spolsky",
    "likes": 45000,
    "comments": 7000
  },
  {
    "title": "The Rise of Tailwind CSS",
    "author": "Adam Wathan",
    "likes": 15000,
    "comments": 1200
  },
  {
    "title": "The Missing Semester of Your CS Education",
    "author": "MIT Students",
    "likes": 60000,
    "comments": 8000
  },
  {
    "title": "Why You Should Learn Rust in 2025",
    "author": "Steve Klabnik",
    "likes": 10000,
    "comments": 900
  }
]

  return (
    <div className='bg-white p-5 w-[23rem] mt-4 border ml-5 rounded'>
        <h2 className='text-xl font-bold mb-5 '>Popular Blogs</h2>
        <ul>
            {blogs.map((blog,index)=>(
                <li key={index} className='mb-4 '>
                    <div className='flex justify-between items-center'>
                        <span className='font-bold mb-2'>{blog.title}</span>
                    </div>
                    <span className='text-gray-600'>Publish By {blog.author}</span>
                    <div className='flex items-center mt-2'>
                        <MessageCircle size={16}></MessageCircle>
                        <span className='text-gray-500 mr-5 ml-1'>{blog.likes}</span>
                        <ThumbsUp size={16}></ThumbsUp>
                        <span className='text-gray-500 mr-2 ml-2'>
                            {blog.comments}
                        </span>
                    </div>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default PopularBlog