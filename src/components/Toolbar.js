import { useState } from "react";
import "@fontsource/poppins"; // Importando a fonte Poppins

export default function Toolbar({ fetchPosts, generateHTML }) {
  const [loading, setLoading] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);

  const handleFetchPosts = async () => {
    setLoading(true);
    await fetchPosts();
    setLoading(false);
    setPostsLoaded(true);
  };

  return (
    <div className="mt-4 flex gap-2 font-poppins">
      <button
        onClick={handleFetchPosts}
        disabled={loading}
        className={`px-6 py-3 whitespace-nowrap rounded-3xl flex items-center gap-2 ${loading ? "bg-gray-400" : "bg-[#63acd5] text-white whitespace-nowrap "}`}
      >
        {loading && (
          <div className="w-5 h-5 whitespace-nowrap border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
        {loading ? "Loading..." : "Get content"}
      </button>
      <button
        onClick={() => generateHTML()}
        disabled={!postsLoaded}
        className={`px-6 py-3 rounded-3xl whitespace-nowrap ${postsLoaded ? "bg-[#63acd5] text-white" : "bg-gray-400"}`}
      >
        Generate HTML
      </button>
    </div>
  );
}
