import { useState } from "react";

function Articles({ articles }) {
  const [originalArticles] = useState([...articles]);
  const [sortedArticles, setSortedArticles] = useState(() =>
    [...articles].sort((a, b) => b.upvotes - a.upvotes)
  );

  const sortByUpvotes = () => {
    const sorted = [...originalArticles].sort((a, b) => b.upvotes - a.upvotes);
    setSortedArticles(sorted);
  };

  const sortByDate = () => {
    const sorted = [...originalArticles].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setSortedArticles(sorted);
  };

  return (
    <div className="p-6">
      {/* Buttons Section */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={sortByUpvotes}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
        >
          Most Upvoted
        </button>
        <button
          onClick={sortByDate}
          className="px-6 py-3 bg-emerald-500 text-white rounded-lg shadow-md hover:bg-emerald-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
        >
          Most Recent
        </button>
      </div>

      {/* Articles Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase border-b">
                Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase border-b">
                Upvotes
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-gray-600 uppercase border-b">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedArticles.map((article) => (
              <tr
                key={`${article.title}-${article.date}`}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 border-b text-gray-800 font-medium">
                  {article.title}
                </td>
                <td className="px-6 py-4 border-b text-gray-600">
                  {article.upvotes}
                </td>
                <td className="px-6 py-4 border-b text-gray-600">
                  {article.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Question2() {
  const sampleArticles = [
    {
      title: "Understanding React Hooks",
      upvotes: 245,
      date: "2024-03-15"
    },
    {
      title: "JavaScript ES6 Features",
      upvotes: 189,
      date: "2024-03-20"
    },
    {
      title: "CSS Grid vs Flexbox",
      upvotes: 156,
      date: "2024-03-12"
    },
    {
      title: "Node.js Best Practices",
      upvotes: 298,
      date: "2024-03-18"
    },
    {
      title: "TypeScript for Beginners",
      upvotes: 167,
      date: "2024-03-22"
    },
    {
      title: "Building RESTful APIs",
      upvotes: 203,
      date: "2024-03-10"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Article Sorting
        </h1>
        <Articles articles={sampleArticles} />
      </div>
    </div>
  );
}
