import { useRef, useEffect, useState } from "react";

export default function Preview({ htmlContent }) {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [iframeHeight, setIframeHeight] = useState("auto");

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument = iframeRef.current.contentDocument;
      iframeDocument.open();
      iframeDocument.write(htmlContent);
      iframeDocument.close();

      setTimeout(() => {
        const body = iframeRef.current.contentDocument.body;
        const realHeight = body.scrollHeight;
      
        // Remove 30px se tiver sobra
        const trimmedHeight = realHeight > 1000 ? realHeight - 30 : realHeight;
      
        setIframeHeight(trimmedHeight);
      }, 300);
      

    }
  }, [htmlContent]);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && iframeRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        // Define uma largura base mínima para telas pequenas (ex: 375px)
        const baseContentWidth = Math.max(
          iframeRef.current.contentDocument.body.scrollWidth || 600,
          375
        );

        const newScale = containerWidth / baseContentWidth;
        setScale(newScale > 1 ? 1 : newScale); // impede aumentar demais
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

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

      {/* 🔧 Scroll e altura limitados corretamente */}
      <div
        ref={containerRef}
        className="flex-grow rounded-2xl border bg-white overflow-auto"
        style={{
          maxHeight: '90vh', // força limite visual da tela
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div
          className="relative mx-auto"
          style={{
            width: `${100 / scale}%`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <iframe
            ref={iframeRef}
            title="Newsletter Preview"
            className="border-none w-full"
            style={{
              height: `${iframeHeight}px`,
              border: 0,
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>

  );
}
