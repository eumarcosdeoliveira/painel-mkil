export default function PostCard({ post, selected, onSelect, onToggleSettlement }) {
  const isMediaPost = ["VIDEO", "IMAGE", "CAROUSEL_ALBUM"].includes(post.media_type);
  const isSettlement = post.isSettlement;

  return (
    <div
      className={`border p-4 rounded flex items-start cursor-pointer transition ${
        isSettlement ? "bg-red-200 border-red-500" : selected ? "bg-blue-100" : ""
      }`}
      onClick={!isSettlement ? onSelect : undefined} // Impede seleção caso seja Settlement
    >
      {isMediaPost && (
        <div className="w-1/3 aspect-square overflow-hidden rounded-md">
          <img
            src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url}
            alt={post.ia_description}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className={`flex flex-col ${isMediaPost ? "w-2/3 pl-4" : "w-full"}`}>
        <h3 className="font-bold">{post.title}</h3>
        <p className="text-sm mt-2">
          {isMediaPost ? post.ia_description : post.caption}
        </p>
        <a href={post.permalink} className="text-blue-500 text-sm mt-auto">Ver mais</a>

        {/* Checkbox para marcar como Settlement */}
        <div className="mt-2 flex items-center">
          <input
            type="checkbox"
            checked={isSettlement}
            onChange={(e) => {
              e.stopPropagation(); // Evita que o clique no checkbox dispare o onSelect
              onToggleSettlement(post.post_id);
            }}
            className="mr-2"
          />
          <label className="text-sm">Settlement</label>
        </div>
      </div>
    </div>
  );
}
