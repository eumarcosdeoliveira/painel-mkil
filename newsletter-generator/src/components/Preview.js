export default function Preview({ htmlContent }) {
    return (
      <div className="w-1/3 p-4 border-l">
        <h2 className="font-bold text-lg">Preview</h2>
        <div className="border p-2 h-3/4 overflow-auto" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => navigator.clipboard.writeText(htmlContent)}
        >
          Copy HTML
        </button>
      </div>
    );
  }
  