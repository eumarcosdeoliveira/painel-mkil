export default function Preview({ htmlContent }) {
  return (
    <div className="w-full flex flex-col flex-grow min-h-0">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Preview</h2>
        <button
          className="bg-[#63acd5] text-white px-4 py-2 rounded-3xl"
          onClick={() => navigator.clipboard.writeText(htmlContent)}
        >
          Copy HTML
        </button>
      </div>
      <div className="flex flex-col flex-grow min-h-0 rounded-2xl overflow-hidden border">
        <div className="flex-1 overflow-auto space-y-4 p-2">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
}
