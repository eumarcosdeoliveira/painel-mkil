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
        .post { margin: 10px; padding: 10px; border: 1px solid #ddd; }
        img { width: 100%; }
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
    <div className="flex h-screen">
      <div className="w-2/3 p-4 overflow-y-scroll">
        <Toolbar fetchPosts={fetchPosts} generateHTML={generateHTML} />
        <div className="grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.post_id} post={post} selected={selectedPosts.includes(post.post_id)}
              onSelect={() => setSelectedPosts(
                selectedPosts.includes(post.post_id)
                  ? selectedPosts.filter(id => id !== post.post_id)
                  : [...selectedPosts, post.post_id]
              )}
            />
          ))}
        </div>
      </div>
      <Preview htmlContent={htmlContent} />
    </div>
  );
}
