export default function Toolbar({ fetchPosts, generateHTML }) {
    return (
      <div className="mb-4 flex gap-2">
        <button onClick={fetchPosts} className="bg-blue-500 text-white px-4 py-2 rounded">
          Get content
        </button>
        <button onClick={generateHTML} className="bg-purple-500 text-white px-4 py-2 rounded">
          Generate HTML
        </button>
      </div>
    );
  }
  