import { useState } from "react";
import "@fontsource/poppins";

export default function Toolbar({ fetchPosts, generateHTML, startDate, endDate, preheader }) {
  const [loading, setLoading] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);

  // Verifica se os campos obrigatórios estão preenchidos
  const isFormValid = startDate && endDate && preheader.trim() !== "";

  const handleFetchPosts = async () => {
    if (!isFormValid) return; // Evita execução se os campos estiverem vazios
    setLoading(true);
    await fetchPosts();
    setLoading(false);
    setPostsLoaded(true);
  };

  return (
    <div className="mt-4 flex gap-2 font-poppins">
      <button
        onClick={handleFetchPosts}
        disabled={loading || !isFormValid}
        className={`px-6 py-3 whitespace-nowrap rounded-3xl flex items-center gap-2 ${
          loading || !isFormValid ? "bg-gray-400" : "bg-[#63acd5] text-white"
        }`}
      >
        {loading && (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        )}
        {loading ? "Loading..." : "Get Content"}
      </button>

      <button
        onClick={() => generateHTML()}
        disabled={!postsLoaded}
        className={`px-6 py-3 rounded-3xl whitespace-nowrap ${
          postsLoaded ? "bg-[#63acd5] text-white" : "bg-gray-400"
        }`}
      >
        Generate HTML
      </button>
    </div>
  );
}
