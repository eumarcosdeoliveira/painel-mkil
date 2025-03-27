import { useState } from "react";
import PostCard from "../components/PostCard";
import Preview from "../components/Preview";
import Toolbar from "../components/Toolbar";
import { generateNewsletterHTML } from '../components/Newsletter/newsletterTemplate';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");
  const [preheader, setPreheader] = useState("");

  const fetchPosts = async () => {
    const response = await fetch("https://n8n.harmonyservices.com.br/webhook/dddad635-e5a9-428f-af07-dd6127c428ee");
    const data = await response.json();
    setPosts(data.map(post => ({ ...post, isSettlement: false }))); // Adiciona isSettlement inicialmente como false
    setSelectedPosts(data.map((post) => post.post_id));
  };

  const toggleSettlement = (postId) => {
    setPosts(posts.map(post => 
      post.post_id === postId ? { ...post, isSettlement: !post.isSettlement } : post
    ));
  };

  const generateHTML = () => {
    const selected = posts.filter((post) => selectedPosts.includes(post.post_id));
    const html = generateNewsletterHTML(selected, preheader);
    setHtmlContent(html);
  };

  return (
    <div className="flex h-screen max-h-screen bg-gray-100 p-6">
      <div className="flex flex-col h-full w-2/4 p-6">
        <img src="logo.svg" alt="Logo" className="mb-8 w-40" />

        {/* Campo para inserir o Preheader */}
        <div className="mb-4">
          <input
            type="text"
            value={preheader}
            onChange={(e) => setPreheader(e.target.value)}
            className="border rounded-lg p-2 w-full"
            placeholder="Digite o preheader..."
          />
        </div>

        <div className="flex flex-col h-full max-h-full bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
          <div className="flex-1 overflow-auto space-y-4">
            {posts.map((post) => (
              <PostCard
                key={post.post_id}
                post={post}
                selected={selectedPosts.includes(post.post_id)}
                onSelect={() =>
                  setSelectedPosts(
                    selectedPosts.includes(post.post_id)
                      ? selectedPosts.filter(id => id !== post.post_id)
                      : [...selectedPosts, post.post_id]
                  )
                }
                onToggleSettlement={() => toggleSettlement(post.post_id)} // Passa a função para o PostCard
              />
            ))}
          </div>
        </div>
        <Toolbar fetchPosts={fetchPosts} generateHTML={generateHTML} />
      </div>

      <div className="w-3/4 p-6 bg-white rounded-2xl shadow-lg ml-4 flex flex-col h-full">
        <Preview htmlContent={htmlContent} />
      </div>
    </div>
  );
}
