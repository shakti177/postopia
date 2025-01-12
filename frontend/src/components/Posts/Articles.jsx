import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import { Skeleton } from "../ui/skeleton";

const Articles = () => {
  const postData = [
    {
      id: 1,
      title: "What I’ll be Wearing this Party Season & the Festive edit",
      category: "Fashion",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/02/fashion1.jpg",
    },
    {
      id: 2,
      title: "An easy Guide to buying Denim & My favorite styles",
      category: "Fashion",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/02/fashion2.jpg",
    },
    {
      id: 3,
      title: "3 New Outfit Formulas To Add To Your Capsule Wardrobe",
      category: "Fashion",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/02/fashion3.jpg",
    },
    {
      id: 4,
      title: "Key to Glowing Skin: 5 tips for hydration and protection",
      category: "Beauty",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/01/beauty3.jpg",
    },
    {
      id: 5,
      title: "Take steps to beautiful Summer Feet with Spa experience",
      category: "Beauty",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/01/beauty4.jpg",
    },
    {
      id: 6,
      title: "Blog Guide: How to Start a Personal Blog on WordPress",
      category: "Technology",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/02/lifestyle7.jpg",
    },
    {
      id: 7,
      title: "3 New Outfit Formulas To Add To Your Capsule Wardrobe",
      category: "Fashion",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/02/lifestyle5.jpg",
    },
    {
      id: 8,
      title: "Winter: 4 Ways to Feel Great during the Cold Weather",
      category: "Lifestyle",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/01/beauty2.jpg",
    },
    {
      id: 9,
      title: "Why you need a Spa Day, Reasons to Get a Package",
      category: "Beauty",
      image:
        "https://wp.w3layouts.com/newsblog/wp-content/uploads/sites/22/2021/01/beauty1.jpg",
    },
  ];

  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="bg-gray-100 dark:bg-black">
        <div className="container mx-auto px-5 md:px-10 py-24">
          <h1>Blog Posts</h1>
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
            {/* Post Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {postData.map((posts) =>
                loading ? (
                  <div key={posts.id}>
                    <Skeleton className="h-[300px] md:w-[350px] rounded-2xl" />
                    <div className="space-y-2 mt-4">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                ) : (
                  <div
                    key={posts.id}
                    className="flex flex-col space-y-4 rounded-3xl bg-white dark:bg-neutral-900 overflow-hidden hover:-translate-y-1 transition-transform duration-300 hover:shadow-lg"
                  >
                    <div className="h-72 w-full overflow-hidden">
                      <img
                        src={posts.image}
                        alt={posts.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-4 p-4">
                      <p className="text-base text-blue-800 bg-blue-200 inline-block px-4 py-1 rounded-full">
                        {posts.category}
                      </p>
                      <h2 className="text-lg font-semibold">{posts.title}</h2>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Side Bar */}
            <div className="basis-[40%] sticky top-28 h-full overflow-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
