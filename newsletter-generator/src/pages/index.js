import { useState } from "react";
import PostCard from "../components/PostCard";
import Preview from "../components/Preview";
import Toolbar from "../components/Toolbar";



export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");

  const fetchPosts = async () => {
    const response = await fetch("https://n8n.harmonyservices.com.br/webhook/dddad635-e5a9-428f-af07-dd6127c428ee");
    const data = await response.json();
    setPosts(data);
    setSelectedPosts(data.map((post) => post.post_id));
  };

  const generateHTML = () => {
    const selected = posts.filter((post) => selectedPosts.includes(post.post_id));
    const html = `
      <html>
      <head><style>
        body { font-family: Arial, sans-serif; }
        .post { margin: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1); }
        img { width: 100%; border-radius: 8px; }
      </style></head>
      <body>
        ${selected.map((post) => `
          <div class="post">
            <h2>${post.title}</h2>
            ${post.media_type !== "WEBSITE_POST" ? `<img src="${post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}" />` : ""}
            <p>${post.caption}</p>
            <a href="${post.permalink}">Read More</a>
          </div>
        `).join("")}
      </body>
      </html>
    `;
    setHtmlContent(html);
  };

  return (
    <div className="flex h-screen max-h-screen bg-gray-100 p-6">
      <div className="flex flex-col h-full w-2/4 p-6">
        <img src="logo.svg" alt="Logo" className="mb-8 w-40" />
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
