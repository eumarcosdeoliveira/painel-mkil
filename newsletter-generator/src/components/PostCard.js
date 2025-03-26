export default function PostCard({ post, selected, onSelect }) {
    return (
      <div className={`border p-4 rounded shadow ${selected ? "bg-blue-100" : ""}`} onClick={onSelect}>
        <h3 className="font-bold">{post.title}</h3>
        {post.media_type !== "WEBSITE_POST" && (
          <img src={post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url} alt={post.title} className="mt-2 w-full" />
        )}
        <p className="text-sm mt-2">{post.caption}</p>
        <a href={post.permalink} className="text-blue-500 text-sm">Ver mais</a>
      </div>
    );
  }
  