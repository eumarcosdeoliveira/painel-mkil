export default function PostCard({ post, selected, onSelect }) {
  const isMediaPost = ["VIDEO", "IMAGE", "CAROUSEL_ALBUM"].includes(post.media_type);

  return (
    <div
      className={`border p-4 rounded flex ${selected ? "bg-blue-100" : ""}`}
      onClick={onSelect}
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
      </div>
    </div>
  );
}
