import React, { useState } from "react";

const Blog = () => {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      id: 1,
      title: "Building Better Products",
      desc: "Learn how our design and development teams craft experiences users love.",
      author: "Sarah Johnson",
      date: "Aug 15, 2025",
      tag: "Design",
    },
    {
      id: 2,
      title: "The Future of Collaboration",
      desc: "How remote teams are using our tools to stay connected and efficient.",
      author: "David Kim",
      date: "Sept 8, 2025",
      tag: "Productivity",
    },
    {
      id: 3,
      title: "Scaling with Purpose",
      desc: "Behind our company's global expansion strategy and lessons learned.",
      author: "Amara Obi",
      date: "July 28, 2025",
      tag: "Growth",
    },
    {
      id: 4,
      title: "Tech Behind Our Tools",
      desc: "Discover the technologies that power our ecosystem and improve efficiency.",
      author: "Michael Green",
      date: "June 20, 2025",
      tag: "Technology",
    },
    {
      id: 5,
      title: "Team Culture Matters",
      desc: "Explore how culture impacts productivity, creativity, and long-term success.",
      author: "Linda Okoro",
      date: "May 10, 2025",
      tag: "Culture",
    },
  ];

  const filteredBlogs = blogs.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="blog" className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Insights, updates, and stories from our team — stay informed about
          product updates, design trends, and company culture.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
            >
              <span className="text-sm font-medium text-blue-600">
                {blog.tag}
              </span>
              <h3 className="font-semibold text-xl mt-2 mb-2 hover:text-blue-600 transition">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredBlogs.length === 0 && (
          <p className="text-gray-500 mt-8">No articles found.</p>
        )}

        {/* Load More Button */}
        <div className="mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
