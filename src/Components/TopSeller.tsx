import React, { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSeller = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();
        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };
    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthors) =>
      prevAuthors.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mx-5 mt-20 border w-[23rem] rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-5 text-gray-800">🏆 Top Sellers</h2>

      {authors.length === 0 ? (
        <p className="text-gray-500 text-sm">Loading sellers...</p>
      ) : (
        <ul>
          {authors.map((author, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-4 p-2 rounded-lg hover:bg-gray-50 transition"
            >
              {/* Avatar + Name */}
              <section className="flex items-center">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-12 h-12 rounded-full border border-gray-200 shadow-sm"
                />
                <span className="ml-4 font-medium text-gray-700">
                  {author.name}
                </span>
              </section>

              {/* Follow/Unfollow Button */}
              <button
                onClick={() => handleFollowClick(index)}
                className={`py-1 px-4 rounded-full text-sm font-medium transition ${
                  author.isFollowing
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {author.isFollowing ? "Unfollow" : "Follow"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopSeller;
