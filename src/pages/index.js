import { useState } from "react";
import PostCard from "../components/PostCard";
import Preview from "../components/Preview";
import Toolbar from "../components/Toolbar";
import { generateNewsletterHTML } from "../components/Newsletter/newsletterTemplate";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [htmlContent, setHtmlContent] = useState("");
  const [preheader, setPreheader] = useState("");
  const [startDate, setStartDate] = useState(""); // Data inicial selecionada
  const [endDate, setEndDate] = useState(""); // Data final selecionada
  const [errors, setErrors] = useState({
    preheader: false,
    startDate: false,
    endDate: false,
  });

  // Função para converter uma data para timestamp Unix (segundos)
  const convertToTimestamp = (dateString) => {
    return dateString ? Math.floor(new Date(dateString).getTime() / 1000) : null;
  };

  // Função para buscar posts no webhook do n8n
  const fetchPosts = async () => {
    if (!preheader || !startDate || !endDate) {
      setErrors({
        preheader: !preheader,
        startDate: !startDate,
        endDate: !endDate,
      });
      return;
    }
  
    const since = convertToTimestamp(startDate);
    const until = convertToTimestamp(endDate);
  
    try {
      const response = await fetch("https://n8n.harmonyservices.com.br/webhook/dddad635-e5a9-428f-af07-dd6127c428ee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ since, until }),
      });
      
      
  
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
  
      const data = await response.json();
      setPosts(data.map((post) => ({ ...post, isSettlement: false })));
      setSelectedPosts(data.map((post) => post.post_id));
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const toggleSettlement = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.post_id === postId ? { ...post, isSettlement: !post.isSettlement } : post
      )
    );
  };
  


  // Gerar HTML da newsletter
  const generateHTML = () => {
    const selected = posts.filter((post) => selectedPosts.includes(post.post_id) || post.isSettlement);
    const html = generateNewsletterHTML(selected, preheader);
    setHtmlContent(html);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen bg-gray-100 p-1 lg:p-6 mx-auto">
      <div className="flex flex-col h-full max-h-[830px] lg:max-h-none lg:w-2/4 p-6">
        <img src="logo.svg" alt="Logo" className="mb-4 lg:mb-8 w-32 lg:w-40 mx-auto lg:mx-0" />

        {/* Campo do Preheader */}
        <div className="mb-4">
          <input
            type="text"
            value={preheader}
            onChange={(e) => {
              setPreheader(e.target.value);
              setErrors((prev) => ({ ...prev, preheader: false })); // Remove erro ao digitar
            }}
            className="border rounded-lg p-2 w-full"
            placeholder="Digite o preheader..."
          />
          {errors.preheader && <span className="text-red-500 text-sm">Preheader é obrigatório</span>}
        </div>

        {/* Seletor de Data */}
        <div className="ml-2 mr-2 mb-4 flex h-full justify-center lg:justify-start">
          
          <div className="flex ml-2 mr-2 p-0 h-full items-center">
            <input
              type="date"
              value={startDate}
              onChange={(e) => {
                setStartDate(e.target.value);
                setErrors((prev) => ({ ...prev, startDate: false }));
              }}
              className="border rounded-lg p-2 w-21"
            />
            <span className="mx-2 text-gray-500">até</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setErrors((prev) => ({ ...prev, endDate: false }));
              }}
              className="border rounded-lg p-2 w-21"
            />
          </div>
          {(errors.startDate || errors.endDate) && (
            <span className="text-red-500 text-sm">Ambas as datas são obrigatórias</span>
          )}
        </div>

        <div className="flex flex-col h-full max-h-full bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
          <div className="flex-1 overflow-auto space-y-4">
            {posts.map((post) => (
             <PostCard
             key={post.post_id}
             post={post}
             selected={selectedPosts.includes(post.post_id)}
             onSelect={() =>
               setSelectedPosts((prev) =>
                 prev.includes(post.post_id)
                   ? prev.filter((id) => id !== post.post_id)
                   : [...prev, post.post_id]
               )
             }
             onToggleSettlement={toggleSettlement} // ✅ Agora a prop é passada corretamente
           />
           
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center lg:justify-start">
          <Toolbar
            fetchPosts={fetchPosts}
            generateHTML={generateHTML}
            startDate={startDate}
            endDate={endDate}
            preheader={preheader}
          />
        </div>
      

      </div>

      <div className="lg:w-3/4 p-6 bg-white rounded-2xl shadow-lg lg:ml-4 flex flex-col h-full mt-4 lg:mt-0">
        <Preview htmlContent={htmlContent} />
      </div>
    </div>
  );
}
